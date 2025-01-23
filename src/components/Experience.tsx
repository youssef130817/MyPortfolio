import { memo } from "react";
import { infos } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const Experience = memo(() => {
  const { experiences } = infos;

  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Expérience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{exp.poste}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {exp.entreprise} | {exp.date}
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.techs.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

Experience.displayName = "Experience";
export default Experience;