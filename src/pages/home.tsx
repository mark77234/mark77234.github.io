import StatusBar from "../components/home/Statusbar";
import ProfileHeader from "../components/home/ProfileHeader";
import AnimatedDevice from "../components/ui/AnimatedDevice";
import DeviceToggle from "../components/ui/DeviceToggle";
import DeviceContainer from "../components/device/DeviceContainer";
import { useDeviceMode } from "../hooks/useDeviceMode";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  const { deviceType, toggleDevice } = useDeviceMode();

  return (
    <MainLayout>
      <DeviceToggle deviceType={deviceType} onToggle={toggleDevice} />

      <ProfileHeader />

      <AnimatedDevice deviceType={deviceType}>
        <StatusBar deviceType={deviceType} />
        <DeviceContainer deviceType={deviceType} />
      </AnimatedDevice>
    </MainLayout>
  );
}
