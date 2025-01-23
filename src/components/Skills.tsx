import { memo } from "react";
import { infos } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Skills = memo(() => {
  const { competences } = infos;

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(competences).map(([category, skills]) => (
            <Card key={category} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="capitalize">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="bg-secondary p-2 rounded-md text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";
export default Skills;