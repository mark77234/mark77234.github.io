export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-green-600 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">프로젝트</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">📱 모바일 앱</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">프로젝트명</h3>
              <p className="text-green-200">React Native • 2024</p>
              <p className="mt-2">
                프로젝트 설명과 사용 기술, 주요 기능을 소개합니다.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="px-3 py-1 bg-green-500/30 rounded-full text-sm">
                  React Native
                </span>
                <span className="px-3 py-1 bg-green-500/30 rounded-full text-sm">
                  TypeScript
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">🌐 웹 애플리케이션</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">프로젝트명</h3>
              <p className="text-green-200">React • 2024</p>
              <p className="mt-2">웹 프로젝트 설명과 주요 기능을 소개합니다.</p>
              <div className="flex gap-2 mt-4">
                <span className="px-3 py-1 bg-green-500/30 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-green-500/30 rounded-full text-sm">
                  Next.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
