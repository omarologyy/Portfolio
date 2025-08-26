import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiRedux,
  SiSass,
  SiNodedotjs,
  SiDjango,
  SiChakraui,
  SiVuedotjs,
} from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#0070F3" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "ChakraUI", icon: SiChakraui, color: "#319795" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Sass", icon: SiSass, color: "#CC6699" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <Card key={skill.name} className="overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center justify-center">
                {skill.icon({ size: 48, color: skill.color })}
                <h3 className="mt-4 font-medium">{skill.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
