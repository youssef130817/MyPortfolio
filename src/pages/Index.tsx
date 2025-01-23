import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ThemeToggle from "@/components/ThemeToggle";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

const Index = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        <ThemeToggle />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </div>
    </div>
  );
};

export default Index;