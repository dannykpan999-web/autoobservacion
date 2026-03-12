"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";

const exhale = { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] as const };

export default function EstoyConmigoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", privacy: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.privacy) return;
    setSubmitted(true);
  };

  const scrollToForm = () => {
    document.getElementById("form-acceso")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "10px",
    border: "1.5px solid #d6d6d4",
    fontFamily: "Nunito, sans-serif",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
    backgroundColor: "#fafafa",
    transition: "border-color 0.2s",
  };

  return (
    <div>
      {/* HERO */}
      <section style={{ backgroundColor: "#f7f0ea", paddingTop: "120px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <RevealOnScroll>
            <span style={{
              display: "inline-block", backgroundColor: "#c6b8e8", color: "#1a1a1a",
              fontSize: "11px", fontFamily: "Nunito, sans-serif", fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase", padding: "6px 18px",
              borderRadius: "50px", marginBottom: "32px",
            }}>Acceso libre · Sin costo</span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 600,
              color: "#1a1a1a", lineHeight: 1.1, marginBottom: "28px",
            }}>
              Autoobservación:<br />
              <em style={{ fontWeight: 400 }}>Estoy Conmigo</em>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p style={{
              fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "18px",
              lineHeight: 1.9, color: "#555", marginBottom: "40px",
            }}>
              Antes de cambiar algo afuera, puedes notar cómo estás tú.<br />
              He creado una experiencia breve para aprender a estar contigo sin exigencia.<br />
              Un video corto. Una práctica guiada. Una hoja simple para registrar lo que notes.<br />
              <em>Nada que mejorar. Nada que corregir. Solo estar contigo.</em>
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
              onClick={scrollToForm}
              style={{
                backgroundColor: "#1a1a1a", color: "#fff", fontFamily: "Nunito, sans-serif",
                fontWeight: 700, fontSize: "15px", letterSpacing: "0.06em",
                padding: "16px 40px", borderRadius: "8px", border: "none", cursor: "pointer",
              }}
            >
              👉 Acceder a la experiencia
            </motion.button>
          </RevealOnScroll>
        </div>
      </section>

      {/* Wave */}
      <div style={{ position: "relative", height: "60px", backgroundColor: "#f7f0ea" }}>
        <svg viewBox="0 0 1440 60" style={{ position: "absolute", bottom: 0, width: "100%" }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* WHAT YOU FIND */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <RevealOnScroll>
            <p style={{
              fontFamily: "Nunito, sans-serif", fontSize: "11px", fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa",
              marginBottom: "12px", textAlign: "center",
            }}>¿Qué encontrarás?</p>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600,
              color: "#1a1a1a", marginBottom: "40px", textAlign: "center", lineHeight: 1.15,
            }}>Esta experiencia incluye:</h2>
          </RevealOnScroll>

          <StaggerGroup>
            {[
              { icon: "🎥", title: "Un video breve", desc: "donde explico el enfoque." },
              { icon: "🎧", title: "Una práctica guiada", desc: "para observar tu cuerpo respirar." },
              { icon: "📄", title: "Una hoja simple", desc: "para notar lo que cambia cuando llegas con presencia." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(26,26,26,0.09)" }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: "20px",
                    backgroundColor: "#f7f0ea", borderRadius: "16px",
                    padding: "28px 32px", marginBottom: "16px",
                  }}
                >
                  <span style={{ fontSize: "28px", lineHeight: 1, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "17px", color: "#1a1a1a", marginBottom: "4px" }}>{item.title}</p>
                    <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "16px", color: "#666", margin: 0 }}>{item.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <RevealOnScroll delay={0.2}>
            <div style={{ borderLeft: "3px solid #c6b8e8", paddingLeft: "24px", margin: "40px 0" }}>
              <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "18px", color: "#555", lineHeight: 1.8, margin: 0 }}>
                No aprenderás una técnica. No vamos a analizar tu mente.<br />
                Solo experimentarás algo sencillo:<br />
                <strong style={{ color: "#1a1a1a" }}>Estar contigo es natural.</strong><br />
                Y eso regula más de lo que imaginas.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p style={{
              fontFamily: "Nunito, sans-serif", fontSize: "15px", color: "#888",
              lineHeight: 1.7, backgroundColor: "#f7f0ea", borderRadius: "12px",
              padding: "20px 24px", margin: 0,
            }}>
              🔁 Puedes repetir la experiencia las veces que quieras, se mantendrá activa para ti en la página.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* FOR WHOM — dark */}
      <section style={{ backgroundColor: "#1a1a1a", padding: "80px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <RevealOnScroll>
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "12px" }}>¿Para quién es?</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, color: "#ffffff", marginBottom: "36px", lineHeight: 1.15 }}>
              Esta experiencia es para ti
            </h2>
          </RevealOnScroll>

          <StaggerGroup>
            {[
              "Quieres aprender a estar contigo sin exigirte.",
              "Buscas una pausa simple, en medio de lo cotidiano.",
              "Intuyes que antes de cambiar algo afuera, puedes notar cómo estás tú.",
            ].map((text) => (
              <StaggerItem key={text}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "20px", textAlign: "left" }}>
                  <span style={{ color: "#f5dd7a", fontSize: "18px", flexShrink: 0, marginTop: "2px" }}>✦</span>
                  <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "17px", color: "#fefcf9", lineHeight: 1.75, margin: 0 }}>{text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <RevealOnScroll delay={0.2}>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "18px", color: "#d1baaa", marginTop: "40px", lineHeight: 1.7 }}>
              No necesitas experiencia previa. Solo curiosidad.<br />
              No es un reto. No es un curso.<br />
              <span style={{ color: "#f5dd7a" }}>Es una experiencia.</span>
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Wave */}
      <div style={{ position: "relative", height: "60px", backgroundColor: "#1a1a1a" }}>
        <svg viewBox="0 0 1440 60" style={{ position: "absolute", bottom: 0, width: "100%" }}>
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" fill="#f7f0ea" />
        </svg>
      </div>

      {/* SECOND COPY + FORM */}
      <section id="form-acceso" style={{ backgroundColor: "#f7f0ea", padding: "80px 24px 100px" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <RevealOnScroll>
            <span style={{
              display: "inline-block", backgroundColor: "#c6b8e8", color: "#1a1a1a",
              fontSize: "11px", fontFamily: "Nunito, sans-serif", fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase", padding: "6px 18px",
              borderRadius: "50px", marginBottom: "28px",
            }}>Acceso libre · Sin costo</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 600, color: "#1a1a1a", marginBottom: "20px", lineHeight: 1.15 }}>
              Autoobservación:<br /><em style={{ fontWeight: 400 }}>Estoy Conmigo</em>
            </h2>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "18px", color: "#666", lineHeight: 1.9, marginBottom: "48px" }}>
              Una experiencia breve de autoobservación.<br />
              Para notar tu cuerpo respirar,<br />
              y estar contigo mientras el mundo está.<br />
              <span style={{ color: "#1a1a1a" }}>Estar contigo no significa exigirte.</span><br />
              Significa acompañarte.
            </p>
          </RevealOnScroll>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }} transition={exhale}
                onSubmit={handleSubmit}
                style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "40px 36px", boxShadow: "0 8px 40px rgba(26,26,26,0.08)", textAlign: "left" }}
              >
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ fontFamily: "Nunito, sans-serif", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", color: "#555", display: "block", marginBottom: "8px" }}>Nombre completo</label>
                  <input type="text" required placeholder="Tu nombre" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "#c6b8e8")} onBlur={e => (e.target.style.borderColor = "#d6d6d4")} />
                </div>
                <div style={{ marginBottom: "24px" }}>
                  <label style={{ fontFamily: "Nunito, sans-serif", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", color: "#555", display: "block", marginBottom: "8px" }}>Correo electrónico</label>
                  <input type="email" required placeholder="tu@correo.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "#c6b8e8")} onBlur={e => (e.target.style.borderColor = "#d6d6d4")} />
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "28px" }}>
                  <input type="checkbox" id="privacy" checked={form.privacy} onChange={e => setForm({ ...form, privacy: e.target.checked })}
                    style={{ marginTop: "3px", accentColor: "#c6b8e8", width: "16px", height: "16px", flexShrink: 0, cursor: "pointer" }} />
                  <label htmlFor="privacy" style={{ fontFamily: "Nunito, sans-serif", fontSize: "13px", color: "#888", lineHeight: 1.6, cursor: "pointer" }}>
                    ✅ Acepto las <a href="#" style={{ color: "#c6b8e8", textDecoration: "underline" }}>Políticas de Privacidad</a> y <a href="#" style={{ color: "#c6b8e8", textDecoration: "underline" }}>Términos de Uso</a>
                  </label>
                </div>
                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={!form.privacy}
                  style={{ width: "100%", backgroundColor: form.privacy ? "#1a1a1a" : "#ccc", color: "#fff", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "0.06em", padding: "16px", borderRadius: "10px", border: "none", cursor: form.privacy ? "pointer" : "not-allowed", transition: "background-color 0.2s" }}>
                  👉 ¡Quiero acceder a la experiencia!
                </motion.button>
              </motion.form>
            ) : (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={exhale}
                style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "48px 36px", boxShadow: "0 8px 40px rgba(26,26,26,0.08)", textAlign: "center" }}>
                <div style={{ fontSize: "48px", marginBottom: "20px" }}>✨</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", color: "#1a1a1a", marginBottom: "12px" }}>¡Bienvenida, {form.name}!</h3>
                <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "16px", color: "#666", lineHeight: 1.8 }}>
                  Hemos enviado el acceso a <strong>{form.email}</strong>.<br />La experiencia te espera. Solo estar contigo.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
