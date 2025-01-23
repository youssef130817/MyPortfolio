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
    softSkills: string[];
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
      subtitle: "Enthusiastic software engineering student with a strong foundation in full-stack development. Currently seeking a 4-6 month end-of-study internship opportunity.",
      contacts: {
        phone: "+212 767458578",
        email: "youssefkassimi669@gmail.com",
        github: "youssef130817",
        linkedin: "kassimi-youssef-dev"
      }
    },
    competences: {
      languages: ["Java", "JavaScript", "TypeScript", "C#", "Dart", "Python", "PLSQL"],
      frameworks: ["Spring", "React.js", "Node.js", "Laravel", "Flutter", "Nest.js", "React Native", ".NET", "Flask"],
      databases: ["MySQL", "PostgreSQL", "MongoDB", "Neo4j", "Firebase", "Oracle", "Redis", "SQL Server"],
      outils: ["Git", "Docker", "UML", "Microservices", "Kafka", "REST API", "Websockets", "OCR", "RoBERTa"],
      softSkills: [
        "Problem Solving",
        "Team Collaboration",
        "Communication",
        "Adaptability",
        "Time Management",
        "Critical Thinking"
      ]
    },
    experiences: [
      {
        poste: "Software Engineering Intern",
        entreprise: "AVL - End of Year Internship",
        date: "April 2024 – July 2024",
        description: "Development of 'HR 4 You', a single-page web application for AVL's HR department. Features include dynamic document generation from templates for all AVL collaborators, interactive organizational chart visualization, and automated email service for document notifications.",
        techs: ["Laravel", "Vue JS", "MySQL", "Git"]
      }
    ],
    projets: [
      {
        titre: "FlashDeals",
        description: "Mobile application for geolocated promotion recommendations, featuring real-time updates and personalized offers based on user location and preferences. Implemented with a microservices architecture for scalability.",
        techs: ["Flutter", "Spring", "MongoDB", "PostgreSQL", "Microservices", "Websockets", "REST API", "Git", "Docker"],
        periode: "Sept 2024 - January 2025"
      },
      {
        titre: "Tasky",
        description: "A mobile application for task management with geolocation for users and tasks, featuring a user-friendly interface. The app allows users to track tasks and team members in real-time with location-based features.",
        techs: ["Nest.js", "React Native", "Firebase", "PostgreSQL", "Docker", "Git"],
        periode: "October 2024 - February 2025"
      },
      {
        titre: "E-commerce Microservices",
        description: "A scalable e-commerce platform built with microservices architecture, featuring real-time inventory management, distributed caching, and event-driven communication between services.",
        techs: [".NET", "Redis", "PostgreSQL", "MongoDB", "SQL Server", "Docker", "Git", "Kafka"],
        periode: "October 2024 - January 2025"
      },
      {
        titre: "Autocorrect",
        description: "A prototype platform for automatic paper exam correction using the RoBERTa model and OCR technology. The system streamlines the grading process by digitizing and analyzing handwritten exams.",
        techs: ["Flask", "MongoDB", "React.js", "RoBERTa", "OCR"],
        periode: "August 2024 - December 2024"
      },
      {
        titre: "Busway Reservation System",
        description: "Real-time bus reservation web application with live tracking and automated seat allocation. Built with a microservices architecture to handle high concurrent user requests efficiently.",
        techs: ["Spring", "React.js", "Microservices", "Websockets", "REST API", "Git", "Docker"],
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
      subtitle: "Étudiant passionné en génie logiciel avec une solide base en développement full-stack. Actuellement à la recherche d'un stage de fin d'études de 4 à 6 mois.",
      contacts: {
        phone: "+212 767458578",
        email: "youssefkassimi669@gmail.com",
        github: "youssef130817",
        linkedin: "kassimi-youssef-dev"
      }
    },
    competences: {
      languages: ["Java", "JavaScript", "TypeScript", "C#", "Dart", "Python", "PLSQL"],
      frameworks: ["Spring", "React.js", "Node.js", "Laravel", "Flutter", "Nest.js", "React Native", ".NET", "Flask"],
      databases: ["MySQL", "PostgreSQL", "MongoDB", "Neo4j", "Firebase", "Oracle", "Redis", "SQL Server"],
      outils: ["Git", "Docker", "UML", "Microservices", "Kafka", "REST API", "Websockets", "OCR", "RoBERTa"],
      softSkills: [
        "Résolution de problèmes",
        "Travail d'équipe",
        "Communication",
        "Adaptabilité",
        "Gestion du temps",
        "Esprit critique"
      ]
    },
    experiences: [
      {
        poste: "Stagiaire en Ingénierie Logicielle",
        entreprise: "AVL - Stage de Fin d'Année",
        date: "Avril 2024 – Juillet 2024",
        description: "Développement de 'HR 4 You', une application web monopage pour le département RH d'AVL. Fonctionnalités incluant la génération dynamique de documents à partir de modèles pour tous les collaborateurs AVL, visualisation interactive de l'organigramme, et service d'emails automatisés pour les notifications de documents.",
        techs: ["Laravel", "Vue JS", "MySQL", "Git"]
      }
    ],
    projets: [
      {
        titre: "FlashDeals",
        description: "Application mobile de recommandation de promotions géolocalisées, avec des mises à jour en temps réel et des offres personnalisées en fonction de la localisation et des préférences de l'utilisateur. Implémenté avec une architecture de microservices pour la scalabilité.",
        techs: ["Flutter", "Spring", "MongoDB", "PostgreSQL", "Microservices", "Websockets", "REST API", "Git", "Docker"],
        periode: "Sept 2024 - Janvier 2025"
      },
      {
        titre: "Tasky",
        description: "Une application mobile de gestion des tâches avec géolocalisation pour les utilisateurs et les tâches, dotée d'une interface conviviale. L'application permet de suivre les tâches et les membres de l'équipe en temps réel avec des fonctionnalités basées sur la localisation.",
        techs: ["Nest.js", "React Native", "Firebase", "PostgreSQL", "Docker", "Git"],
        periode: "Octobre 2024 - Février 2025"
      },
      {
        titre: "E-commerce Microservices",
        description: "Une plateforme e-commerce évolutive construite avec une architecture microservices, comprenant la gestion des stocks en temps réel, la mise en cache distribuée et la communication événementielle entre les services.",
        techs: [".NET", "Redis", "PostgreSQL", "MongoDB", "SQL Server", "Docker", "Git", "Kafka"],
        periode: "Octobre 2024 - Janvier 2025"
      },
      {
        titre: "Autocorrect",
        description: "Un prototype de plateforme pour la correction automatique des examens papier à l'aide du modèle RoBERTa et de la technologie OCR. Le système simplifie le processus de notation en numérisant et en analysant les examens manuscrits.",
        techs: ["Flask", "MongoDB", "React.js", "RoBERTa", "OCR"],
        periode: "Août 2024 - Décembre 2024"
      },
      {
        titre: "Système de Réservation Busway",
        description: "Application web de réservation de bus en temps réel avec suivi en direct et allocation automatique de sièges. Construit avec une architecture de microservices pour gérer efficacement les requêtes utilisateur concurrentes élevées.",
        techs: ["Spring", "React.js", "Microservices", "Websockets", "REST API", "Git", "Docker"],
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