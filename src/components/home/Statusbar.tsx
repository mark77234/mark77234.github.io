import { useCurrentTime } from "../../hooks/useCurrentTime";

export default function StatusBar() {
  const time = useCurrentTime();

  return (
    <div className="w-full relative flex items-center justify-between mt-2.5 px-10">
      <StatusBarText>{time}</StatusBarText>
      <NotchArea />
      <StatusBarText>5G</StatusBarText>
    </div>
  );
}

function StatusBarText({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-sm font-semibold text-gray-800">{children}</span>
  );
}

function NotchArea() {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/5 h-6 bg-gray-900 rounded-full" />
  );
}
