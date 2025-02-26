export class DinoGame {
  constructor() {
    // 게임 요소 선택
    this.gameContainer = document.getElementById("game-container");
    this.dino = document.getElementById("dino");
    this.obstacle = document.getElementById("obstacle");
    this.scoreElement = document.getElementById("score");
    this.startBtn = document.getElementById("start-btn");

    // 게임 상태 변수
    this.score = 0;
    this.isJumping = false;
    this.gameActive = false;
    this.obstacleSpeed = 5; // 장애물 이동 속도
    this.jumpHeight = 150; // 점프 높이
    this.gravity = 5; // 중력 값

    // 게임 초기화
    this.init();
  }

  /**
   * 게임 초기화 메서드
   */
  init() {
    this.resetGameState();
    this.startBtn.addEventListener("click", () => this.startGame());
    document.addEventListener("click", () => this.handleJump());
    document.addEventListener("touchstart", () => this.handleJump()); // 모바일 대응
  }

  /**
   * 게임 상태 초기화
   */
  resetGameState() {
    this.score = 0;
    this.isJumping = false;
    this.gameActive = false;
    this.obstacle.style.right = "-20px"; // 장애물 초기 위치
    this.dino.style.bottom = "0px"; // 공룡 초기 위치
    this.updateScore();
  }

  /**
   * 게임 시작 메서드
   */
  startGame() {
    if (this.gameActive) return; // 이미 게임이 실행 중이면 무시

    this.gameActive = true;
    this.startBtn.hidden = true; // 시작 버튼 숨기기
    this.score = 0; // 점수 초기화
    this.updateScore();
    this.moveObstacle(); // 장애물 이동 시작
  }

  /**
   * 사용자 입력 처리 메서드
   * @param {KeyboardEvent} e - 키보드 이벤트 객체
   */
  handleInput(e) {
    if (e.code === "Space" && !this.isJumping && this.gameActive) {
      this.jump(); // 스페이스바를 누르면 점프
    }
  }

  handleJump() {
    if (!this.isJumping && this.gameActive) {
      this.jump();
    }
  }

  /**
   * 공룡 점프 메서드
   */
  jump() {
    if (this.isJumping) return; // 이미 점프 중이면 무시

    this.isJumping = true;
    let position = 0;

    // 점프 업 애니메이션
    const jumpUp = setInterval(() => {
      if (position >= this.jumpHeight) {
        clearInterval(jumpUp);
        this.fall(); // 최대 높이 도달 시 낙하 시작
      } else {
        position += this.gravity;
        this.dino.style.bottom = `${position}px`;
      }
    }, 20);
  }

  /**
   * 공룡 낙하 메서드
   */
  fall() {
    let position = this.jumpHeight;

    // 낙하 애니메이션
    const fallDown = setInterval(() => {
      if (position <= 0) {
        clearInterval(fallDown);
        this.isJumping = false; // 낙하 완료 시 점프 상태 해제
      } else {
        position -= this.gravity;
        this.dino.style.bottom = `${position}px`;
      }
    }, 20);
  }

  /**
   * 장애물 이동 메서드
   */
  moveObstacle() {
    let obstaclePosition = -20;

    // 장애물 이동 애니메이션
    const obstacleInterval = setInterval(() => {
      if (!this.gameActive) {
        clearInterval(obstacleInterval); // 게임이 비활성화되면 중지
        return;
      }

      // 장애물 이동
      obstaclePosition += this.obstacleSpeed;
      this.obstacle.style.right = `${obstaclePosition}px`;

      // 장애물이 화면을 벗어나면 재설정
      if (obstaclePosition > this.gameContainer.offsetWidth) {
        obstaclePosition = -20;
        this.score++; // 점수 증가
        this.updateScore();
      }

      // 충돌 감지
      if (this.checkCollision()) {
        this.gameOver();
        clearInterval(obstacleInterval); // 게임 오버 시 장애물 이동 중지
      }
    }, 20);
  }

  /**
   * 충돌 감지 메서드
   * @returns {boolean} - 충돌 여부
   */
  checkCollision() {
    const dinoRect = this.dino.getBoundingClientRect();
    const obstacleRect = this.obstacle.getBoundingClientRect();

    // 충돌 조건 계산
    return !(
      dinoRect.right < obstacleRect.left ||
      dinoRect.left > obstacleRect.right ||
      dinoRect.bottom < obstacleRect.top
    );
  }

  /**
   * 게임 오버 처리 메서드
   */
  gameOver() {
    this.gameActive = false;
    this.startBtn.hidden = false; // 시작 버튼 표시
    alert(`Game Over! Score: ${this.score}`); // 점수 표시
    this.resetGameState(); // 게임 상태 초기화
  }

  /**
   * 점수 업데이트 메서드
   */
  updateScore() {
    this.scoreElement.textContent = `Score: ${this.score}`;
  }
}
