import { Text } from "../ui/Text";

export default function ProfileHeader() {
  return (
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
  );
}
