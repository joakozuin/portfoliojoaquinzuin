// src/components/SkillSection.tsx
interface SkillSectionProps {
  title: string;
  skills: string[];
}

export default function Section({ title, skills }: SkillSectionProps) {
  return (
    <div className="skill-category">
      <h2>{title}</h2>
      <div className="skill-list">
        {skills.map((skill, i) => (
          <div key={i} className="skill-item">{skill}</div>
        ))}
      </div>
    </div>
  );
}