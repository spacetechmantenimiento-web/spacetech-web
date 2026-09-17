import {
  Activity,
  Bot,
  Cloud,
  Code2,
  Database,
  Globe2,
  HardDrive,
  MonitorCog,
  Network,
  ShoppingBag,
  Wrench
} from "lucide-react";

export const whatsappUrl =
  "https://wa.me/525655745468?text=Hola%20Space%20Tech%2C%20quiero%20conocer%20sus%20soluciones%20tecnol%C3%B3gicas";
export const appointmentWhatsappUrl =
  "https://wa.me/525655745468?text=Hola%2C%20quiero%20agendar%20una%20cita%20en%20Space%20Tech%20para%20un%20servicio%20t%C3%A9cnico.";
export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Eje%201%20Nte.%20135%2C%20Moctezuma%202da%20Secc%2C%20Venustiano%20Carranza%2C%2015530%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX";
export const mapsEmbedUrl =
  "https://www.google.com/maps?q=Eje%201%20Nte.%20135%2C%20Moctezuma%202da%20Secc%2C%20Venustiano%20Carranza%2C%2015530%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX&output=embed";

export const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" }
];

export const serviceGroups = [
  {
    eyebrow: "01 / TECH CARE",
    title: "Tecnología que simplemente funciona.",
    description: "Diagnosticamos, protegemos y optimizamos tus equipos para que trabajes con continuidad y tranquilidad.",
    icon: MonitorCog,
    tone: "cyan",
    items: ["Diagnóstico y reparación", "Mantenimiento preventivo", "Optimización y hardware", "Recuperación de información", "Instalación de software"]
  },
  {
    eyebrow: "02 / DIGITAL",
    title: "Una presencia digital a la altura de tu negocio.",
    description: "Diseñamos experiencias web claras, rápidas y preparadas para convertir atención en oportunidades.",
    icon: Globe2,
    tone: "blue",
    items: ["Páginas y sitios corporativos", "Landing pages", "Catálogos digitales", "Tiendas en línea", "SEO básico"]
  },
  {
    eyebrow: "03 / BUSINESS SYSTEMS",
    title: "Sistemas que mueven la operación.",
    description: "Construimos herramientas que ordenan procesos, conectan información y liberan tiempo para crecer.",
    icon: Network,
    tone: "violet",
    items: ["Sistemas administrativos y POS", "Automatización de procesos", "Software personalizado", "Herramientas empresariales", "Integraciones"]
  }
];

export const storyItems = [
  { label: "Web.", detail: "Experiencias digitales rápidas y memorables.", icon: Code2 },
  { label: "Software.", detail: "Herramientas hechas alrededor de tu operación.", icon: Database },
  { label: "Automatización.", detail: "Menos tareas repetitivas. Más enfoque.", icon: Bot },
  { label: "Infraestructura.", detail: "La base técnica que mantiene todo en marcha.", icon: HardDrive }
];

export const ecosystemNodes = [
  { label: "Soporte", icon: Wrench, position: "node-support" },
  { label: "Web", icon: Globe2, position: "node-web" },
  { label: "Software", icon: Code2, position: "node-software" },
  { label: "POS", icon: ShoppingBag, position: "node-pos" },
  { label: "Cloud", icon: Cloud, position: "node-cloud" },
  { label: "Automatización", icon: Bot, position: "node-automation" },
  { label: "Datos", icon: Database, position: "node-data" },
  { label: "Infraestructura", icon: Activity, position: "node-infrastructure" }
];

export const testimonials = [
  { quote: "Mi laptop quedó mucho más rápida y el servicio fue muy claro desde el inicio.", author: "Cliente en CDMX", service: "Optimización de equipo" },
  { quote: "Space Tech nos ayudó a tener una página profesional para nuestro negocio.", author: "Emprendedor local", service: "Desarrollo web" },
  { quote: "Me explicaron todo el proceso y recuperaron información importante de mi equipo.", author: "Cliente particular", service: "Recuperación de información" }
];
