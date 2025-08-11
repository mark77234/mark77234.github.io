import Profile from "../components/home/Profile";
import StatusBar from "../components/home/Statusbar";
import AnimatedDevice from "../components/ui/AnimatedDevice";
import DeviceToggle from "../components/ui/DeviceToggle";
import DeviceContainer from "../components/device/DeviceContainer";
import { PROFILE_DATA } from "../constants/profile";
import { useDeviceMode } from "../hooks/useDeviceMode";
import MainLayout from "../layouts/MainLayout";
import { Text } from "../components/ui/Text";

export default function Home() {
  const { deviceType, toggleDevice } = useDeviceMode();

  return (
    <MainLayout>
      <DeviceToggle deviceType={deviceType} onToggle={toggleDevice} />

      <div>
        <Text
          type="display"
          className="mb-8 leading-tight max-lg:text-5xl max-md:text-4xl"
        >
          이병찬
        </Text>
        <Text
          type="title"
          className="mb-2 leading-relaxed max-lg:text-xl max-md:text-lg"
          as="h2"
        >
          App developer
        </Text>
      </div>

      <AnimatedDevice deviceType={deviceType}>
        <StatusBar deviceType={deviceType} />
        <DeviceContainer deviceType={deviceType} />
      </AnimatedDevice>
    </MainLayout>
  );
}
