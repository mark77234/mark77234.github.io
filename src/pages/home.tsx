import StatusBar from "../components/home/Statusbar";
import Profile from "../components/home/Profile";
import Phone from "../components/ui/Phone";
import MainLayout from "../layouts/MainLayout";
import { PROFILE_DATA } from "../constants/profile";

export default function Home() {
  return (
    <MainLayout>
      <Profile
        name={PROFILE_DATA.name}
        titles={PROFILE_DATA.titles}
        technologies={PROFILE_DATA.technologies}
      />
      <Phone>
        <StatusBar />
      </Phone>
    </MainLayout>
  );
}
