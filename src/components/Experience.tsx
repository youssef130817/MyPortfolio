import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { infos } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase } from "lucide-react";
import { translations } from "@/data/translations";

const Experience = memo(() => {
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  const { experiences } = infos(currentLanguage);
  const t = translations[currentLanguage];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.sections.experience.title}</h2>
          <p className="text-muted-foreground">{t.sections.experience.subtitle}</p>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative">
              <div className="absolute -left-3 top-6 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-primary-foreground" />
              </div>
              <CardHeader>
                <CardTitle>{exp.poste}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {exp.entreprise} | {exp.date}
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.techs.map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-full">
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