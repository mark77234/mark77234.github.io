import StatusBar from "../components/home/Statusbar";
import Profile from "../components/home/Profile";
import Phone from "../components/ui/Phone";
import IPad from "../components/ui/IPad";
import DeviceToggle from "../components/ui/DeviceToggle";
import MainLayout from "../layouts/MainLayout";
import { PROFILE_DATA } from "../constants/profile";
import { useDeviceMode } from "../hooks/useDeviceMode";

export default function Home() {
  const { deviceType, toggleDevice } = useDeviceMode();

  return (
    <MainLayout>
      <DeviceToggle deviceType={deviceType} onToggle={toggleDevice} />

      <Profile
        name={PROFILE_DATA.name}
        titles={PROFILE_DATA.titles}
        technologies={PROFILE_DATA.technologies}
      />

      {deviceType === "iphone" ? (
        <Phone>
          <StatusBar deviceType={deviceType} />
        </Phone>
      ) : (
        <IPad>
          <StatusBar deviceType={deviceType} />
        </IPad>
      )}
    </MainLayout>
  );
}
