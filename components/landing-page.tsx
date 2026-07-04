"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedCodePanel } from "@/components/animated-code-panel";
import { GlobalTechOverlay } from "@/components/global-tech-overlay";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  CircuitBoard,
  Code2,
  Cpu,
  DatabaseZap,
  Gauge,
  Globe2,
  Laptop,
  Layers3,
  LockKeyhole,
  CalendarCheck,
  Clock3,
  MapPin,
  Menu,
  MessageCircle,
  MonitorCog,
  Navigation,
  Quote,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Wrench,
  X,
  Zap
} from "lucide-react";

const whatsappUrl =
  "https://wa.me/525655745468?text=Hola%20Space%20Tech%2C%20quiero%20solicitar%20un%20diagnostico%20gratuito";
const appointmentWhatsappUrl =
  "https://wa.me/525655745468?text=Hola%2C%20quiero%20agendar%20una%20cita%20en%20Space%20Tech%20para%20un%20servicio%20t%C3%A9cnico.";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Eje%201%20Nte.%20135%2C%20Moctezuma%202da%20Secc%2C%20Venustiano%20Carranza%2C%2015530%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX";
const mapsEmbedUrl =
  "https://www.google.com/maps?q=Eje%201%20Nte.%20135%2C%20Moctezuma%202da%20Secc%2C%20Venustiano%20Carranza%2C%2015530%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX&output=embed";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Soluciones", href: "#servicios" },
  { label: "Desarrollo Web", href: "#digital" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" }
];

const trustMetrics = [
  { icon: Cpu, value: "+50", label: "Equipos atendidos" },
  { icon: Code2, value: "+20", label: "Soluciones digitales creadas" },
  { icon: ShieldCheck, value: "100%", label: "Atención personalizada" }
];

const heroCards = [
  {
    icon: Zap,
    title: "Respuesta rápida",
    description: "Atención ágil para diagnosticar y resolver problemas técnicos."
  },
  {
    icon: LockKeyhole,
    title: "Protección de tu información",
    description: "Cuidamos tus archivos, datos y privacidad durante cada servicio."
  },
  {
    icon: Rocket,
    title: "Soluciones modernas",
    description: "Aplicamos tecnología actual para mejorar equipos y negocios."
  }
];

const heroAdvantages = [
  "Atención con cita previa",
  "Diagnóstico profesional",
  "Desarrollo Web",
  "Sistemas Empresariales"
];

const technicalServices = [
  {
    icon: ShieldCheck,
    title: "Mantenimiento preventivo",
    description: "Limpieza, revisión y ajustes para evitar fallas y alargar la vida de tus equipos."
  },
  {
    icon: Wrench,
    title: "Mantenimiento correctivo",
    description: "Solucionamos fallas de hardware, software y rendimiento con diagnóstico claro."
  },
  {
    icon: MonitorCog,
    title: "Diagnóstico técnico",
    description: "Detectamos el origen del problema y te explicamos las mejores opciones."
  },
  {
    icon: Laptop,
    title: "Instalación de sistemas",
    description: "Formateo, configuración e instalación de sistemas operativos listos para trabajar."
  },
  {
    icon: Gauge,
    title: "Optimización de equipos",
    description: "Mejoramos velocidad, arranque y estabilidad sin procesos innecesarios."
  },
  {
    icon: Cpu,
    title: "Actualización de hardware",
    description: "Instalación de RAM, SSD y componentes para darle nueva potencia a tu equipo."
  },
  {
    icon: DatabaseZap,
    title: "Recuperación de datos",
    description: "Rescatamos archivos importantes cuando el sistema o unidad presenta errores."
  },
  {
    icon: CircuitBoard,
    title: "Instalación de software",
    description: "Configuramos herramientas, licencias y programas esenciales para tu flujo diario."
  }
];

const marqueeServices = [
  "Desarrollo web",
  "Sistemas administrativos",
  "Automatización",
  "Software a medida",
  "Soporte técnico",
  "Optimización de equipos",
  "Recuperación de datos",
  "Soluciones digitales"
];

