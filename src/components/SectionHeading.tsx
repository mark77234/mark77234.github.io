export default function SectionHeading({
  index,
  children,
}: {
  index?: string;
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-5 border-b border-ink pb-2 text-[13px] font-semibold uppercase tracking-[0.14em]">
      {index && <span className="mr-2 text-faint">{index}</span>}
      {children}
    </h2>
  );
}
