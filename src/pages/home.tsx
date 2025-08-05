import StatusBar from "../components/home/Statusbar";

export default function Home() {
  return (
    <div className="h-screen flex justify-between items-center px-16 gap-16 max-lg:flex-col max-lg:px-8 max-lg:gap-8 max-md:px-4">
      <div className="flex-1 max-w-2xl text-white max-lg:text-center">
        <div className="text-left max-lg:text-center">
          <h1 className="text-6xl font-bold text-white mb-8 leading-tight max-lg:text-5xl max-md:text-4xl">
            이병찬
          </h1>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-400 mb-2 leading-relaxed max-lg:text-xl max-md:text-lg">
              앱 개발자
            </h2>
            <h2 className="text-2xl font-normal text-subtext mb-2 leading-relaxed max-lg:text-xl max-md:text-lg">
              iOS Developer
            </h2>
            <h2 className="text-2xl font-normal text-subtext mb-2 leading-relaxed max-lg:text-xl max-md:text-lg">
              React Native Developer
            </h2>
          </div>
          <div className="mt-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-4 max-md:text-base">
              모바일 애플리케이션 개발에 열정을 가진 개발자입니다.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4 max-md:text-base">
              사용자 경험을 중시하며, 깔끔하고 직관적인 인터페이스를 만들어
              갑니다.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-[48vh] h-[85vh] p-4 bg-dark rounded-[40px] flex flex-col overflow-hidden flex-shrink-0 max-md:w-[300px] max-md:h-[600px]">
        <div className="bg-blue-100 w-full h-full rounded-[40px] overflow-hidden">
          <StatusBar />
          <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 w-30 h-1 bg-black rounded-sm opacity-25 z-10" />
        </div>
      </div>
    </div>
  );
}
