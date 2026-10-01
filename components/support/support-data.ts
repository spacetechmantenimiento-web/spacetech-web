import { Activity, Cpu, Fan, HardDrive, Laptop, Monitor, Settings2, ShieldCheck, Wrench, Gauge, Thermometer, Power, PowerOff, TriangleAlert, Database, Rocket, MemoryStick } from "lucide-react";
import { whatsappUrl } from "@/components/home/site-data";

export function supportWhatsapp(message: string) {
  const url = new URL(whatsappUrl);
  url.searchParams.set("text", message);
  return url.toString();
}

export const diagnosticUrl = supportWhatsapp("Hola SpaceTech, quiero solicitar un diagnóstico para mi computadora.");
export const homeServiceUrl = supportWhatsapp("Hola SpaceTech, quiero solicitar servicio técnico a domicilio. ¿Podemos revisar mi ubicación y el problema de mi equipo?");
export const businessUrl = supportWhatsapp("Hola SpaceTech, quiero hablar sobre soporte técnico para mi negocio.");

export const supportNavigation = [
  { label: "Servicios", href: "#servicios-soporte" },
  { label: "PC a tu medida", href: "#pc-a-tu-medida" },
  { label: "A domicilio", href: "#a-domicilio" },
  { label: "Preguntas", href: "#preguntas" }
];

export const devices = [
  { name: "Laptops", icon: Laptop, description: "Tu equipo de todos los días, listo para acompañarte.", detail: "Revisamos problemas de arranque, temperatura, rendimiento, sistema y componentes. Primero evaluamos la falla y las opciones compatibles." },
  { name: "Escritorio", icon: Monitor, description: "La base de tu trabajo, con el cuidado que necesita.", detail: "Diagnóstico, mantenimiento y actualización de computadoras de escritorio para hogares, oficinas y negocios." },
  { name: "PCs armadas", icon: Cpu, description: "Cada componente importa. El conjunto, también.", detail: "Revisamos compatibilidad, configuración y estabilidad de equipos armados; también te ayudamos a mejorar una configuración existente." },
  { name: "Gaming", icon: Activity, description: "Rendimiento alineado con tu forma de jugar.", detail: "Evaluamos hardware, refrigeración y configuración según los juegos, la resolución y las necesidades de tu equipo." },
  { name: "Workstations", icon: Settings2, description: "Tecnología preparada para trabajo especializado.", detail: "Soporte y configuración para equipos profesionales, considerando el software, las cargas de trabajo y los componentes disponibles." }
];

export const supportServices = [
  { name: "Diagnóstico", icon: Activity, intro: "Entender la falla antes de intervenir.", items: ["Fallas de rendimiento y arranque", "Errores de hardware y software", "Revisión general del equipo"] },
  { name: "Mantenimiento preventivo", icon: Fan, intro: "Cuidar hoy para prevenir problemas mañana.", items: ["Limpieza interna y revisión de ventilación", "Limpieza del sistema y revisión de almacenamiento", "Optimización básica y prevención de problemas"] },
  { name: "Mantenimiento correctivo", icon: Wrench, intro: "Una solución basada en el estado real del equipo.", items: ["Diagnóstico de la falla", "Reparación o sustitución de componentes cuando proceda", "Solución de problemas del sistema y corrección de errores"] },
  { name: "Actualización y optimización", icon: HardDrive, intro: "Más capacidad donde tu equipo la necesita.", items: ["Actualización de SSD, RAM y almacenamiento", "Optimización del sistema y rendimiento", "Componentes sujetos a compatibilidad"] },
  { name: "Software", icon: Settings2, intro: "Una configuración limpia, funcional y estable.", items: ["Instalación y configuración de software", "Solución de errores y revisión de drivers", "Puesta a punto del sistema"] }
];

export const pcPurposes = [
  { id: "gaming", name: "Gaming", label: "Tu próxima partida empieza aquí.", description: "Diseñamos una configuración alrededor de tus juegos, expectativas de rendimiento y presupuesto.", items: ["Rendimiento gráfico y GPU según tus necesidades", "Refrigeración y compatibilidad del conjunto", "Iluminación RGB, solo si tú la quieres"], accent: "#82c9ff" },
  { id: "trabajo", name: "Trabajo", label: "Más enfoque. Menos esperas.", description: "Un equipo pensado para las aplicaciones y tareas que sostienen tu día de trabajo.", items: ["Productividad y multitarea", "Estabilidad en tu operación diaria", "Capacidad de actualización"], accent: "#8ae3da" },
  { id: "estudio", name: "Estudio", label: "Una herramienta para aprender más.", description: "Equilibramos rendimiento y presupuesto para acompañar tus clases y proyectos.", items: ["Videollamadas y navegación", "Herramientas educativas", "Configuración ajustada a tu presupuesto"], accent: "#b9bbfa" },
  { id: "diseno", name: "Diseño y creación", label: "Dale espacio a tus ideas.", description: "Configuraciones que consideran tu software creativo, tus archivos y tu manera de producir.", items: ["Edición, gráficos y fotografía", "Video y creación digital", "Almacenamiento según tu flujo de trabajo"], accent: "#cfb9ed" },
  { id: "profesional", name: "Uso profesional", label: "Hecha para tu carga de trabajo.", description: "Definimos una estación de trabajo según el software y las necesidades concretas de tu actividad.", items: ["Configuración según aplicaciones profesionales", "Estabilidad y capacidad de procesamiento", "Compatibilidad y posibilidad de crecimiento"], accent: "#9ed4ec" }
];

