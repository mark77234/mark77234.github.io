import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

export default function Blog() {
  const navigate = useNavigate();

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "React Native 개발 경험기",
      excerpt:
        "React Native를 사용하여 크로스플랫폼 앱을 개발하면서 배운 것들을 공유합니다.",
      content:
        "React Native를 처음 접했을 때는 단순히 '하나의 코드로 iOS와 Android 앱을 모두 만들 수 있다'는 점에 매력을 느꼈습니다. 하지만 실제로 개발해보니 그보다 훨씬 많은 장점과 고려사항들이 있었습니다...",
      date: "2024.03.15",
      readTime: "5분",
      tags: ["React Native", "Mobile", "Cross-platform"],
    },
    {
      id: 2,
      title: "Swift UI vs Flutter 비교",
      excerpt:
        "모바일 앱 개발을 위한 두 프레임워크를 실제 프로젝트 경험을 바탕으로 비교해봅니다.",
      content:
        "최근 모바일 앱 개발 프레임워크로 SwiftUI와 Flutter가 주목받고 있습니다. 두 프레임워크 모두 실제 프로젝트에서 사용해본 경험을 바탕으로 각각의 장단점을 비교해보겠습니다...",
      date: "2024.03.10",
      readTime: "8분",
      tags: ["SwiftUI", "Flutter", "iOS", "Android"],
    },
    {
      id: 3,
      title: "Kotlin Coroutines 활용법",
      excerpt:
        "안드로이드 개발에서 비동기 처리를 위한 Kotlin Coroutines 사용 방법을 알아봅니다.",
      content:
        "안드로이드 앱에서 네트워크 요청, 데이터베이스 작업 등 시간이 오래 걸리는 작업들을 효율적으로 처리하기 위해서는 비동기 프로그래밍이 필수입니다. Kotlin Coroutines는 이러한 비동기 작업을 간단하고 직관적으로 처리할 수 있게 해줍니다...",
      date: "2024.03.05",
      readTime: "6분",
      tags: ["Kotlin", "Android", "Coroutines", "Async"],
    },
    {
      id: 4,
      title: "iOS 앱 배포 가이드",
      excerpt: "App Store에 앱을 배포하는 과정과 주의사항들을 정리했습니다.",
      content:
        "iOS 앱을 App Store에 배포하는 과정은 처음에는 복잡해 보일 수 있습니다. 하지만 단계별로 차근차근 진행하면 그리 어렵지 않습니다. 이 글에서는 앱 배포의 전체 과정을 상세히 설명해드리겠습니다...",
      date: "2024.02.28",
      readTime: "7분",
      tags: ["iOS", "App Store", "배포", "Xcode"],
    },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* 헤더 */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  onClick={() => navigate("/")}
                  className="mr-4 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  ← 홈으로
                </button>
                <h1 className="text-2xl font-bold text-gray-900">
                  개발 블로그
                </h1>
              </div>
            </div>
          </div>
        </header>

        {/* 프로필 섹션 */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                이
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">이병찬</h2>
                <p className="text-xl text-blue-100 mb-2">App Developer</p>
                <p className="text-blue-200">
                  Kotlin • Swift • React Native • Flutter
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 블로그 포스트 */}
        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {post.content}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <span>{post.date}</span>
                  <span>{post.readTime} 읽기</span>
                </div>
              </article>
            ))}
          </div>

          {/* 더 많은 글 안내 */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                더 많은 글이 궁금하시다면?
              </h3>
              <p className="text-gray-600 mb-6">
                GitHub Pages에서 더 많은 개발 관련 글들을 확인하실 수 있습니다.
              </p>
              <a
                href="https://mark77234.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                GitHub Pages 블로그 방문하기 →
              </a>
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
}
