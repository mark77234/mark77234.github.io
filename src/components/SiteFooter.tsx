import { GITHUB_URL, profile } from "@/data/profile";

export default function SiteFooter() {
  return (
    <footer className="no-print mt-24 border-t border-rule">
      <div className="mx-auto flex max-w-[1060px] flex-col gap-3 px-5 py-8 text-[13px] text-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {profile.nameEn} · {profile.role}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <a href="mailto:mark77234@naver.com" className="hover:text-ink">
              mark77234@naver.com
            </a>
          </li>
          <li>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/byeongchanlee"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
