import { Text } from "../ui/text";

interface ProfileProps {
  name: string;
  titles: readonly string[];
  descriptions: readonly string[];
}

export default function Profile({ name, titles, descriptions }: ProfileProps) {
  return (
    <section className="flex-1 max-w-2xl text-white max-lg:text-center">
      <div className="text-left max-lg:text-center">
        <Text
          type="display"
          className="mb-8 leading-tight max-lg:text-5xl max-md:text-4xl"
        >
          {name}
        </Text>

        <div className="mb-8">
          {titles.map((title, index) => (
            <Text
              key={title}
              type={index === 0 ? "title" : "subtitle1"}
              className={`mb-2 leading-relaxed max-lg:text-xl max-md:text-lg ${
                index === 0 ? "" : "text-subtext"
              }`}
              as="h2"
            >
              {title}
            </Text>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          {descriptions.map((description, index) => (
            <Text
              key={index}
              type="body1"
              className="text-lg leading-relaxed max-md:text-base"
            >
              {description}
            </Text>
          ))}
        </div>
      </div>
    </section>
  );
}
