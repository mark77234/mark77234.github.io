export default function ActivityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-yellow-600 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">대외활동</h1>

        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Awards & Competitions
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-300 pl-4">
                <h3 className="text-xl font-medium">🏆 대회명</h3>
                <p className="text-yellow-200">수상 내역 • 2024</p>
                <p className="mt-2">대회 참여 경험과 성과를 설명합니다.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Volunteer & Activities
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-300 pl-4">
                <h3 className="text-xl font-medium">봉사활동명</h3>
                <p className="text-yellow-200">역할 • 2023</p>
                <p className="mt-2">봉사활동 내용과 의미를 설명합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
