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
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-2xl flex items-center justify-center text-lg sm:text-xl md:text-2xl shadow-lg mb-1">
        <img src={icon} alt={name} className="w-full h-full object-cover" />
      </div>
      <span className="text-[10px] sm:text-xs md:text-xs text-white text-center font-medium max-w-12 sm:max-w-14 md:max-w-16 drop-shadow-md leading-tight">
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

export default function Apps({ deviceType, onAppClick }: HomeScreenProps) {
  const apps = [
    { name: "블로그", icon: BlogIcon },
    { name: "경력", icon: CareerIcon },
    { name: "대외활동", icon: ActivityIcon },
    { name: "프로젝트", icon: ProjectIcon },
    { name: "연명부", icon: ContactIcon },
    { name: "기술", icon: SkillsIcon },
  ];

  // 디바이스 타입과 화면 크기에 따른 반응형 그리드 설정
  const getGridConfig = () => {
    if (deviceType === "ipad") {
      return {
        gridCols: "grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5",
        gap: "gap-4 sm:gap-6 md:gap-8 lg:gap-10",
        padding: "p-4 sm:p-6 md:p-8 lg:p-10",
      };
    } else {
      return {
        gridCols: "grid-cols-4",
        gap: "gap-3 sm:gap-4 md:gap-6",
        padding: "p-3 sm:p-4 md:p-6 lg:p-8",
      };
    }
  };

  const { gridCols, gap, padding } = getGridConfig();

  return (
    <div className={`w-full h-full ${padding} flex flex-col`}>
      {/* 앱 그리드 */}
      <div className={`grid ${gridCols} ${gap} `}>
        {apps.map((app, index) => {
          let linkTo = "";
          switch (app.name) {
            case "블로그":
              linkTo = "/blog";
              break;
            case "경력":
              linkTo = "/career";
              break;
            case "대외활동":
              linkTo = "/activity";
              break;
            case "프로젝트":
              linkTo = "/project";
              break;
            case "연명부":
              linkTo = "/contact";
              break;
            case "기술":
              linkTo = "/skills";
              break;
            default:
              linkTo = "";
          }

          return (
            <AppIcon
              key={index}
              name={app.name}
              icon={app.icon}
              linkTo={linkTo}
            />
          );
        })}
      </div>

      {/* 독 영역 */}
      <div className="flex justify-center mt-auto mb-1 sm:mb-2 md:mb-3">
        <div className="bg-white/20 backdrop-blur-md rounded-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 flex gap-1.5 sm:gap-2 md:gap-3">
          <AppIcon icon={CallIcon} onClick={() => onAppClick("Phone")} />

          <AppIcon icon={MessageIcon} onClick={() => onAppClick("Camera")} />
          <AppIcon icon={SafariIcon} onClick={() => onAppClick("Safari")} />
          <AppIcon icon={SettingsIcon} onClick={() => onAppClick("Settings")} />
        </div>
      </div>
    </div>
  );
}
