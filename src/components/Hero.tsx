import { memo } from "react";
import { infos } from "@/data/portfolio";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Hero = memo(() => {
  const { hero } = infos;

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/20">
            <img
              src="/lovable-uploads/77807dac-7ef6-43d9-9d58-7f82fc859212.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="inline-block px-6 py-2 rounded-full bg-secondary/50 mb-4">
            <span className="text-sm">👋 Hi there!</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{hero.title}</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {hero.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="outline" size="lg" asChild>
            <a href={`tel:${hero.contacts.phone}`}>
              <Phone className="mr-2" />
              {hero.contacts.phone}
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={`mailto:${hero.contacts.email}`}>
              <Mail className="mr-2" />
              {hero.contacts.email}
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href={`https://github.com/${hero.contacts.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href={`https://linkedin.com/in/${hero.contacts.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;