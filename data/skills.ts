// EDIT THIS FILE with your real skills.
// level is a number from 0 to 100. Be honest, it looks better than inflated numbers.

export type Skill = { name: string; level: number };
export type SkillGroup = { category: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript / TypeScript", level: 70 },
      { name: "Python", level: 75 },
      { name: "C++", level: 70 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML & CSS", level: 80 },
      { name: "React / Next.js", level: 60 },
      { name: "Tailwind CSS", level: 65 },
    ],
  },
  {
    category: "Backend & Tools",
    skills: [
      { name: "Node.js", level: 50 },
      { name: "SQL / Databases", level: 55 },
      { name: "Git & GitHub", level: 70 },
    ],
  },
];