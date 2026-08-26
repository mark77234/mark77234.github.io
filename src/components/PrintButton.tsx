"use client";

import { useEffect, useState } from "react";

/**
 * next/image는 기본이 lazy loading이라, 아직 화면에 노출되지 않은 이미지는
 * 인쇄 시 빈 칸으로 나온다. 인쇄 전에 모든 이미지를 강제로 불러온 뒤 print()한다.
 */
function loadAllImages() {
  const images = Array.from(document.images);
  images.forEach((image) => {
    image.loading = "eager";
  });

  return Promise.all(
    images.map((image) =>
      image.complete
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            image.addEventListener("load", () => resolve(), { once: true });
            image.addEventListener("error", () => resolve(), { once: true });
          }),
    ),
  );
}

export default function PrintButton() {
  const [preparing, setPreparing] = useState(false);

  // Cmd+P로 바로 인쇄하는 경우에도 최대한 이미지를 살린다.
  useEffect(() => {
    const onBeforePrint = () => {
      void loadAllImages();
    };
    window.addEventListener("beforeprint", onBeforePrint);
    return () => window.removeEventListener("beforeprint", onBeforePrint);
  }, []);

  async function handleClick() {
    setPreparing(true);
    try {
      await loadAllImages();
    } finally {
      setPreparing(false);
    }
    window.print();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={preparing}
      className="no-print rounded-sm border border-rule px-3 py-1.5 text-[13px] text-muted transition-colors hover:border-ink hover:text-ink disabled:opacity-60"
    >
      {preparing ? "이미지 불러오는 중…" : "Print / Save PDF"}
    </button>
  );
}
