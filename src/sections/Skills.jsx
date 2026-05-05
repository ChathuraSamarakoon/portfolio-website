import { Code2, Palette, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Palette className="w-5 h-5" />,
    skills: ["HTML", "CSS", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Java","Spring Boot", "Python", "Node.js", "Express"],
  },
  {
    title: "Database & Cloud",
    icon: <Database className="w-5 h-5" />,
    skills: ["MySQL", "MongoDB",  "IBM Cloud", "AWS"],
  },
  {
    title: "Tools & Workflow",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Git", "Docker", "CI/CD"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-foreground text-sm font-medium tracking-wider uppercase">My Tech Stack</span>
          <h3 className="text-4xl font-bold mt-4 text-secondary-foreground">
            Tools & <span className="font-serif italic font-normal text-white">Technologies</span>
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="glass p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h4 className="text-lg font-semibold mb-4">{category.title}</h4>
              <ul className="space-y-2">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-muted-foreground flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};