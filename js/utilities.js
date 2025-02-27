export function initTagCloud() {
  const tags = ["Swift", "Kotlin", "Flutter", "JavaScript", "UI/UX", "Git"];
  const tagCloud = document.querySelector(".tag-cloud");
  tagCloud.innerHTML = tags
    .map((tag) => `<span class="tag">#${tag}</span>`)
    .join("");
}
