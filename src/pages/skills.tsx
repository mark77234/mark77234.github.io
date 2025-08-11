import Profile from "../components/home/Profile";
import { PROFILE_DATA } from "../constants/profile";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br  text-white p-8">
      <Profile
        name={PROFILE_DATA.name}
        titles={PROFILE_DATA.titles}
        technologies={PROFILE_DATA.technologies}
      />
    </div>
  );
}