const introHighlights = [
  {
    icon: ShieldCheck,
    title: "Soporte técnico profesional",
    description: "Diagnóstico, mantenimiento y optimización con procesos claros y seguimiento."
  },
  {
    icon: Globe2,
    title: "Desarrollo web moderno",
    description: "Sitios rápidos, elegantes y preparados para que tu negocio se vea confiable."
  },
  {
    icon: Bot,
    title: "Sistemas y automatización",
    description: "Herramientas digitales para ordenar operaciones y reducir tareas repetitivas."
  }
];

const softwareServices = [
  {
    icon: Globe2,
    title: "Páginas web profesionales",
    description: "Sitios rápidos, modernos y listos para representar tu marca con claridad."
  },
  {
    icon: Layers3,
    title: "Sistemas administrativos",
    description: "Herramientas para organizar ventas, inventario, clientes y operación interna."
  },
  {
    icon: ShoppingCart,
    title: "Tiendas en línea",
    description: "Experiencias de compra limpias para vender productos o servicios en internet."
  },
  {
    icon: Code2,
    title: "Catálogos digitales",
    description: "Muestra tus productos con una imagen profesional, ordenada y fácil de compartir."
  },
  {
    icon: Bot,
    title: "Automatización de procesos",
    description: "Reducimos tareas repetitivas con flujos digitales más simples y medibles."
  },
  {
    icon: CircuitBoard,
    title: "Software a medida",
    description: "Soluciones construidas alrededor de las necesidades reales de tu negocio."
  }
];

const departmentPoints = [
  "Soporte técnico confiable",
  "Asesoría tecnológica",
  "Desarrollo digital",
  "Seguimiento personalizado"
];

const pillars = [
  {
    icon: LockKeyhole,
    title: "Confianza",
    description: "Cuidamos tu información y tus equipos como si fueran nuestros."
  },
  {
    icon: Sparkles,
    title: "Innovación",
    description: "Usamos soluciones actuales para resolver problemas reales."
  },
  {
    icon: CheckCircle2,
    title: "Calidad",
    description: "Buscamos resultados limpios, funcionales y duraderos."
  },
  {
    icon: Rocket,
    title: "Responsabilidad",
    description: "Cumplimos tiempos, explicamos procesos y damos seguimiento."
  }
];

const processSteps = [
  "Diagnóstico inicial",
  "Propuesta de solución",
  "Servicio o desarrollo",
  "Entrega y seguimiento"
];

