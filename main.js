// 예시: 동적으로 블로그 포스트 목록 생성
document.addEventListener("DOMContentLoaded", () => {
  const postsSection = document.getElementById("posts");
  const posts = [
    { title: "첫 번째 포스트", link: "posts/post1.html" },
    { title: "두 번째 포스트", link: "posts/post2.html" },
    // 더 많은 포스트 추가 가능
  ];

  posts.forEach((post) => {
    const postLink = document.createElement("a");
    postLink.href = post.link;
    postLink.textContent = post.title;
    postLink.className = "post-link";
    postsSection.appendChild(postLink);
  });
});
