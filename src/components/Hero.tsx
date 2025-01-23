import { memo } from "react";
import { infos } from "@/data/portfolio";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Hero = memo(() => {
  const { hero } = infos;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden">
          <img
            src="/lovable-uploads/77807dac-7ef6-43d9-9d58-7f82fc859212.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">{hero.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{hero.subtitle}</p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button variant="outline" asChild>
              <a href={`tel:${hero.contacts.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                {hero.contacts.phone}
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={`mailto:${hero.contacts.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                {hero.contacts.email}
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={`https://github.com/${hero.contacts.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={`https://linkedin.com/in/${hero.contacts.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;