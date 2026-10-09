import SectionTitle from "@/components/SectionTitle";
import SkillBar from "@/components/SkillBar";
import { skillGroups } from "@/data/skills";

export const metadata = { title: "Technical Skills" };

export default function SkillsPage() {
  return (
    <div>
      <SectionTitle
        eyebrow="Dashboard 01"
        title="Technical skills"
        subtitle="The tools and technologies I work with, and how comfortable I am with each."
        colorClass="text-skills"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <section
            key={group.category}
            className="rounded-2xl border border-white/10 bg-surface p-6"
          >
            <h2 className="mb-5 font-display text-xl font-semibold text-skills">
              {group.category}
            </h2>
            <div className="space-y-4">
              {group.skills.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}