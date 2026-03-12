"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";
import MarqueeStrip from "@/components/MarqueeStrip";

const modules = [
  {
    num: "0",
    title: "Bienvenida",
    bullets: ["Bienvenida.", "Cómo aprovechar el recorrido."],
    icons: ["🎥 2 videos", "🎧 4 prácticas guiadas", "📄 1 material de apoyo"],
  },
  {
    num: "1",
    title: "Comprender la autoobservación",
    bullets: [
      "Qué es y qué no es la autoobservación.",
      "Antes de las herramientas, las vías del tren.",
      "Claridad y responsabilidad.",
    ],
    icons: ["🎥 4 videos", "📄 4 materiales de apoyo"],
  },
  {
    num: "2",
    title: "Autoobservación y meditación",
    bullets: [
      "Reconocer que ambas son cualidades innatas.",
      "Identificar la diferencia entre autoobservación y meditación.",
      "Distinguir entre cualidades y técnicas.",
    ],
    icons: ["🎥 1 video", "🎧 1 práctica guiada", "📄 1 material de apoyo"],
  },
  {
    num: "3",
    title: "Gesto 1: Me acompaño",
    bullets: [
      "Permanecer presente con lo que aparece en ti.",
      "Desarrollar una relación más amable contigo mismo.",
      "Práctica guiada de acompañamiento interno.",
    ],
    icons: ["🎥 1 video", "🎧 1 práctica guiada", "📄 3 materiales de apoyo"],
  },
  {
    num: "4",
    title: "Gesto 2: Me acompaño",
    bullets: [
      "Qué significa realmente acompañarte.",
      "Cómo permanecer en presencia cuando aparecen emociones.",
      "Una práctica guiada para entrenar esta forma de estar contigo.",
    ],
    icons: ["🎥 1 video", "🎧 1 práctica guiada", "📄 2 materiales de apoyo"],
  },
  {
    num: "5",
    title: "Gesto 3: Me elijo",
    bullets: [
      "Los 3 gestos implícitos.",
      "Cómo surge la posibilidad de elegir.",
      "Integrar los tres gestos en la vida cotidiana.",
    ],
    icons: ["🎥 1 video", "🎧 1 práctica guiada", "📄 2 materiales de apoyo"],
  },
  {
    num: "✦",
    title: "Módulo de cierre",
    bullets: ["Integración del recorrido."],
    icons: ["🎥 1 video", "📄 1 material de apoyo"],
  },
];

const forYouList = [
  "Te interesa comprenderte mejor para acompañarte desde la autocompasión.",
  "Has explorado libros, terapias o herramientas y buscas una práctica simple y directa.",
  "Sientes curiosidad por aprender a observar lo que ocurre en ti sin juzgarte inmediatamente.",
  "Te gustaría aprender una forma de acompañarte internamente cuando aparecen pensamientos o emociones difíciles.",
  "Buscas una práctica que puedas llevar a tu vida cotidiana, no solo a momentos de silencio.",
  "Intuyes que conocerte mejor puede abrir nuevas posibilidades en tu manera de vivir.",
  "Te interesa desarrollar discernimiento al usar herramientas de crecimiento personal.",
];

const notForYouList = [
  "Buscas soluciones rápidas para eliminar emociones incómodas.",
  "Prefieres métodos que prometen cambiar tu vida de manera inmediata.",
  "No tienes interés en mirar hacia dentro y prefieres quedarte en la intelectualización.",
];

const faqs = [
  {
    q: "¿Necesito ser terapeuta o tener conocimientos de desarrollo personal?",
    a: "No. Este taller es para cualquier persona. Ya seas terapeuta, líder, estudiante o simplemente alguien con curiosidad por conocerse mejor, la autoobservación es una capacidad humana natural.",
  },
  {
    q: "¿Necesito experiencia previa en meditación o trabajo interior?",
    a: "No. El programa está diseñado para que cualquier persona pueda comenzar desde donde está, sin experiencia previa.",
  },
  {
    q: "¿Cuánto tiempo me tomará completar el taller?",
    a: "Aproximadamente 5 días, dedicando 30–40 minutos por día, pero puedes avanzar a tu propio ritmo.",
  },
  {
    q: "¿Durante cuánto tiempo tendré acceso?",
    a: "Tendrás acceso durante 6 meses para que puedas recorrerlo con calma y repetir las prácticas.",
  },
  {
    q: "¿Es solo teoría o incluye prácticas?",
    a: "El taller combina explicación clara y prácticas guiadas para que puedas experimentar la autoobservación directamente en tu vida cotidiana.",
  },
];

const card: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "18px",
  padding: "32px 28px",
  boxShadow: "0 4px 20px rgba(26,26,26,0.07)",
  borderTop: "3px solid #c6b8e8",
};

