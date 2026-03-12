"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import MarqueeStrip from "@/components/MarqueeStrip";
import RevealOnScroll from "@/components/RevealOnScroll";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";
import FreeAccessBlock from "@/components/FreeAccessBlock";
import WaveDivider from "@/components/WaveDivider";

function WordReveal({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <h1 className={className} style={{ fontFamily: "Playfair Display, serif" }}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.22em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 + i * 0.09 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

const productCards = [
  {
    image: "/images/photos/candles-lavender.jpg",
    category: "Programa",
    title: "Acompañamiento en Autoobservación",
    description: "Un proceso personal para aprender a habitar tu vida con más claridad y presencia.",
    href: "/programas-online",
  },
  {
    image: "/images/photos/journal-writing.jpg",
    category: "Recursos",
    title: "Libro & Podcast",
    description: "Notar: Ensayando la Autoobservación. Escúchanos cada semana en Spotify y YouTube.",
    href: "/recursos",
  },
  {
    image: "/images/photos/candles-1.jpg",
    category: "Acceso Libre",
    title: "Autoobservación®: Estoy Conmigo",
    description: "Un video corto, una práctica guiada y una hoja para registrar lo que notes. Sin costo.",
    href: "#free-access",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* S1 — HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "#f5dd7a" }}>
        {/* Parallax portrait — desktop */}
        <motion.div style={{ y: bgY }} className="absolute right-0 top-0 h-[115%] w-[50%] hidden md:block">
          <Image src="/images/photos/claudia-laptop.jpg" alt="Claudia Elena Padilla" fill priority className="object-cover object-top" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #f5dd7a 0%, rgba(245,221,122,0.3) 35%, rgba(245,221,122,0) 100%)" }} />
        </motion.div>

        {/* Content */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 container-custom w-full py-36 md:py-0 md:min-h-screen flex items-center">
          <div className="max-w-[600px]">
            <motion.span
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-block mb-8 px-5 py-2 rounded-full"
              style={{ backgroundColor: "rgba(26,26,26,0.1)", color: "#1a1a1a", fontFamily: "Nunito, sans-serif", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}
            >
              Autoobservación® · El arte de notar
            </motion.span>

            <WordReveal
              text="¿Estás lista para escucharte de verdad?"
              className="text-display text-dark mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 1.1 }}
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, color: "#1a1a1a", fontSize: "18px", lineHeight: 1.85, marginBottom: "44px", maxWidth: "460px" }}
            >
              Un espacio para volver a ti, reconocerte en la práctica que te invita a habitar la vida de manera diferente.
            </motion.p>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 1.4 }}>
              <Link
                href="#free-access"
                style={{ backgroundColor: "#1a1a1a", color: "#ffffff", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "18px 44px", borderRadius: "8px", display: "inline-flex", alignItems: "center", transition: "all 0.3s" }}
                className="hover:scale-[1.03] hover:shadow-lg"
              >
                Acceso Libre
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile photo overlay */}
        <div className="absolute inset-0 md:hidden pointer-events-none">
          <Image src="/images/photos/claudia-laptop.jpg" alt="Claudia Elena Padilla" fill className="object-cover object-top opacity-15" />
        </div>
      </section>

      {/* S2 — WELCOME */}
      <WaveDivider fillColor="#ffffff" />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-[740px] mx-auto text-center">
            <RevealOnScroll variant="fadeUp">
              <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "16px" }}>
                Bienvenida a Autoobservación®
              </p>
              <blockquote style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", fontSize: "clamp(1.4rem, 3vw, 2.1rem)", color: "#c6b8e8", lineHeight: 1.45, marginBottom: "32px" }}>
                &ldquo;Comienza notando… eso basta para empezar.&rdquo;
              </blockquote>
              <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, color: "#44403c", lineHeight: 1.9, fontSize: "17px" }}>
                La autoobservación es una práctica cotidiana y un arte de notar — un proceso continuo de mirar hacia adentro y ser testigo de tu experiencia interna. La transformación ocurre a través de momentos de claridad que cambian la manera en que nos relacionamos con la vida.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* S3 — MARQUEE */}
      <MarqueeStrip items={["Comienza notando", "Cursos", "Acompañamiento"]} bgColor="#1a1a1a" textColor="#ffffff" dotColor="#f5dd7a" />

      {/* S4 — SOY CLAUDIA */}
      <section className="section-padding" style={{ backgroundColor: "#f7f0ea" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <RevealOnScroll variant="fadeRight" className="order-2 md:order-1">
              <div className="relative rounded-card overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <Image src="/images/photos/claudia-sofa.jpg" alt="Claudia Elena Padilla" fill className="object-cover" />
              </div>
            </RevealOnScroll>
            <RevealOnScroll variant="fadeLeft" className="order-1 md:order-2">
              <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "14px" }}>
                Fundadora · Practicante en Autoobservación
              </p>
              <h2 className="text-headline mb-7" style={{ fontFamily: "Playfair Display, serif" }}>
                Soy Claudia<br />Elena Padilla
              </h2>
              <div style={{ borderLeft: "3px solid #c6b8e8", paddingLeft: "22px", marginBottom: "28px" }}>
                <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, color: "#44403c", lineHeight: 1.9, fontSize: "17px" }}>
                  Más de 20 años explorando la relación cuerpo-mente-emoción, integrando la escritura y el acompañamiento. Ofrezco experiencia práctica centrada en la presencia, no en la teoría.
                </p>
              </div>
              <p style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", color: "#78716c", fontSize: "17px", marginBottom: "36px" }}>
                ¿Qué relación tienes contigo cuando la vida se muestra tal como es?
              </p>
              <Link
                href="/sobre-mi"
                style={{ borderColor: "#1a1a1a", color: "#1a1a1a", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 32px", borderRadius: "8px", display: "inline-flex", alignItems: "center", gap: "8px", border: "1.5px solid #1a1a1a", transition: "all 0.3s" }}
                className="hover:bg-dark hover:text-white"
              >
                Más acerca de mí →
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* S5 — 3 PRODUCT CARDS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <RevealOnScroll variant="fadeUp" className="text-center mb-16">
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "12px" }}>
              Caminos disponibles
            </p>
            <h2 className="text-headline" style={{ fontFamily: "Playfair Display, serif" }}>
              ¿Por dónde quieres comenzar?
            </h2>
          </RevealOnScroll>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCards.map((card) => (
              <StaggerItem key={card.title}>
                <Link href={card.href} className="block group h-full">
                  <div className="h-full rounded-card overflow-hidden transition-all duration-300 group-hover:-translate-y-2" style={{ backgroundColor: "#ffffff", boxShadow: "0 4px 24px rgba(26,26,26,0.07)" }}>
                    <div className="relative overflow-hidden" style={{ height: "200px" }}>
                      <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute left-0 top-0 w-1 h-full origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" style={{ backgroundColor: "#c6b8e8" }} />
                    </div>
                    <div className="p-7">
                      <span className="inline-block mb-4 px-4 py-1 rounded-full" style={{ backgroundColor: "rgba(198,184,232,0.2)", color: "#9b8dbf", fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.13em", textTransform: "uppercase", fontWeight: 700 }}>
                        {card.category}
                      </span>
                      <h3 className="mb-3" style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", lineHeight: 1.35, color: "#1a1a1a" }}>
                        {card.title}
                      </h3>
                      <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "15px", color: "#78716c", lineHeight: 1.75, marginBottom: "16px" }}>
                        {card.description}
                      </p>
                      <p className="transition-colors group-hover:text-[#c6b8e8]" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", color: "#1a1a1a", letterSpacing: "0.05em" }}>
                        Explorar →
                      </p>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* S6 — FREE ACCESS */}
      <div id="free-access">
        <FreeAccessBlock />
      </div>
    </>
  );
}
