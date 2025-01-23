import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { infos } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Code2 } from "lucide-react";
import { translations } from "@/data/translations";
import { ScrollAnimation } from "./ScrollAnimation";

const Projects = memo(() => {
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  const { projets } = infos(currentLanguage);
  const t = translations[currentLanguage];

  return (
    <section className="py-20 px-4 w-full bg-[#D3E4FD]/30 dark:bg-[#111111]">
      <ScrollAnimation className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="w-8 h-8 text-primary-foreground" />
            <h2 className="text-3xl font-bold">{t.sections.projects.title}</h2>
          </div>
          <p className="text-muted-foreground">{t.sections.projects.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projets.map((project, index) => (
            <ScrollAnimation key={index}>
              <Card
                className="group hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border-primary/20 h-full flex flex-col"
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-primary">
                    {project.titre}
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">
                    {project.periode}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="mb-4 text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techs.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-[#E5DEFF] hover:bg-primary text-primary hover:text-white"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
});

Projects.displayName = "Projects";
export default Projects;