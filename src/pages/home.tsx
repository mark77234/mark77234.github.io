import StatusBar from "../components/home/Statusbar";

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
