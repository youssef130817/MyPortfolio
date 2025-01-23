import { memo } from "react";
import { infos } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap } from "lucide-react";

const Education = memo(() => {
  const { formations } = infos;

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground">My academic background</p>
        </div>
        <div className="space-y-6">
          {formations.map((formation, index) => (
            <Card key={index} className="relative">
              <div className="absolute -left-3 top-6 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-primary-foreground" />
              </div>
              <CardHeader>
                <CardTitle>{formation.diplome}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {formation.periode}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{formation.ecole}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

Education.displayName = "Education";
export default Education;