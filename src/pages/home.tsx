import StatusBar from "../components/home/Statusbar";
import Profile from "../components/home/Profile";
import PhoneMockup from "../components/ui/PhoneMockup";
import MainLayout from "../layouts/MainLayout";
import { PROFILE_DATA } from "../constants/profile";

export default function Home() {
  return (
    <MainLayout>
      <Profile
        name={PROFILE_DATA.name}
        titles={PROFILE_DATA.titles}
        descriptions={PROFILE_DATA.descriptions}
      />
      <PhoneMockup>
        <StatusBar />
      </PhoneMockup>
    </MainLayout>
  );
}
