import { Link } from "react-router-dom";
import type { DeviceType } from "../../hooks/useDeviceMode";
import BlogIcon from "../../assets/blog-icon.svg";

interface HomeScreenProps {
  deviceType: DeviceType;
  onAppClick: (appName: string) => void;
}

interface AppIconProps {
  name?: string;
  icon: string;
  color: string;
  onClick?: () => void;
  linkTo?: string;
  isSvg?: boolean;
}

function AppIcon({
  name,
  icon,
  color,
  onClick,
  linkTo,
  isSvg = false,
}: AppIconProps) {
  const iconContent = (
    <div className="flex flex-col items-center">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg mb-1 ${color}`}
      >
        {isSvg ? <img src={icon} alt={name} className="w-12 h-12" /> : icon}
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
    { name: "Blog", icon: BlogIcon, color: "bg-blue-500", isSvg: true },
    { name: "Photos", icon: "📷", color: "bg-green-500", isSvg: false },
    { name: "Settings", icon: "⚙️", color: "bg-gray-600", isSvg: false },
    { name: "Safari", icon: "🧭", color: "bg-blue-400", isSvg: false },
    { name: "Messages", icon: "💬", color: "bg-green-400", isSvg: false },
    { name: "Mail", icon: "📧", color: "bg-blue-600", isSvg: false },
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
                color={app.color}
                linkTo="/blog"
                isSvg={app.isSvg}
              />
            );
          }
          return (
            <AppIcon
              key={index}
              name={app.name}
              icon={app.icon}
              color={app.color}
              onClick={() => onAppClick(app.name)}
              isSvg={app.isSvg}
            />
          );
        })}
      </div>

      {/* 독 영역 */}
      <div className="flex justify-center mt-auto mb-2">
        <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-3 flex gap-3">
          <AppIcon
            icon="📞"
            color="bg-green-500"
            onClick={() => onAppClick("Phone")}
          />

          <AppIcon
            icon="💬"
            color="bg-green-500"
            onClick={() => onAppClick("Camera")}
          />
          <AppIcon
            icon="🧭"
            color="bg-gray-200"
            onClick={() => onAppClick("Safari")}
          />
          <AppIcon
            icon="⚙️"
            color="bg-gray-200"
            onClick={() => onAppClick("Settings")}
          />
        </div>
      </div>
    </div>
  );
}
