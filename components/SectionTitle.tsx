export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  colorClass,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  colorClass: string;
}) {
  return (
    <div className="mb-10">
      <p className={`text-sm font-semibold uppercase tracking-widest ${colorClass}`}>{eyebrow}</p>
      <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">{title}</h1>
      {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
    </div>
  );
}