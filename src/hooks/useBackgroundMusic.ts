import { useState, useEffect, useRef } from "react";

export const useBackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(true); // 기본값: 켜짐
  const [isLoaded, setIsLoaded] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [audioType, setAudioType] = useState<"file" | "generated">("generated");

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);

  useEffect(() => {
    // 사용자 상호작용 감지
    const handleUserInteraction = () => {
      setUserInteracted(true);
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);

    // 오디오 파일 시도, 실패시 생성 사운드 사용
    initializeAudio();

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      cleanup();
    };
  }, []);

  const initializeAudio = async () => {
    try {
      // 먼저 오디오 파일 시도
      const audio = new Audio();
      audio.loop = true;
      audio.volume = 0.3; // 적당한 볼륨으로 설정
      audio.preload = "auto"; // 미리 로드

      // lose_my_mind.mp3 배경음악 파일 사용
      const musicPaths = ["/audio/lose_my_mind.mp3"];

      let audioLoaded = false;

      for (const path of musicPaths) {
        try {
          audio.src = path;
          await new Promise((resolve, reject) => {
            const onCanPlay = () => {
              audio.removeEventListener("canplaythrough", onCanPlay);
              audio.removeEventListener("error", onError);
              resolve(true);
            };
            const onError = (e: any) => {
              audio.removeEventListener("canplaythrough", onCanPlay);
              audio.removeEventListener("error", onError);
              reject(e);
            };

            audio.addEventListener("canplaythrough", onCanPlay);
            audio.addEventListener("error", onError);
            audio.load();
          });

          audioRef.current = audio;
          setAudioType("file");
          audioLoaded = true;
          console.log(`배경음악 로드 성공: ${path}`);
          break;
        } catch (error) {
          console.log(`오디오 파일 로드 실패: ${path}`, error);
        }
      }

      if (!audioLoaded) {
        // 파일 로드 실패시 생성 사운드 사용
        setAudioType("generated");
      }

      setIsLoaded(true);
    } catch (error) {
      console.warn("오디오 초기화 실패:", error);
      setAudioType("generated");
      setIsLoaded(true);
    }
  };

  const createAmbientSound = async () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext ||
          (window as any).webkitAudioContext)();
      }

      const audioContext = audioContextRef.current;

      // 편안한 앰비언트 사운드 생성
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      const filterNode = audioContext.createBiquadFilter();

      oscillator.connect(filterNode);
      filterNode.connect(gainNode);
      gainNode.connect(audioContext.destination);

      // 부드러운 사인파 + 저주파 필터
      oscillator.frequency.setValueAtTime(220, audioContext.currentTime); // A3
      oscillator.type = "sine";

      filterNode.type = "lowpass";
      filterNode.frequency.setValueAtTime(800, audioContext.currentTime);

      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.03, audioContext.currentTime + 1); // 페이드 인

      oscillator.start();
      oscillatorRef.current = oscillator;

      return oscillator;
    } catch (error) {
      console.warn("앰비언트 사운드 생성 실패:", error);
      return null;
    }
  };

  const cleanup = () => {
    // 오디오 파일 정리
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    // 생성 사운드 정리
    if (oscillatorRef.current) {
      try {
        oscillatorRef.current.stop();
        oscillatorRef.current = null;
      } catch (error) {
        console.warn("oscillator 정지 실패:", error);
      }
    }

    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
  };

  const toggleMusic = async () => {
    if (!userInteracted) {
      // 사용자에게 상호작용 유도
      return;
    }

    if (isPlaying) {
      // 음악 정지
      if (audioType === "file" && audioRef.current) {
        audioRef.current.pause();
      } else if (audioType === "generated") {
        cleanup();
      }
    } else {
      // 음악 재생
      if (audioType === "file" && audioRef.current) {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.warn("오디오 파일 재생 실패:", error);
          // 파일 재생 실패시 생성 사운드로 전환
          setAudioType("generated");
          await createAmbientSound();
        }
      } else if (audioType === "generated") {
        await createAmbientSound();
      }
    }

    setIsPlaying(!isPlaying);
  };

  // 사용자 상호작용 후 자동 재생
  useEffect(() => {
    if (userInteracted && isPlaying && isLoaded) {
      if (audioType === "file" && audioRef.current) {
        audioRef.current.play().catch(() => {
          setAudioType("generated");
          createAmbientSound();
        });
      } else if (audioType === "generated" && !oscillatorRef.current) {
        createAmbientSound();
      }
    }
  }, [userInteracted, isPlaying, isLoaded, audioType]);

  return {
    isPlaying,
    isLoaded,
    userInteracted,
    audioType,
    toggleMusic,
  };
};