export const supportSteps = [
  { name: "Cuéntanos qué sucede", detail: "Nos compartes el problema, el tipo de equipo y cómo lo utilizas." },
  { name: "Diagnosticamos", detail: "Revisamos el equipo para identificar la causa y las opciones viables." },
  { name: "Te proponemos una solución", detail: "Explicamos el alcance y la cotización antes de realizar el servicio." },
  { name: "Reparamos / optimizamos", detail: "Realizamos el trabajo acordado según el diagnóstico y tu autorización." },
  { name: "Entregamos y verificamos", detail: "Comprobamos el funcionamiento y te explicamos el trabajo realizado." }
];

export const supportFaq = [
  { question: "¿Qué equipos reparan?", answer: "Atendemos laptops, computadoras de escritorio, PCs armadas, equipos gaming y workstations. La viabilidad de una reparación depende del diagnóstico, del modelo y de la disponibilidad de componentes compatibles." },
  { question: "¿Necesito cita?", answer: "Sí. La atención en nuestra oficina es únicamente con cita previa. Escríbenos por WhatsApp para coordinar tu visita a Eje 1 Nte. 135, Moctezuma 2da Secc, Venustiano Carranza, CDMX. Atendemos de lunes a viernes, de 9:00 a 19:00 hrs." },
  { question: "¿Ofrecen servicio a domicilio?", answer: "Sí, para determinados servicios y dentro de nuestra zona de cobertura. Confirmamos tu ubicación y el tipo de trabajo por WhatsApp. Algunos diagnósticos o reparaciones pueden requerir traslado del equipo o trabajo adicional en oficina." },
  { question: "¿Pueden mejorar una computadora lenta?", answer: "Podemos evaluar qué limita su rendimiento: sistema, almacenamiento, memoria u otros componentes. Después proponemos optimizaciones o actualizaciones viables; no todas las fallas requieren cambiar piezas." },
  { question: "¿Pueden actualizar RAM o SSD?", answer: "Sí, cuando el equipo permite la actualización. Revisamos compatibilidad, capacidad y estado del equipo antes de recomendar componentes o cotizar el trabajo." },
  { question: "¿Arman computadoras gaming?", answer: "Sí. Definimos la configuración a partir de tu presupuesto, los juegos que utilizas y el rendimiento que buscas. Consideramos GPU, refrigeración, compatibilidad y RGB si lo deseas." },
  { question: "¿Puedo pedir una PC para diseño o trabajo?", answer: "Sí. Podemos diseñar, armar o actualizar una PC para trabajo, estudio, diseño, creación de contenido o uso profesional, tomando en cuenta el software y tus necesidades." },
  { question: "¿Cuánto tarda una reparación?", answer: "Depende del diagnóstico, la complejidad de la falla y la disponibilidad de piezas. Te explicamos el alcance y una estimación después de revisar el equipo; no fijamos plazos sin conocer su estado." },
  { question: "¿Pueden respaldar o recuperar mis archivos?", answer: "Evaluamos opciones de respaldo o recuperación cuando sea técnicamente viable. La recuperación depende del estado del medio de almacenamiento y no puede garantizarse. Cuéntanos qué ocurrió antes de seguir usando el equipo." }
];

export const supportPrinciples = [
  { icon: ShieldCheck, text: "Atención con cita previa" },
  { icon: Activity, text: "Diagnóstico antes de intervenir" },
  { icon: Wrench, text: "Soluciones según tu equipo" }
];

export const supportProblems = [
  { title: "Se siente lenta", icon: Gauge, clues: "SSD · RAM · Sistema", message: "mi computadora se siente lenta" },
  { title: "Se calienta", icon: Thermometer, clues: "Ventilación · Refrigeración · Mantenimiento", message: "mi computadora se calienta" },
  { title: "No enciende", icon: Power, clues: "Arranque · Hardware · Sistema", message: "mi computadora no enciende correctamente" },
  { title: "Se apaga", icon: PowerOff, clues: "Temperatura · Hardware · Sistema", message: "mi computadora se apaga" },
  { title: "Aparecen errores", icon: TriangleAlert, clues: "Software · Drivers · Sistema", message: "mi computadora presenta errores" },
  { title: "Necesito más espacio", icon: Database, clues: "Almacenamiento · SSD · Compatibilidad", message: "necesito más espacio en mi computadora" },
  { title: "Quiero más rendimiento", icon: Rocket, clues: "Configuración · RAM · Optimización", message: "quiero mejorar el rendimiento de mi PC" },
  { title: "Quiero actualizarla", icon: MemoryStick, clues: "RAM · SSD · Componentes compatibles", message: "quiero actualizar mi computadora" }
];
