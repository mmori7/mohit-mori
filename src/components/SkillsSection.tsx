
import { Award } from "lucide-react";

const skills = {
  "Programming Languages": ["Java", "Python", "JavaScript", "TypeScript", "C++"],
  "Web Technologies": ["React", "Node.js", "HTML5", "CSS3", "REST APIs"],
  "Database": ["MySQL", "MongoDB", "PostgreSQL"],
  "Tools & Platforms": ["Git", "Docker", "AWS", "VS Code", "Linux"],
  "Soft Skills": ["Problem Solving", "Team Leadership", "Communication", "Agile Methodology"]
};

const SkillsSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-900" id="skills">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
          <Award className="w-8 h-8 text-blue-400" />
          <span className="text-gradient">Skills</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-300">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-800 text-blue-300 rounded-full text-sm border border-gray-700 hover:bg-gray-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