export default function ProgramasOnlinePage() {
  return (
    <div>
      {/* HERO */}
      <section style={{ position: "relative", minHeight: "80vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <Image src="/images/photos/journal-writing.jpg" alt="Comienza Notando" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(26,26,26,0.78) 0%, rgba(26,26,26,0.4) 60%, rgba(26,26,26,0.1) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "130px 40px 80px", width: "100%" }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }} style={{ maxWidth: "620px" }}>
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "16px" }}>CAMINOS DE PRÁCTICA</p>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.8rem, 6vw, 4.8rem)", fontWeight: 600, color: "#ffffff", lineHeight: 1.05, marginBottom: "28px" }}>
              Programas<br /><em style={{ fontWeight: 400 }}>Online</em>
            </h1>
            <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "18px", color: "rgba(255,255,255,0.82)", lineHeight: 1.8, marginBottom: "0" }}>
              Aquí encontrarás algunos de los caminos recorridos en mi formación y lo que ofrezco como acompañamiento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <MarqueeStrip items={["ACCIONES INTERNAS SIMPLES", "TRANSFORMACIÓN REAL", "ACCIONES INTERNAS SIMPLES", "TRANSFORMACIÓN REAL"]} bgColor="#f5dd7a" textColor="#1a1a1a" dotColor="#1a1a1a" />

      {/* INTRO TEXT */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px 40px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <RevealOnScroll>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "20px", color: "#555", lineHeight: 1.85 }}>
              Aquí encontrarás algunos de los caminos recorridos en mi formación y lo que ofrezco como acompañamiento.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* COURSE HERO CARD */}
      <section style={{ backgroundColor: "#ffffff", padding: "40px 24px 80px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <RevealOnScroll>
            <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", minHeight: "420px", display: "flex", alignItems: "flex-end" }}>
              <Image src="/images/photos/candles-lavender.jpg" alt="Comienza Notando" fill style={{ objectFit: "cover", objectPosition: "center 40%" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.2) 60%, transparent 100%)" }} />
              <div style={{ position: "relative", zIndex: 1, padding: "48px" }}>
                <span style={{ display: "inline-block", backgroundColor: "#c6b8e8", color: "#1a1a1a", fontSize: "11px", fontFamily: "Nunito, sans-serif", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", padding: "6px 16px", borderRadius: "50px", marginBottom: "16px" }}>
                  EVERGREEN · SIEMPRE DISPONIBLE
                </span>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 600, color: "#ffffff", lineHeight: 1.1, marginBottom: "20px" }}>
                  Acompañamiento en<br /><em style={{ fontWeight: 400 }}>Autoobservación:</em><br />Comienza Notando
                </h2>
                <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.8)", marginBottom: "28px" }}>
                  7 módulos · 11 videos · 4 prácticas guiadas · 14 materiales de apoyo
                </p>
                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                  <motion.a href="#inscripcion" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
                    style={{ display: "inline-block", backgroundColor: "#f5dd7a", color: "#1a1a1a", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "0.06em", padding: "14px 32px", borderRadius: "8px", textDecoration: "none" }}>
                    👉 Inscríbete
                  </motion.a>
                  <motion.a href="#que-aprenderas" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
                    style={{ display: "inline-block", backgroundColor: "transparent", color: "#fff", fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "14px", letterSpacing: "0.06em", padding: "14px 32px", borderRadius: "8px", textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.4)" }}>
                    Conoce más ↓
                  </motion.a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* QUÉ APRENDERÁS */}
      <section id="que-aprenderas" style={{ backgroundColor: "#f7f0ea", padding: "100px 24px" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <RevealOnScroll>
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "12px", textAlign: "center" }}>El recorrido</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 600, color: "#1a1a1a", marginBottom: "20px", textAlign: "center", lineHeight: 1.15 }}>
              Qué aprenderás en este taller
            </h2>
            <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "17px", color: "#666", lineHeight: 1.85, textAlign: "center", maxWidth: "620px", margin: "0 auto 48px" }}>
              En este recorrido introductorio comenzarás a entrenar una habilidad fundamental: la capacidad de observar tu experiencia interna.
            </p>
          </RevealOnScroll>
          <StaggerGroup>
            {[
              { title: "Reconocer lo que ocurre en ti", desc: "Notar pensamientos, emociones y sensaciones con claridad." },
              { title: "Acompañarte en lugar de juzgarte", desc: "Desarrollar presencia con tu experiencia interna." },
              { title: "Elegirte desde mayor conciencia", desc: "Responder desde un lugar más claro y auténtico." },
              { title: "Acostumbrarte a estar contigo", desc: "Observar patrones y reacciones habituales." },
              { title: "Practicar autoobservación en la vida diaria", desc: "Integrar esta habilidad en tu día a día, sin importar tu actividad." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0", backgroundColor: "#ffffff", borderRadius: "14px", padding: "24px 28px", marginBottom: "14px", borderLeft: "3px solid #c6b8e8", boxShadow: "0 2px 16px rgba(26,26,26,0.05)" }}>
                  <div>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "16px", color: "#1a1a1a", marginBottom: "4px" }}>{item.title}</p>
                    <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "15px", color: "#888", margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <RevealOnScroll delay={0.2}>
            <div style={{ backgroundColor: "#1a1a1a", borderRadius: "16px", padding: "32px 36px", marginTop: "40px", textAlign: "center" }}>
              <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "18px", color: "#fefcf9", lineHeight: 1.8, margin: 0 }}>
                No se trata de aprender algo nuevo.<br />
                <span style={{ color: "#f5dd7a" }}>Se trata de empezar a notar lo que ya ocurre en ti.</span>
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* MARQUEE QUOTE */}
      <MarqueeStrip items={["¿Qué cambiaría si en lugar de juzgarte… aprendieras a acompañarte?"]} bgColor="#1a1a1a" textColor="#f5dd7a" dotColor="#f5dd7a" />

      {/* PARA QUIÉN */}
      <section style={{ backgroundColor: "#ffffff", padding: "100px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <RevealOnScroll>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, color: "#1a1a1a", marginBottom: "48px", textAlign: "center", lineHeight: 1.15 }}>Este taller es para ti si…</h2>
          </RevealOnScroll>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            <RevealOnScroll>
              <div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {forYouList.map((item) => (
                    <div key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{ color: "#c6b8e8", fontWeight: 700, flexShrink: 0, marginTop: "3px", fontSize: "16px" }}>✔️</span>
                      <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "15px", color: "#555", lineHeight: 1.75, margin: 0 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.15}>
              <div>
                <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "16px" }}>Y quizá no sea para ti si…</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px" }}>
                  {notForYouList.map((item) => (
                    <div key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{ color: "#d6d6d4", fontWeight: 700, flexShrink: 0, marginTop: "3px" }}>✘</span>
                      <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "15px", color: "#888", lineHeight: 1.75, margin: 0 }}>{item}</p>
                    </div>
                  ))}
                </div>
                <div style={{ backgroundColor: "#f7f0ea", borderRadius: "14px", padding: "24px 28px" }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "15px", color: "#555", lineHeight: 1.85, margin: 0 }}>
                    A veces, el primer paso no es cambiar.<br />
                    <span style={{ color: "#1a1a1a" }}>Es empezar a notar.</span>
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#f7f0ea", padding: "100px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <RevealOnScroll>
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "12px", textAlign: "center" }}>Respuestas</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, color: "#1a1a1a", marginBottom: "48px", textAlign: "center", lineHeight: 1.15 }}>Preguntas frecuentes</h2>
          </RevealOnScroll>
          <StaggerGroup>
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div style={{ backgroundColor: "#ffffff", borderRadius: "14px", padding: "28px 32px", marginBottom: "16px", boxShadow: "0 2px 16px rgba(26,26,26,0.05)" }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "16px", color: "#1a1a1a", marginBottom: "10px" }}>{faq.q}</p>
                  <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "15px", color: "#666", lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* AGREEMENT */}
      <section style={{ backgroundColor: "#1a1a1a", padding: "80px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <RevealOnScroll variant="scaleReveal">
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "16px" }}>Antes de comenzar</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, color: "#ffffff", marginBottom: "28px", lineHeight: 1.15 }}>Un pequeño acuerdo</h2>
            <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "17px", color: "rgba(255,255,255,0.8)", lineHeight: 1.9, marginBottom: "24px" }}>
              Este taller no busca cambiarte ni corregirte. La autoobservación no es una técnica para arreglar lo que eres. Es una práctica para notar lo que ocurre en ti y aprender a acompañarlo con mayor claridad.
            </p>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "24px" }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "17px", color: "#f5dd7a", lineHeight: 1.85, margin: 0 }}>
                La autoobservación no se comprende únicamente pensando sobre ella.<br />
                <strong>Se descubre practicándola.</strong>
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ backgroundColor: "#ffffff", padding: "100px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <RevealOnScroll>
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "12px", textAlign: "center" }}>La modalidad</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, color: "#1a1a1a", marginBottom: "48px", textAlign: "center", lineHeight: 1.15 }}>Cómo funciona el programa</h2>
          </RevealOnScroll>
          <StaggerGroup>
            {[
              { icon: "🎬", text: "El contenido del taller está completamente grabado y disponible para que lo recorras a tu propio ritmo." },
              { icon: "🗓", text: "Esto permite que puedas realizar las prácticas en los momentos que mejor se adapten a tu vida cotidiana." },
              { icon: "🔁", text: "Puedes repetir el material tantas veces como lo desees. La práctica se profundiza con la repetición: cada vez puede abrir una comprensión más clara e integrarse de manera más natural." },
            ].map((item) => (
              <StaggerItem key={item.icon}>
                <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", marginBottom: "28px" }}>
                  <span style={{ fontSize: "28px", flexShrink: 0 }}>{item.icon}</span>
                  <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "17px", color: "#555", lineHeight: 1.85, margin: 0 }}>{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* MODULES */}
      <section style={{ backgroundColor: "#f7f0ea", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <RevealOnScroll>
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "12px", textAlign: "center" }}>El contenido</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 600, color: "#1a1a1a", marginBottom: "12px", textAlign: "center", lineHeight: 1.15 }}>COMIENZA NOTANDO</h2>
            <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "16px", color: "#888", marginBottom: "56px", textAlign: "center" }}>
              7 módulos · 4 de práctica · 11 videos · 4 prácticas guiadas · 14 materiales de apoyo
            </p>
          </RevealOnScroll>
          <StaggerGroup>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
              {modules.map((mod) => (
                <StaggerItem key={mod.num}>
                  <motion.div whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(26,26,26,0.12)" }} transition={{ duration: 0.3 }} style={{ ...card, height: "100%" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "#f7f0ea", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                      <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "16px", color: "#1a1a1a" }}>{mod.num}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "17px", color: "#1a1a1a", marginBottom: "14px", lineHeight: 1.3 }}>{mod.title}</h3>
                    <ul style={{ margin: "0 0 18px", paddingLeft: "16px" }}>
                      {mod.bullets.map((b) => (
                        <li key={b} style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "14px", color: "#666", lineHeight: 1.7, marginBottom: "4px" }}>{b}</li>
                      ))}
                    </ul>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      {mod.icons.map((ic) => (
                        <span key={ic} style={{ fontFamily: "Nunito, sans-serif", fontSize: "13px", color: "#888" }}>{ic}</span>
                      ))}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerGroup>
        </div>
      </section>

      {/* INSCRIPTION CTA */}
      <section id="inscripcion" style={{ backgroundColor: "#1a1a1a", padding: "100px 24px" }}>
        <div style={{ maxWidth: "620px", margin: "0 auto", textAlign: "center" }}>
          <RevealOnScroll variant="scaleReveal">
            <span style={{ display: "inline-block", backgroundColor: "#f5dd7a", color: "#1a1a1a", fontSize: "11px", fontFamily: "Nunito, sans-serif", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", padding: "6px 18px", borderRadius: "50px", marginBottom: "28px" }}>Precio de apertura</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#ffffff", marginBottom: "16px", lineHeight: 1.1 }}>Comienza Notando</h2>
            <div style={{ marginBottom: "20px" }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "60px", fontWeight: 700, color: "#f5dd7a", lineHeight: 1 }}>$11</span>
              <span style={{ fontFamily: "Nunito, sans-serif", fontSize: "22px", color: "rgba(255,255,255,0.6)", marginLeft: "8px" }}>USD</span>
            </div>
            <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "13px", color: "rgba(255,255,255,0.45)", marginBottom: "6px" }}>A partir de 14 días del lanzamiento: $19 USD</p>
            <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "13px", color: "rgba(255,255,255,0.45)", marginBottom: "36px" }}>≈ El cobro se realizará en el equivalente a tu moneda local según el tipo de cambio de tu banco.</p>
            <div style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "14px", padding: "24px 28px", marginBottom: "36px", textAlign: "left" }}>
              {["El programa está completamente grabado y puedes recorrerlo a tu propio ritmo.", "Acceso durante 6 meses a partir del día de tu compra.", "Puedes repetir el material tantas veces como lo desees.", "Una inversión para comenzar una práctica que puede acompañarte toda la vida."].map((text) => (
                <div key={text} style={{ display: "flex", gap: "12px", marginBottom: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#f5dd7a", flexShrink: 0, marginTop: "3px" }}>✦</span>
                  <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: 0 }}>{text}</p>
                </div>
              ))}
            </div>
            <Link href="/checkout">
              <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} style={{ display: "inline-block", backgroundColor: "#f5dd7a", color: "#1a1a1a", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "0.06em", padding: "18px 52px", borderRadius: "10px", cursor: "pointer", marginBottom: "20px" }}>
                👉 Quiero practicar ahora
              </motion.span>
            </Link>
            <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "12px", color: "rgba(255,255,255,0.3)", lineHeight: 1.6 }}>
              🚨 El acceso al contenido lo tendrás por 6 meses a partir del día de tu compra.<br />
              Al realizar la compra acepto los Términos y condiciones de Autoobservación®.
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
