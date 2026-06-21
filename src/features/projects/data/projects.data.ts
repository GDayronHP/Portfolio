export interface Project {
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  problem: string[];
  participation: string[];
  pageLink?: string;
  /** Key for the card thumbnail image (mapped in ProjectCard.astro) */
  imageKey: "financial-ai" | "backoffice-images" | "performance-eval" | "geo-app";
  /**
   * Carousel screenshot paths relative to /public/.
   * E.g. "/projects/financial-ai/screenshot-1.jpg"
   * Add files to public/projects/<imageKey>/ and list them here.
   */
  carouselImages: string[];
}

export const projects: Project[] = [
  // ── 1. AI Financial Analysis ─ highest highlight (AI differentiator) ──
  {
    title: "Sistema de Análisis Financiero con IA",
    description:
      "Plataforma orientada al análisis financiero y documental que combina inteligencia artificial, OCR y recuperación contextual para generar respuestas basadas en información verificable.",
    tags: ["Angular", ".NET", "SQL Server", "Azure OpenAI", "Azure Document Intelligence", "RAG"],
    highlights: [
      "OCR de documentos financieros",
      "Recuperación contextual mediante RAG",
      "Consultas SQL basadas en intención",
      "Integración con modelos de IA generativa",
      "Arquitectura orientada a respuestas fundamentadas en datos reales",
    ],
    problem: [
      "Reduce el tiempo de análisis documental.",
      "Centraliza información proveniente de distintas fuentes.",
      "Minimiza respuestas basadas únicamente en inferencias del modelo.",
    ],
    participation: [
      "Diseño de arquitectura.",
      "Desarrollo frontend y backend.",
      "Integración de servicios Azure.",
      "Construcción de flujos de recuperación y análisis documental.",
    ],
    imageKey: "financial-ai",
    carouselImages: [],
  },

  // ── 2. Back Office Dynamic Images ─ full ownership ────────────────────
  {
    title: "Back Office Dynamic Images",
    description:
      "Plataforma de gestión de contenido visual para la administración y programación de imágenes promocionales mediante álbumes configurables por fechas o activación manual.",
    tags: ["Angular", ".NET", "SQL Server", "ImageSharp", "IIS"],
    highlights: [
      "Programación automática de campañas",
      "Activación manual de álbumes",
      "Drag & Drop entre galerías",
      "Edición en línea de contenido",
      "Biblioteca propia para compresión y optimización de imágenes",
    ],
    problem: [
      "Automatiza la actualización de contenido visual asociado a campañas y festividades.",
      "Reduce la intervención manual en el cambio de imágenes dentro de otros sistemas.",
    ],
    participation: [
      "Análisis y diseño de la solución.",
      "Desarrollo completo del frontend.",
      "Desarrollo completo del backend.",
      "Integración con sistema de autenticación existente.",
      "Despliegue en servidores IIS.",
    ],
    imageKey: "backoffice-images",
    carouselImages: [],
  },

  // ── 3. Performance Evaluation Platform ───────────────────────────────
  {
    title: "Sistema de Evaluaciones de Desempeño",
    description:
      "Plataforma empresarial para la gestión centralizada de evaluaciones de desempeño y liderazgo, reemplazando procesos previamente gestionados mediante hojas de cálculo.",
    tags: ["Angular", ".NET", "SQL Server", "Amazon Linux"],
    highlights: [
      "Plantillas dinámicas según rol",
      "Gestión de ciclos de evaluación",
      "Tipos de evaluación configurables",
      "Reportes y dashboards",
      "Auditoría y trazabilidad de acciones",
    ],
    problem: [
      "Centraliza el proceso de evaluación organizacional.",
      "Mejora la trazabilidad y seguimiento de evaluaciones.",
      "Facilita la gestión de ciclos y plantillas.",
    ],
    participation: [
      "Desarrollo frontend y backend (aproximadamente 50% del proyecto).",
      "Despliegue de frontend y API.",
      "Mantenimiento y evolución continua de la plataforma.",
    ],
    pageLink: "https://empleados.sapiensconsultingperu.com/evaluaciones/login/",
    imageKey: "performance-eval",
    carouselImages: [],
  },

  // ── 4. Smart Geolocation App ─ thesis project ─────────────────────────
  {
    title: "Aplicación de Geolocalización Inteligente",
    description:
      "Aplicación móvil desarrollada como proyecto de tesis para facilitar la orientación dentro de una institución educativa mediante geolocalización y navegación en tiempo real.",
    tags: ["React Native", "NestJS", "Geolocalización móvil", "Speech-to-Text"],
    highlights: [
      "Navegación en tiempo real",
      "Gestión de capas y filtros de visualización",
      "Búsqueda de ubicaciones",
      "Interacción mediante texto y voz",
      "Respuestas dinámicas: información, listado de ubicaciones o recorridos automáticos",
    ],
    problem: [],
    participation: [
      "Desarrollo frontend principal.",
      "Implementación del sistema de mapas.",
      "Gestión de ubicaciones y rutas.",
      "Integración de funcionalidades conversacionales.",
    ],
    imageKey: "geo-app",
    carouselImages: [],
  },
];
