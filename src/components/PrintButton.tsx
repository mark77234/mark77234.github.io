"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print rounded-sm border border-rule px-3 py-1.5 text-[13px] text-muted transition-colors hover:border-ink hover:text-ink"
    >
      Print / Save PDF
    </button>
  );
}
