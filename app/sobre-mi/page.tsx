"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";
import WaveDivider from "@/components/WaveDivider";

const formations = [
  { label: "Práctica somática", years: "20+ años", desc: "Exploración de la relación cuerpo-mente-emoción desde la experiencia." },
  { label: "Escritura reflexiva", years: "Continua", desc: "La escritura como práctica de autoconocimiento y presencia." },
  { label: "Acompañamiento", years: "Profesional", desc: "Formación en procesos de acompañamiento personal y grupal." },
  { label: "Facilitación", years: "Grupos & talleres", desc: "Espacios de práctica colectiva para el arte de notar." },
];

export default function SobreMiPage() {
  const philosophyRef = useRef<HTMLElement>(null);
  const { scrollYProgress: philProgress } = useScroll({ target: philosophyRef, offset: ["start end", "end start"] });
  const philBgY = useTransform(philProgress, [0, 1], ["-15%", "15%"]);

  return (
    <>
      {/* S1 — Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-24">
        <Image
          src="/images/photos/claudia-portrait.jpg"
          alt="Claudia Elena Padilla"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.3) 60%, rgba(26,26,26,0) 100%)" }} />
        <div className="relative z-10 container-custom pb-16">
          <RevealOnScroll variant="fadeUp">
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c6b8e8", marginBottom: "12px" }}>
              Fundadora · Practicante
            </p>
            <h1 className="text-display text-white" style={{ fontFamily: "Playfair Display, serif" }}>
              Soy Claudia Elena Padilla
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      {/* S2 — Origins */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-[780px] mx-auto">
            <RevealOnScroll variant="fadeUp">
              <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "20px" }}>
                Quién soy
              </p>
              <h2 className="text-headline mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
                Una practicante antes que una instructora
              </h2>
              <div style={{ borderLeft: "3px solid #c6b8e8", paddingLeft: "28px", marginBottom: "32px" }}>
                <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, color: "#44403c", lineHeight: 1.95, fontSize: "18px" }}>
                  La autoobservación no fue algo que aprendí en un libro — fue algo que la vida me enseñó cuando no tenía más recursos que prestar atención. Más de 20 años explorando la relación entre el cuerpo, la mente y las emociones me llevaron a entender que la transformación no llega de afuera.
                </p>
              </div>
              <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, color: "#44403c", lineHeight: 1.95, fontSize: "18px" }}>
                Nació de un momento de quietud, de un instante de notar — sin juzgar, sin corregir. Solo estar. Desde ahí construí un espacio donde otros pudieran también encontrarse consigo mismos, sin recetas ni exigencias.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* S3 — Formation Path */}
      <WaveDivider fillColor="#f7f0ea" />
      <section className="section-padding" style={{ backgroundColor: "#f7f0ea" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <RevealOnScroll variant="fadeRight">
              <div className="relative rounded-card overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <Image src="/images/photos/claudia-laptop.jpg" alt="Claudia escribiendo" fill className="object-cover" />
              </div>
            </RevealOnScroll>
            <div>
              <RevealOnScroll variant="fadeLeft">
                <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "16px" }}>
                  Mi camino
                </p>
                <h2 className="text-headline mb-10" style={{ fontFamily: "Playfair Display, serif" }}>
                  Formación & práctica
                </h2>
              </RevealOnScroll>
              <StaggerGroup className="space-y-6">
                {formations.map((f) => (
                  <StaggerItem key={f.label}>
                    <div className="flex gap-5 items-start">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full mt-3" style={{ backgroundColor: "#c6b8e8" }} />
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <p style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", color: "#1a1a1a", fontWeight: 600 }}>{f.label}</p>
                          <span style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", color: "#d1baaa", letterSpacing: "0.1em", textTransform: "uppercase" }}>{f.years}</span>
                        </div>
                        <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, color: "#78716c", fontSize: "16px", lineHeight: 1.7 }}>{f.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* S4 — Philosophy (Parallax forest bg + quote) */}
      <section ref={philosophyRef} className="relative overflow-hidden" style={{ minHeight: "440px", display: "flex", alignItems: "center" }}>
        <motion.div style={{ y: philBgY }} className="absolute inset-0 -top-[15%] h-[130%]">
          <Image src="/images/bg/forest-path.jpg" alt="" fill style={{ objectFit: "cover", objectPosition: "center 40%" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,26,26,0.72) 0%, rgba(26,26,26,0.55) 100%)" }} />
        </motion.div>
        <div className="relative z-10 w-full py-28 px-6">
          <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
            <RevealOnScroll variant="scaleReveal">
              <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c6b8e8", marginBottom: "24px" }}>
                Lo que creo
              </p>
              <blockquote style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", color: "#ffffff", lineHeight: 1.5 }}>
                &ldquo;La claridad no se construye — se descubre.<br />
                <span style={{ color: "#f5dd7a" }}>Y se descubre notando, no controlando.</span>&rdquo;
              </blockquote>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* S5 — How I Accompany */}
      <WaveDivider fillColor="#1a1a1a" />
      <section className="section-padding" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <RevealOnScroll variant="fadeLeft">
              <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c6b8e8", marginBottom: "16px" }}>
                Cómo acompaño
              </p>
              <h2 className="text-headline text-white mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
                Mi manera de estar contigo
              </h2>
              <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, color: "#d6d6d4", lineHeight: 1.9, fontSize: "17px", marginBottom: "24px" }}>
                No vengo a decirte qué debes cambiar. Vengo a estar presente mientras tú notas lo que ya está ahí. El proceso de autoobservación es tuyo — yo solo soy testigo del camino.
              </p>
              <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, color: "#d6d6d4", lineHeight: 1.9, fontSize: "17px" }}>
                Ofrezco cursos, recursos y espacios de práctica donde puedas aprender el arte de notar sin juicio, sin prisa, sin expectativa de llegar a ningún lado en particular.
              </p>
            </RevealOnScroll>
            <RevealOnScroll variant="fadeRight">
              <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c6b8e8", marginBottom: "16px" }}>
                Lo que ofrezco
              </p>
              <div className="space-y-6">
                {[
                  { title: "Programas Online", desc: "Cursos evergreen disponibles en Kajabi para practicar a tu ritmo.", href: "/programas-online" },
                  { title: "Recursos libres", desc: "Libro, podcast y una experiencia gratuita de acceso inmediato.", href: "/recursos" },
                  { title: "Espacio Acerca", desc: "El contexto y la práctica detrás de Autoobservación®.", href: "/acerca" },
                ].map((item) => (
                  <Link key={item.title} href={item.href} className="block group">
                    <div className="p-6 rounded-card transition-all duration-300 group-hover:-translate-y-1" style={{ border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.04)" }}>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", color: "#ffffff", marginBottom: "6px" }}>{item.title}</p>
                          <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, color: "#a09088", fontSize: "15px", lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                        <span className="text-[#c6b8e8] text-lg flex-shrink-0 group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
