interface ProfileProps {
  name: string;
  titles: readonly string[];
  descriptions: readonly string[];
}

export default function Profile({ name, titles, descriptions }: ProfileProps) {
  return (
    <section className="flex-1 max-w-2xl text-white max-lg:text-center">
      <div className="text-left max-lg:text-center">
        <h1 className="text-6xl font-bold text-white mb-8 leading-tight max-lg:text-5xl max-md:text-4xl">
          {name}
        </h1>

        <div className="mb-8">
          {titles.map((title, index) => (
            <h2
              key={title}
              className={`text-2xl mb-2 leading-relaxed max-lg:text-xl max-md:text-lg ${
                index === 0
                  ? "font-semibold text-blue-400"
                  : "font-normal text-subtext"
              }`}
            >
              {title}
            </h2>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          {descriptions.map((description, index) => (
            <p
              key={index}
              className="text-lg text-gray-300 leading-relaxed max-md:text-base"
            >
              {description}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
