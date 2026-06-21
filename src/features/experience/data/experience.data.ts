export interface ExperienceItem {
  period: string;
  title: string;
  company?: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    period: "2023",
    title: "Inicio en el Desarrollo Web",
    description:
      "Aprendizaje autodidacta de HTML, CSS y JavaScript. Primeros proyectos personales y experimentos con diseño web.",
  },
  {
    period: "2024",
    title: "Proyectos Full Stack",
    description:
      "Desarrollo de aplicaciones web con Astro, Django y TailwindCSS. Construcción de portafolio con enfoque en usabilidad y rendimiento.",
  },
  {
    period: "Ene 2025 — Actualidad",
    title: "Desarrollador Full Stack",
    company: "Sapiens Consulting",
    description:
      "Responsable de proyectos empresariales para clientes nacionales e internacionales: Portal del Empleado, BackOffice, Evaluaciones y WIC Puerto Rico. Stack: Angular, .NET, SQL Server.",
  },
];
