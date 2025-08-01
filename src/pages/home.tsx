import StatusBar from "../components/home/Statusbar";

function IphoneStatusBar() {
  return (
    <div className="iphone-status-bar">
      <span className="iphone-status-time">9:41</span>
      <span className="iphone-status-icons">
        <span className="iphone-status-signal" />
        <span className="iphone-status-wifi" />
        <span className="iphone-status-battery" />
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="main-background">
      <div className="iphone-container">
        <div className="iphone-screen">
          <StatusBar />
          <div className="iphone-home-indicator" />
        </div>
      </div>
    </div>
  );
}
