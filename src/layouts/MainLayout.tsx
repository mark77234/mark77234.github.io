import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function MainLayout({
  children,
  className = "",
}: MainLayoutProps) {
  return (
    <main
      className={`h-screen flex justify-between items-center px-16 gap-16 max-lg:flex-col max-lg:px-8 max-lg:gap-8 max-md:px-4 ${className}`}
    >
      {children}
    </main>
  );
}
