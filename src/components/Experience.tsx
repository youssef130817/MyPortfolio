import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { infos } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase } from "lucide-react";
import { translations } from "@/data/translations";
import { ScrollAnimation } from "./ScrollAnimation";

const Experience = memo(() => {
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  const { experiences } = infos(currentLanguage);
  const t = translations[currentLanguage];

  return (
    <section className="py-20 px-4 w-full bg-[#D3E4FD]/30 dark:bg-[#111111]">
      <ScrollAnimation className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-2 mb-4">
      <Briefcase className="w-8 h-8 text-primary-foreground" />
          <h2 className="text-3xl font-bold">{t.sections.experience.title}</h2>
          </div>
          <p className="text-muted-foreground">{t.sections.experience.subtitle}</p>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ScrollAnimation key={index}>
              <Card className="relative border-primary/20 h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-primary">{exp.poste}</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    {exp.entreprise} | {exp.date}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="mb-4 text-muted-foreground">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.techs.map((tech) => (
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

Experience.displayName = "Experience";
export default Experience;