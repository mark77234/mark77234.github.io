import { Text } from "../ui/text";

interface TechnologyCategories {
  main: readonly string[];
  selfLearned: readonly string[];
  academic: readonly string[];
}

interface ProfileProps {
  name: string;
  titles: readonly string[];
  technologies?: TechnologyCategories;
}

export default function Profile({ name, titles, technologies }: ProfileProps) {
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
          {titles.map((title) => (
            <Text
              key={title}
              type="title"
              className="mb-2 leading-relaxed max-lg:text-xl max-md:text-lg"
              as="h2"
            >
              {title}
            </Text>
          ))}
        </div>

        {technologies && (
          <div className="mb-8 space-y-6">
            <div>
              <Text type="subtitle2" className="mb-4 text-gray-400">
                Main Technologies
              </Text>
              <div className="flex flex-wrap gap-3">
                {technologies.main.map((tech) => (
                  <Text
                    key={tech}
                    type="body2"
                    className="px-3 py-1 bg-blue-900/30 rounded-full text-blue-300 border border-blue-700 hover:border-blue-500 transition-colors"
                    as="span"
                  >
                    {tech}
                  </Text>
                ))}
              </div>
            </div>

            <div>
              <Text type="subtitle2" className="mb-4 text-gray-400">
                Self-Learned
              </Text>
              <div className="flex flex-wrap gap-3">
                {technologies.selfLearned.map((tech) => (
                  <Text
                    key={tech}
                    type="body2"
                    className="px-3 py-1 bg-green-900/30 rounded-full text-green-300 border border-green-700 hover:border-green-500 transition-colors"
                    as="span"
                  >
                    {tech}
                  </Text>
                ))}
              </div>
            </div>

            <div>
              <Text type="subtitle2" className="mb-4 text-gray-400">
                Academic
              </Text>
              <div className="flex flex-wrap gap-3">
                {technologies.academic.map((tech) => (
                  <Text
                    key={tech}
                    type="body2"
                    className="px-3 py-1 bg-purple-900/30 rounded-full text-purple-300 border border-purple-700 hover:border-purple-500 transition-colors"
                    as="span"
                  >
                    {tech}
                  </Text>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
