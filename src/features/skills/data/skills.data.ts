export interface Skill {
  id: string;
  title: string;
  items: string[];
  isAI?: boolean;
}

export const skills: Skill[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: ["Angular", "Astro", "React", "TailwindCSS", "TypeScript"],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    items: [".NET / ASP.NET Core", "Django", "Node.js", "RESTful APIs"],
  },
  {
    id: "data",
    title: "Bases de Datos",
    items: ["SQL Server", "PostgreSQL / PostGIS", "MySQL", "MariaDB"],
  },
  {
    id: "ai",
    title: "IA Aplicada",
    isAI: true,
    items: [
      "Azure OpenAI",
      "RAG Architectures",
      "Prompt Engineering",
      "Azure Document Intelligence",
    ],
  },
];
