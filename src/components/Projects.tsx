import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { infos } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowUpRight } from "lucide-react";
import { translations } from "@/data/translations";

const Projects = memo(() => {
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  const { projets } = infos(currentLanguage);
  const t = translations[currentLanguage];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.sections.projects.title}</h2>
          <p className="text-muted-foreground">{t.sections.projects.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projets.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.titre}
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  {project.periode}
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full"
                    >
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