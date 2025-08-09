interface BlogAppProps {
  onBack: () => void;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export default function BlogApp({ onBack }: BlogAppProps) {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "React Native 개발 경험기",
      excerpt:
        "React Native를 사용하여 크로스플랫폼 앱을 개발하면서 배운 것들을 공유합니다.",
      date: "2024.03.15",
      readTime: "5분",
    },
    {
      id: 2,
      title: "Swift UI vs Flutter 비교",
      excerpt:
        "모바일 앱 개발을 위한 두 프레임워크를 실제 프로젝트 경험을 바탕으로 비교해봅니다.",
      date: "2024.03.10",
      readTime: "8분",
    },
    {
      id: 3,
      title: "Kotlin Coroutines 활용법",
      excerpt:
        "안드로이드 개발에서 비동기 처리를 위한 Kotlin Coroutines 사용 방법을 알아봅니다.",
      date: "2024.03.05",
      readTime: "6분",
    },
    {
      id: 4,
      title: "iOS 앱 배포 가이드",
      excerpt: "App Store에 앱을 배포하는 과정과 주의사항들을 정리했습니다.",
      date: "2024.02.28",
      readTime: "7분",
    },
  ];

  const handleBlogClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* 헤더 */}
      <div className="bg-blue-500 text-white p-4 flex items-center">
        <button
          onClick={onBack}
          className="mr-4 text-xl hover:bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
        >
          ←
        </button>
        <h1 className="text-lg font-bold">개발 블로그</h1>
      </div>

      {/* 프로필 섹션 */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
            이
          </div>
          <div>
            <h2 className="font-bold text-xl text-gray-800">이병찬</h2>
            <p className="text-gray-600">App Developer</p>
            <p className="text-sm text-gray-500 mt-1">
              Kotlin • Swift • React Native • Flutter
            </p>
          </div>
        </div>
      </div>

      {/* 블로그 포스트 목록 */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleBlogClick("https://mark77234.github.io")}
            >
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{post.date}</span>
                <span>{post.readTime} 읽기</span>
              </div>
            </article>
          ))}
        </div>

        {/* 더 많은 글 보기 버튼 */}
        <div className="mt-8 text-center">
          <button
            onClick={() => handleBlogClick("https://mark77234.github.io")}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            전체 블로그 보기
          </button>
        </div>
      </div>
    </div>
  );
}
