type PortfolioData = {
  hero: {
    title: string;
    subtitle: string;
    contacts: {
      phone: string;
      email: string;
      github: string;
      linkedin: string;
    };
  };
  competences: {
    languages: string[];
    frameworks: string[];
    databases: string[];
    outils: string[];
  };
  experiences: Array<{
    poste: string;
    entreprise: string;
    date: string;
    description: string;
    techs: string[];
  }>;
  projets: Array<{
    titre: string;
    description: string;
    techs: string[];
    periode: string;
  }>;
  formations: Array<{
    diplome: string;
    ecole: string;
    periode: string;
  }>;
};

const translations: Record<"en" | "fr", PortfolioData> = {
  en: {
    hero: {
      title: "Software Engineering Student",
      subtitle: "Passionate about Spring & ReactJS | Looking for an end-of-study internship",
      contacts: {
        phone: "+212 767458578",
        email: "youssefkassimi669@gmail.com",
        github: "youssef130817",
        linkedin: "kassimi-youssef-dev"
      }
    },
    competences: {
      languages: ["Java", "JavaScript", "TypeScript", "C#", "Dart", "PFIP"],
      frameworks: ["Spring", "React Js", "Node Js", "Laravel", "Flutter", "Dotnet"],
      databases: ["MySQL", "Postgres", "MongoDB", "Neo4j", "Firebase", "Oracle"],
      outils: ["Git", "Docker", "UML", "Microservices"]
    },
    experiences: [
      {
        poste: "Software Engineering Intern",
        entreprise: "AVL - End of Year Internship",
        date: "April 2024 – July 2024",
        description: "Development of an HR management web application with automated document generation",
        techs: ["Laravel", "Vue JS", "MySQL", "Github"]
      }
    ],
    projets: [
      {
        titre: "FlashDeals",
        description: "Mobile application for geolocated promotion recommendations",
        techs: ["Flutter", "Spring", "Neo4J", "Firebase"],
        periode: "Sept 2024 - Present"
      },
      {
        titre: "Busway Reservation System",
        description: "Real-time bus reservation web application",
        techs: ["Spring Boot", "ReactJs", "Neo4j"],
        periode: "Feb 2024 - Mar 2024"
      }
    ],
    formations: [
      {
        diplome: "Software Engineering Degree",
        ecole: "Faculty of Sciences and Technologies of Mohammedia",
        periode: "2022 - Present"
      },
      {
        diplome: "CPGE Industrial Technologies",
        ecole: "Mohammed V Technical High School",
        periode: "2019 - 2021"
      }
    ]
  },
  fr: {
    hero: {
      title: "Élève Ingénieur en Génie Logiciel",
      subtitle: "Passionné par Spring & ReactJS | Recherche de stage de fin d'étude",
      contacts: {
        phone: "+212 767458578",
        email: "youssefkassimi669@gmail.com",
        github: "youssef130817",
        linkedin: "kassimi-youssef-dev"
      }
    },
    competences: {
      languages: ["Java", "JavaScript", "TypeScript", "C#", "Dart", "PFIP"],
      frameworks: ["Spring", "React Js", "Node Js", "Laravel", "Flutter", "Dotnet"],
      databases: ["MySQL", "Postgres", "MongoDB", "Neo4j", "Firebase", "Oracle"],
      outils: ["Git", "Docker", "UML", "Microservices"]
    },
    experiences: [
      {
        poste: "Stagiaire en Génie Logiciel",
        entreprise: "AVL - Stage de Fin d'Année",
        date: "Avril 2024 – Juillet 2024",
        description: "Développement d'une application web de gestion RH avec génération automatisée de documents",
        techs: ["Laravel", "Vue JS", "MySQL", "Github"]
      }
    ],
    projets: [
      {
        titre: "FlashDeals",
        description: "Application mobile de recommandation de promotions géolocalisées",
        techs: ["Flutter", "Spring", "Neo4J", "Firebase"],
        periode: "Sept 2024 - Présent"
      },
      {
        titre: "Système de Réservation Busway",
        description: "Application web de réservation de bus en temps réel",
        techs: ["Spring Boot", "ReactJs", "Neo4j"],
        periode: "Fév 2024 - Mar 2024"
      }
    ],
    formations: [
      {
        diplome: "Diplôme d'Ingénieur en Génie Logiciel",
        ecole: "Faculté des Sciences et Techniques de Mohammedia",
        periode: "2022 - Présent"
      },
      {
        diplome: "CPGE Technologies Industrielles",
        ecole: "Lycée Technique Mohammed V",
        periode: "2019 - 2021"
      }
    ]
  }
};

export const infos = (language: "en" | "fr"): PortfolioData => translations[language];