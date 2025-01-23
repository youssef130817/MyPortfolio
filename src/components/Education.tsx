import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { infos } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap } from "lucide-react";
import { translations } from "@/data/translations";
import { ScrollAnimation } from "./ScrollAnimation";

const Education = memo(() => {
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  const { formations } = infos(currentLanguage);
  const t = translations[currentLanguage];

  return (
    <section className="py-20 px-4 w-full bg-[#D3E4FD]/30 dark:bg-[#111111]">
      <ScrollAnimation className="max-w-3xl mx-auto">
      
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <GraduationCap className="w-8 h-8 text-primary-foreground" />
          <h2 className="text-3xl font-bold">{t.sections.education.title}</h2>
        </div>
        <p className="text-muted-foreground">{t.sections.education.subtitle}</p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formations.map((formation, index) => (
            <ScrollAnimation key={index}>
              <Card className="relative border-primary/20 h-full">
             
              <CardHeader>
                <CardTitle className="text-primary">{formation.diplome}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {formation.periode}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{formation.ecole}</p>
              </CardContent>
            </Card>
            </ScrollAnimation>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
});

Education.displayName = "Education";
export default Education;