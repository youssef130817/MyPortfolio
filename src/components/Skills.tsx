import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { infos } from "@/data/portfolio";
import { Card, CardContent } from "./ui/card";
import { translations } from "@/data/translations";

const Skills = memo(() => {
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  const { competences } = infos(currentLanguage);
  const t = translations[currentLanguage];

  return (
    <section className="py-20 px-4 bg-[#F2FCE2]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.sections.skills.title}</h2>
          <p className="text-muted-foreground">{t.sections.skills.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(competences).map(([category, skills]) => (
            <Card
              key={category}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 capitalize text-primary">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[#E5DEFF] text-primary rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
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

Skills.displayName = "Skills";
export default Skills;