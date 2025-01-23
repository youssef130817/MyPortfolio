import { memo } from "react";
import { infos } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Education = memo(() => {
  const { formations } = infos;

  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Formation</h2>
        <div className="space-y-6">
          {formations.map((formation, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{formation.diplome}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {formation.periode}
                </div>
              </CardHeader>
              <CardContent>
                <p>{formation.ecole}</p>
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