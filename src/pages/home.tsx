import StatusBar from "../components/home/Statusbar";
import ProfileHeader from "../components/home/ProfileHeader";
import AnimatedDevice from "../components/ui/AnimatedDevice";
import DeviceToggle from "../components/ui/DeviceToggle";
import MusicToggle from "../components/ui/MusicToggle";
import DeviceContainer from "../components/device/DeviceContainer";
import { useDeviceMode } from "../hooks/useDeviceMode";
import { useBackgroundMusic } from "../hooks/useBackgroundMusic";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  const { deviceType, toggleDevice } = useDeviceMode();
  const { isPlaying, userInteracted, toggleMusic } = useBackgroundMusic();

  return (
    <MainLayout>
      {/* 음악 토글 버튼 */}
      <MusicToggle
        isPlaying={isPlaying}
        onToggle={toggleMusic}
        userInteracted={userInteracted}
      />

      <DeviceToggle deviceType={deviceType} onToggle={toggleDevice} />

      <ProfileHeader />

      <AnimatedDevice deviceType={deviceType}>
        <StatusBar deviceType={deviceType} />
        <DeviceContainer deviceType={deviceType} />
      </AnimatedDevice>
    </MainLayout>
  );
}
