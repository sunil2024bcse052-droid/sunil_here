export default function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm">
        <span>{name}</span>
        <span className="text-muted">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full origin-left animate-grow rounded-full bg-gradient-to-r from-skills to-profile"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}