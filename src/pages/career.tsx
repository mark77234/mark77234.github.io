export default function CareerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-600 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">경력</h1>

        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-300 pl-4">
                <h3 className="text-xl font-medium">회사명</h3>
                <p className="text-orange-200">직책 • 2023 - 현재</p>
                <p className="mt-2">업무 내용 및 성과를 설명합니다.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="border-l-4 border-orange-300 pl-4">
              <h3 className="text-xl font-medium">학교명</h3>
              <p className="text-orange-200">전공 • 2020 - 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
