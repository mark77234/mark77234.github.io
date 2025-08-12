import { Text } from "../ui/Text";

export default function ProfileHeader() {
  return (
    <div className="relative px-4 sm:px-6 md:px-8">
      <Text
        type="display"
        className="mb-8 leading-tight text-8xl lg:text-9xl xl:text-[10rem] max-lg:text-7xl max-md:text-6xl max-sm:text-5xl font-bold"
      >
        이병찬
      </Text>
      <Text
        type="title"
        className="mb-8 leading-relaxed text-4xl lg:text-5xl xl:text-6xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-semibold"
        as="h2"
      >
        App developer
      </Text>

      <div className="text-center animate-fade-in-up mt-6">
        <Text
          type="body1"
          className="text-gray-600 italic text-lg lg:text-xl max-md:text-base max-sm:text-sm opacity-80"
        >
          "F1보다 빠른 성장을 추구하는 개발자"
        </Text>
      </div>
    </div>
  );
}
