import { Text } from "../ui/Text";
import F1CarAnimation from "../ui/F1CarAnimation";

export default function ProfileHeader() {
  return (
    <div className="relative">
      <Text
        type="display"
        className="mb-8 leading-tight max-lg:text-5xl max-md:text-4xl"
      >
        이병찬
      </Text>
      <Text
        type="title"
        className="mb-6 leading-relaxed max-lg:text-xl max-md:text-lg"
        as="h2"
      >
        App developer
      </Text>

      <F1CarAnimation />

      {/* Speed Quote */}
      <div className="text-center animate-fade-in-up">
        <Text
          type="body1"
          className="text-gray-600 italic text-sm max-md:text-xs opacity-80"
        >
          "F1보다 빠른 성장을 추구하는 개발자"
        </Text>
      </div>
    </div>
  );
}
