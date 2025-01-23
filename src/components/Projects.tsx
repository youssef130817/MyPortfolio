import { memo } from "react";
import { infos } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const Projects = memo(() => {
  const { projets } = infos;

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projets.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle>{project.titre}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {project.periode}
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <Badge key={tech} variant="outline">
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

Projects.displayName = "Projects";
export default Projects;