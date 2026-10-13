import SectionTitle from "@/components/SectionTitle";
import { interests, softSkills, languages } from "@/data/interests";

export const metadata = { title: "Beyond Tech" };

export default function InterestsPage() {
  return (
    <div>
      <SectionTitle
        eyebrow="Dashboard 02"
        title="Beyond the code"
        subtitle="The skills, interests and passions that make me who I am outside of tech."
        colorClass="text-interests"
      />

      {/* Interest cards */}
      <div className="grid gap-5 sm:grid-cols-2">
        {interests.map((item, i) => (
          <div
            key={item.title}
            style={{ animationDelay: `${i * 90}ms` }}
            className="animate-rise rounded-2xl border border-white/10 bg-surface p-6 transition hover:-rotate-1 hover:border-interests/60"
          >
            <div className="text-4xl">{item.emoji}</div>
            <h2 className="mt-3 font-display text-xl font-semibold">{item.title}</h2>
            <p className="mt-1 text-sm text-muted">{item.note}</p>
          </div>
        ))}
      </div>

      {/* Soft skills */}
      <section className="mt-10 animate-rise rounded-2xl border border-white/10 bg-surface p-6">
        <h2 className="font-display text-xl font-semibold text-interests">Soft skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {softSkills.map((s) => (
            <span
              key={s}
              className="rounded-full bg-interests/15 px-4 py-1.5 text-sm text-interests"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="mt-6 animate-rise rounded-2xl border border-white/10 bg-surface p-6">
        <h2 className="font-display text-xl font-semibold text-interests">Languages</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {languages.map((l) => (
            <li
              key={l.name}
              className="flex justify-between border-b border-white/10 pb-2 text-sm"
            >
              <span>{l.name}</span>
              <span className="text-muted">{l.level}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}