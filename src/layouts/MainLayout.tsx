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
      className={`min-h-screen h-screen flex justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 gap-4 sm:gap-8 md:gap-12 lg:gap-16 max-lg:flex-col ${className}`}
    >
      {children}
    </main>
  );
}
