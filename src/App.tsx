import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1>이병찬의 Dev 블로그</h1>
        <p className="subtitle">App Dev · 앱 개발자 · mark77234</p>
      </header>
      <main className="main-content">
        <section className="intro-section">
          <h2>안녕하세요! 👋</h2>
          <p>
            앱 개발과 최신 기술, 그리고 개발자의 성장 이야기를 공유하는
            공간입니다.
            <br />
            React, TypeScript, 모바일 앱, UI/UX, 트렌디한 개발 문화를 다룹니다.
          </p>
        </section>
      </main>
      <footer className="main-footer">
        <span>© 2024 이병찬(mark77234) · All rights reserved.</span>
      </footer>
    </div>
  );
};

export default App;
