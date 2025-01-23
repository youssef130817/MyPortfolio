export const translations = {
  en: {
    sections: {
      skills: {
        title: "Skills",
        subtitle: "Here are the technologies and tools I work with"
      },
      experience: {
        title: "Experience",
        subtitle: "My professional journey"
      },
      education: {
        title: "Education",
        subtitle: "My academic background"
      },
      projects: {
        title: "Projects",
        subtitle: "Here are some of my recent projects"
      }
    },
    buttons: {
      switchToFrench: "Switch to French",
      switchToEnglish: "Switch to English",
      github: "GitHub",
      linkedin: "LinkedIn"
    }
  },
  fr: {
    sections: {
      skills: {
        title: "Compétences",
        subtitle: "Voici les technologies et outils avec lesquels je travaille"
      },
      experience: {
        title: "Expérience",
        subtitle: "Mon parcours professionnel"
      },
      education: {
        title: "Formation",
        subtitle: "Mon parcours académique"
      },
      projects: {
        title: "Projets",
        subtitle: "Voici quelques-uns de mes projets récents"
      }
    },
    buttons: {
      switchToFrench: "Passer en Français",
      switchToEnglish: "Passer en Anglais",
      github: "GitHub",
      linkedin: "LinkedIn"
    }
  }
} as const;

export type Language = keyof typeof translations;