const testimonials = [
  {
    quote: "Mi laptop quedó mucho más rápida y el servicio fue muy claro desde el inicio.",
    author: "Cliente en CDMX"
  },
  {
    quote: "Space Tech nos ayudó a tener una página profesional para nuestro negocio.",
    author: "Emprendedor local"
  },
  {
    quote: "Me explicaron todo el proceso y recuperaron información importante de mi equipo.",
    author: "Cliente particular"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export function LandingPage() {
  return (
    <main className="landing-shell relative min-h-screen overflow-hidden">
      <GlobalTechOverlay />
      <Navbar />
      <Hero />
      <TechMarquee />
      <DigitalIntro />
      <Services />
      <SoftwareSection />
      <DepartmentSection />
      <WhyChoose />
      <About />
      <Process />
      <Testimonials />
      <LocationSection />
      <CallToAction />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-void/65 shadow-[0_12px_45px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-11 place-items-center rounded-full border border-electric/35 bg-gradient-to-br from-electric/15 to-plasma/10 shadow-[0_0_28px_rgba(32,200,255,0.22)] transition group-hover:border-electric/60">
            <Rocket className="size-5 text-electric drop-shadow-[0_0_10px_rgba(32,200,255,0.45)]" aria-hidden />
          </span>
          <span>
            <span className="block font-display text-sm font-black uppercase tracking-[0.16em] text-white sm:text-base">
              Space Tech
            </span>
            <span className="block font-space text-[0.48rem] font-semibold uppercase tracking-[0.18em] text-slate-400 sm:text-[0.62rem] sm:tracking-[0.24em]">
              Tu tecnología siempre en órbita
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative py-2 text-sm font-medium transition hover:text-white ${
                item.href === "#inicio" ? "text-white" : "text-slate-300"
              }`}
            >
              {item.label}
              <span
                className={`absolute inset-x-0 -bottom-1 h-px origin-left bg-gradient-to-r from-electric to-plasma transition-transform duration-300 ${
                  item.href === "#inicio" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-electric/30 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(32,200,255,0.14)] transition hover:-translate-y-0.5 hover:border-electric/60 hover:bg-electric hover:text-void sm:inline-flex"
          >
            Solicitar diagnóstico
          </a>
          <button
            className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-electric/40 hover:bg-electric/10 lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </nav>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-void/95 px-5 pb-5 pt-2 backdrop-blur-2xl lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-electric px-5 py-3 text-sm font-bold text-void"
            >
              Solicitar diagnóstico
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center pt-28">
      <div className="absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-electric/10 opacity-60" />
      <div className="absolute right-[-12rem] top-28 h-[34rem] w-[34rem] rounded-full bg-plasma/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
          className="relative z-10"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.065] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200 shadow-[0_18px_60px_rgba(32,200,255,0.12)] backdrop-blur-2xl sm:px-5"
          >
            <span className="grid size-7 place-items-center rounded-full border border-electric/25 bg-electric/12 text-electric shadow-[0_0_18px_rgba(32,200,255,0.18)]">
              <MapPin className="size-3.5" aria-hidden />
            </span>
            Oficina en Venustiano Carranza, CDMX
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="max-w-3xl font-display text-[2.38rem] font-black uppercase leading-[0.98] tracking-[0.03em] text-white sm:text-5xl sm:leading-[0.96] lg:text-[4.45rem]"
          >
            <motion.span variants={fadeUp} className="block">
              Tu tecnología
            </motion.span>
            <motion.span variants={fadeUp} className="block">
              siempre en
            </motion.span>
            <motion.span
              variants={fadeUp}
              className="orbit-word relative block bg-gradient-to-r from-electric via-white to-plasma bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(32,200,255,0.28)]"
            >
              órbita
            </motion.span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl font-space text-lg font-medium leading-8 text-slate-300 sm:text-xl"
          >
            Soporte técnico, desarrollo web, sistemas administrativos y soluciones digitales para
            personas, emprendedores y empresas que buscan confianza, rapidez e innovación.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="premium-button inline-flex items-center justify-center gap-2 rounded-full bg-electric px-6 py-4 text-sm font-bold text-void shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
            >
              Solicitar diagnóstico gratuito <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href="#servicios"
              className="premium-button inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-electric/35 hover:shadow-glow"
            >
              Ver servicios <ChevronRight className="size-4" aria-hidden />
            </a>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-300"
          >
            {heroAdvantages.map((advantage) => (
              <span key={advantage} className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-electric drop-shadow-[0_0_10px_rgba(32,200,255,0.28)]" aria-hidden />
                {advantage}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <AnimatedCodePanel />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="relative z-10 grid gap-4 lg:col-span-2"
        >
          <div className="grid gap-3 sm:grid-cols-3">
            {trustMetrics.map((metric) => (
              <div
                key={metric.label}
                className="glass-panel group rounded-lg px-5 py-4 transition hover:-translate-y-1 hover:border-electric/35 hover:shadow-glow"
              >
                <metric.icon className="mb-4 size-5 text-electric drop-shadow-[0_0_12px_rgba(32,200,255,0.35)]" aria-hidden />
                <p className="font-space text-2xl font-semibold text-white">{metric.value}</p>
                <p className="mt-1 text-sm leading-5 text-slate-300">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 lg:grid-cols-3">
            {heroCards.map((card) => (
              <div
                key={card.title}
                className="rounded-lg border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-[3px] hover:border-plasma/35 hover:bg-white/[0.065] hover:shadow-violet"
              >
                <card.icon className="mb-3 size-5 text-electric drop-shadow-[0_0_12px_rgba(32,200,255,0.32)]" aria-hidden />
                <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{card.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TechMarquee() {
  const items = [...marqueeServices, ...marqueeServices];

  return (
    <section className="relative border-y border-white/10 bg-white/[0.035] py-5 backdrop-blur-xl">
      <div className="marquee-track flex gap-4 whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-void/55 px-5 py-3 text-sm font-medium text-slate-200"
          >
            <Star className="size-4 text-electric" aria-hidden />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function DigitalIntro() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10 max-w-4xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-electric">
            Más que soporte técnico
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
            No solo reparamos tecnología, construimos soluciones digitales
          </h2>
          <p className="mt-5 max-w-3xl font-space text-base leading-8 text-slate-300 sm:text-lg">
            Desde el mantenimiento de tus equipos hasta el desarrollo de páginas web, sistemas
            administrativos y automatizaciones, en Space Tech te ayudamos a transformar la
            tecnología en una ventaja para tu negocio.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {introHighlights.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.06 }}
              className="glass-panel rounded-xl p-6 transition hover:-translate-y-1 hover:border-electric/35 hover:shadow-glow"
            >
              <div className="mb-6 grid size-12 place-items-center rounded-lg border border-electric/20 bg-electric/10 text-electric">
                <item.icon className="size-6" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase text-electric">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </motion.div>
  );
}

function Services() {
  return (
    <section id="servicios" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Servicios técnicos"
          title="Soporte técnico confiable para equipos que no pueden fallar"
          description="Diagnóstico, mantenimiento, optimización y recuperación con procesos claros para personas, emprendedores y empresas."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technicalServices.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.04 }}
              className="glass-panel group rounded-lg p-6 transition hover:-translate-y-1 hover:border-electric/35 hover:shadow-glow"
            >
              <div className="mb-5 grid size-12 place-items-center rounded-lg bg-electric/12 text-electric ring-1 ring-electric/25">
                <service.icon className="size-6" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SoftwareSection() {
  return (
    <section id="digital" className="relative py-24">
      <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="glass-panel relative overflow-hidden rounded-xl p-7 sm:p-9"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-electric/10 via-transparent to-plasma/10" />
            <div className="relative">
              <div className="mb-6 grid size-14 place-items-center rounded-lg bg-plasma/15 text-white ring-1 ring-plasma/35">
                <Globe2 className="size-7" aria-hidden />
              </div>
              <p className="mb-3 text-sm font-semibold uppercase text-electric">Desarrollo web y software</p>
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Desarrollo Web y Software para negocios que quieren crecer
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
                Creamos páginas web, sistemas administrativos, catálogos digitales y herramientas a
                medida para que tu negocio venda más, trabaje mejor y tenga una imagen profesional
                en internet.
              </p>
            </div>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {softwareServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-lg border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-plasma/40 hover:bg-white/[0.07]"
              >
                <span className="mb-5 grid size-11 place-items-center rounded-lg bg-white/8 text-electric">
                  <service.icon className="size-5" aria-hidden />
                </span>
                <h3 className="font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DepartmentSection() {
  return (
    <section id="nosotros" className="relative py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="glass-panel rounded-xl p-8 sm:p-10"
        >
          <p className="mb-3 text-sm font-semibold uppercase text-electric">Aliado tecnológico</p>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Tu departamento tecnológico externo
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            En Space Tech te acompañamos como aliado tecnológico para resolver problemas técnicos,
            mejorar tus equipos y crear herramientas digitales que impulsen tu negocio.
          </p>
        </motion.div>
        <div className="grid content-center gap-4">
          {departmentPoints.map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.06 }}
              className="flex items-center gap-4 rounded-lg border border-white/10 bg-orbit/70 p-5"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-electric/15 text-electric">
                <CheckCircle2 className="size-5" aria-hidden />
              </span>
              <span className="font-medium text-white">{point}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Diferencia Space Tech"
          title="Tecnología con criterio, seguimiento y confianza"
          description="Combinamos soporte técnico, visión digital y comunicación clara para que sepas exactamente qué pasa con tu tecnología."
        />
        <div className="grid gap-4 md:grid-cols-4">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.06 }}
              className="rounded-lg border border-white/10 bg-white/[0.045] p-6"
            >
              <pillar.icon className="mb-5 size-8 text-electric" aria-hidden />
              <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{pillar.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="glass-panel rounded-xl p-8 text-center sm:p-12"
        >
          <p className="mb-3 text-sm font-semibold uppercase text-electric">Sobre Space Tech</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Una marca tecnológica integral</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Space Tech nace con la misión de ofrecer soluciones tecnológicas integrales que
            garanticen el funcionamiento seguro y eficiente de los equipos de nuestros clientes. A
            través de soporte técnico confiable, mantenimiento especializado y desarrollo digital,
            buscamos ser un aliado estratégico para personas y negocios que quieren crecer sin
            preocuparse por la tecnología.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Proceso"
          title="De la falla a la solución, sin vueltas"
          description="Trabajamos con pasos simples para que tengas visibilidad, tiempos claros y seguimiento después de la entrega."
        />
        <div className="grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.06 }}
              className="relative rounded-lg border border-white/10 bg-orbit/70 p-6"
            >
              <span className="mb-8 inline-grid size-11 place-items-center rounded-full bg-electric text-sm font-bold text-void">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-white">{step}</h3>
              {index < processSteps.length - 1 && (
                <div className="absolute right-5 top-10 hidden text-electric/70 md:block">
                  <ArrowRight className="size-5" aria-hidden />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Testimonios"
          title="Primeras señales de confianza"
          description="Experiencias iniciales que reflejan el tipo de atención que buscamos entregar: clara, responsable y útil."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.06 }}
              className="glass-panel rounded-lg p-6"
            >
              <Quote className="mb-5 size-7 text-electric" aria-hidden />
              <p className="text-base leading-7 text-slate-200">“{testimonial.quote}”</p>
              <p className="mt-6 text-sm font-semibold text-white">— {testimonial.author}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  const locationDetails = [
    {
      icon: MapPin,
      title: "Dirección",
      description: "Eje 1 Nte. 135, Moctezuma 2da Secc, Venustiano Carranza, 15530 Ciudad de México, CDMX."
    },
    {
      icon: Clock3,
      title: "Horario",
      description: "Lunes a viernes de 9:00 a 19:00 hrs."
    },
    {
      icon: CalendarCheck,
      title: "Atención",
      description: "Únicamente con cita previa."
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Agenda tu visita antes de acudir para recibir atención personalizada."
    }
  ];

  return (
    <section id="ubicacion" className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-plasma/35 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Ubicación"
          title="Visítanos en nuestra oficina"
          description="Atendemos con cita previa para brindarte un servicio rápido, personalizado y seguro."
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="glass-panel relative overflow-hidden rounded-xl p-6 sm:p-8"
          >
            <div className="absolute right-[-7rem] top-[-7rem] h-56 w-56 rounded-full bg-electric/15 blur-3xl" />
            <div className="absolute bottom-[-8rem] left-[-8rem] h-64 w-64 rounded-full bg-plasma/12 blur-3xl" />
            <div className="relative">
              <div className="mb-7 flex items-center gap-4">
                <span className="grid size-13 place-items-center rounded-xl border border-electric/25 bg-electric/10 text-electric shadow-[0_0_28px_rgba(32,200,255,0.16)]">
                  <Navigation className="size-6" aria-hidden />
                </span>
                <div>
                  <p className="font-space text-xl font-semibold text-white">Space Tech</p>
                  <p className="mt-1 text-sm text-slate-400">Tu tecnología siempre en órbita</p>
                </div>
              </div>

              <div className="grid gap-4">
                {locationDetails.map((item) => (
                  <div
                    key={item.title}
                    className="group flex gap-4 rounded-lg border border-white/10 bg-white/[0.045] p-4 transition hover:-translate-y-[3px] hover:border-electric/35 hover:bg-white/[0.065] hover:shadow-glow"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-electric/10 text-electric ring-1 ring-electric/20">
                      <item.icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={appointmentWhatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-electric px-5 py-3 text-sm font-bold text-void shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <MessageCircle className="size-5" aria-hidden />
                  Agendar cita
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-electric/45 hover:bg-electric/10"
                >
                  <MapPin className="size-5" aria-hidden />
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative min-h-[22rem] overflow-hidden rounded-xl border border-electric/20 bg-white/[0.045] shadow-[0_24px_80px_rgba(32,200,255,0.13)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-electric/10 via-transparent to-plasma/10" />
            <iframe
              title="Mapa de Space Tech en Venustiano Carranza, CDMX"
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative h-full min-h-[22rem] w-full border-0 grayscale invert-[0.9] hue-rotate-180 contrast-[0.92] saturate-[0.65]"
              allowFullScreen
            />
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-void/80 px-4 py-2 text-xs font-bold text-white shadow-glow backdrop-blur-xl transition hover:border-electric/45"
            >
              Cómo llegar <ArrowRight className="size-3.5" aria-hidden />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section id="contacto" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative overflow-hidden rounded-xl border border-electric/20 bg-gradient-to-br from-electric/18 via-white/[0.07] to-plasma/18 p-8 text-center shadow-glow sm:p-12"
        >
          <div className="absolute inset-0 orbital-grid opacity-35" />
          <div className="relative">
            <h2 className="text-3xl font-semibold text-white sm:text-5xl">
              ¿Listo para poner tu tecnología en órbita?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              Agenda un diagnóstico gratuito o cuéntanos qué necesita tu equipo o negocio.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-electric px-6 py-4 text-sm font-bold text-void transition hover:bg-white"
              >
                <MessageCircle className="size-5" aria-hidden />
                Enviar WhatsApp
              </a>
              <a
                href="mailto:contacto@spacetech.mx?subject=Solicitud%20de%20cotizacion%20Space%20Tech"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-6 py-4 text-sm font-bold text-white transition hover:border-white/45"
              >
                Solicitar cotización <ArrowRight className="size-4" aria-hidden />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 text-sm text-slate-400 sm:px-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 text-white">
            <span className="grid size-10 place-items-center rounded-full border border-electric/35 bg-electric/10">
              <Rocket className="size-5 text-electric" aria-hidden />
            </span>
            <span className="text-base font-semibold">Space Tech</span>
          </div>
          <p className="mt-4">Tu tecnología siempre en órbita</p>
          <div className="mt-5 grid gap-3 leading-6">
            <p>Eje 1 Nte. 135, Moctezuma 2da Secc, Venustiano Carranza, 15530 Ciudad de México, CDMX.</p>
            <p>Lunes a viernes, 9:00 a 19:00 hrs.</p>
            <p>Atención con cita previa.</p>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Servicios principales</p>
          <div className="mt-4 grid gap-2">
            <span>Soporte técnico</span>
            <span>Mantenimiento</span>
            <span>Recuperación de datos</span>
            <span>Optimización de equipos</span>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Desarrollo Web</p>
          <div className="mt-4 grid gap-2">
            <span>Páginas web</span>
            <span>Sistemas administrativos</span>
            <span>Automatización</span>
            <span>Software a medida</span>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Contacto</p>
          <a className="mt-4 inline-flex text-electric" href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp Space Tech
          </a>
          <p className="mt-4">Redes sociales próximamente</p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-5 text-xs text-slate-500 sm:px-8">
        © 2026 Space Tech. Todos los derechos reservados.
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#22c55e] text-white shadow-[0_18px_45px_rgba(34,197,94,0.35)] transition hover:-translate-y-1"
    >
      <MessageCircle className="size-7" aria-hidden />
    </a>
  );
}
