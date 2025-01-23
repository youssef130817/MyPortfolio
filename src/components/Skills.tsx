import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { infos } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Wrench } from "lucide-react";
import { translations } from "@/data/translations";
import { ScrollAnimation } from "./ScrollAnimation";

const Skills = memo(() => {
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  const { competences } = infos(currentLanguage);
  const t = translations[currentLanguage];

  return (
    <section className="py-20 px-4 w-full bg-[#D3E4FD]/30 dark:bg-[#111111]">
      <ScrollAnimation className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Wrench className="w-8 h-8 text-primary-foreground" />
            <h2 className="text-3xl font-bold">{t.sections.skills.title}</h2>
          </div>
          <p className="text-muted-foreground">{t.sections.skills.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border-primary/20 h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-primary">{t.sections.skills.languages}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mt-auto">
                {competences.languages.map((language) => (
                  <Badge
                    key={language}
                    variant="secondary"
                    className="bg-[#E5DEFF] hover:bg-primary text-primary hover:text-white"
                  >
                    {language}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border-primary/20 h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-primary">{t.sections.skills.frameworks}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mt-auto">
                {competences.frameworks.map((framework) => (
                  <Badge
                    key={framework}
                    variant="secondary"
                    className="bg-[#E5DEFF] hover:bg-primary text-primary hover:text-white"
                  >
                    {framework}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border-primary/20 h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-primary">{t.sections.skills.databases}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mt-auto">
                {competences.databases.map((database) => (
                  <Badge
                    key={database}
                    variant="secondary"
                    className="bg-[#E5DEFF] hover:bg-primary text-primary hover:text-white"
                  >
                    {database}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border-primary/20 h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-primary">{t.sections.skills.tools}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mt-auto">
                {competences.outils.map((outil) => (
                  <Badge
                    key={outil}
                    variant="secondary"
                    className="bg-[#E5DEFF] hover:bg-primary text-primary hover:text-white"
                  >
                    {outil}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border-primary/20 h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-primary">{t.sections.skills.softSkills}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mt-auto">
                {competences.softSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-[#E5DEFF] hover:bg-primary text-primary hover:text-white"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollAnimation>
    </section>
  );
});

Skills.displayName = "Skills";
export default Skills;