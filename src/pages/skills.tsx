export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-purple-600 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">기술 스택</h1>

        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Programming Languages
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-purple-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">⚛️</div>
                <p className="font-medium">JavaScript</p>
              </div>
              <div className="bg-purple-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">📘</div>
                <p className="font-medium">TypeScript</p>
              </div>
              <div className="bg-purple-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🐍</div>
                <p className="font-medium">Python</p>
              </div>
              <div className="bg-purple-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">☕</div>
                <p className="font-medium">Java</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Frontend</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-purple-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">⚛️</div>
                <p className="font-medium">React</p>
              </div>
              <div className="bg-purple-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🅰️</div>
                <p className="font-medium">Next.js</p>
              </div>
              <div className="bg-purple-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🎨</div>
                <p className="font-medium">Tailwind CSS</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Backend & Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-purple-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🟢</div>
                <p className="font-medium">Node.js</p>
              </div>
              <div className="bg-purple-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🐙</div>
                <p className="font-medium">Git</p>
              </div>
              <div className="bg-purple-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🐳</div>
                <p className="font-medium">Docker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
