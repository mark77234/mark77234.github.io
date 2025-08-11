import { Link } from "react-router-dom";
import type { DeviceType } from "../../hooks/useDeviceMode";
import BlogIcon from "../../assets/blog-icon.svg";
import CareerIcon from "../../assets/career-icon.svg";
import ActivityIcon from "../../assets/activity-icon.svg";
import ProjectIcon from "../../assets/project-icon.svg";
import ContactIcon from "../../assets/contact-icon.svg";
import CallIcon from "../../assets/call.svg";
import MessageIcon from "../../assets/message.svg";
import SafariIcon from "../../assets/safari.svg";
import SettingsIcon from "../../assets/settings.svg";
import SkillsIcon from "../../assets/skills-icon.svg";

interface HomeScreenProps {
  deviceType: DeviceType;
  onAppClick: (appName: string) => void;
}

interface AppIconProps {
  name?: string;
  icon: string;
  onClick?: () => void;
  linkTo?: string;
}

function AppIcon({ name, icon, onClick, linkTo }: AppIconProps) {
  const iconContent = (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg mb-1">
        <img src={icon} alt={name} className="w-full h-full object-cover" />
      </div>
      <span className="text-xs text-white text-center font-medium max-w-16 drop-shadow-md">
        {name}
      </span>
    </div>
  );

  if (linkTo) {
    return (
      <Link
        to={linkTo}
        className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
      >
        {iconContent}
      </Link>
    );
  }

  return (
    <div
      className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
      onClick={onClick}
    >
      {iconContent}
    </div>
  );
}

export default function HomeScreen({
  deviceType,
  onAppClick,
}: HomeScreenProps) {
  const apps = [
    { name: "블로그", icon: BlogIcon },
    { name: "경력", icon: CareerIcon },
    { name: "대외활동", icon: ActivityIcon },
    { name: "프로젝트", icon: ProjectIcon },
    { name: "연명부", icon: ContactIcon },
    { name: "기술", icon: SkillsIcon },
  ];

  const gridCols = deviceType === "ipad" ? "grid-cols-4" : "grid-cols-4";
  const gap = deviceType === "ipad" ? "gap-12" : "gap-8";
  const padding = deviceType === "ipad" ? "p-12" : "p-8";

  return (
    <div className={`w-full h-full ${padding} flex flex-col`}>
      {/* 앱 그리드 */}
      <div className={`grid ${gridCols} ${gap} `}>
        {apps.map((app, index) => {
          if (app.name === "Blog") {
            return (
              <AppIcon
                key={index}
                name={app.name}
                icon={app.icon}
                linkTo="/blog"
              />
            );
          }
          return (
            <AppIcon
              key={index}
              name={app.name}
              icon={app.icon}
              onClick={() => onAppClick(app.name)}
            />
          );
        })}
      </div>

      {/* 독 영역 */}
      <div className="flex justify-center mt-auto mb-2">
        <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-3 flex gap-3">
          <AppIcon icon={CallIcon} onClick={() => onAppClick("Phone")} />

          <AppIcon icon={MessageIcon} onClick={() => onAppClick("Camera")} />
          <AppIcon icon={SafariIcon} onClick={() => onAppClick("Safari")} />
          <AppIcon icon={SettingsIcon} onClick={() => onAppClick("Settings")} />
        </div>
      </div>
    </div>
  );
}
