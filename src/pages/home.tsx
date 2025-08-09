import Profile from "../components/home/Profile";
import StatusBar from "../components/home/Statusbar";
import AnimatedDevice from "../components/ui/AnimatedDevice";
import DeviceToggle from "../components/ui/DeviceToggle";
import DeviceContainer from "../components/device/DeviceContainer";
import { PROFILE_DATA } from "../constants/profile";
import { useDeviceMode } from "../hooks/useDeviceMode";
import MainLayout from "../layouts/MainLayout";

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

      <AnimatedDevice deviceType={deviceType}>
        <StatusBar deviceType={deviceType} />
        <DeviceContainer deviceType={deviceType} />
      </AnimatedDevice>
    </MainLayout>
  );
}
