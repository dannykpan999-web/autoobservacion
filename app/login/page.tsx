"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const exhale = { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const };

export default function LoginPage() {
  const [showForgot, setShowForgot] = useState(false);
  const [remember, setRemember] = useState(false);
  const [forgotSent, setForgotSent] = useState(false);

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
    marginBottom: "14px",
  };

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f7f0ea", padding: "100px 24px" }}>
      <div style={{ width: "100%", maxWidth: "440px" }}>

        {/* Logos */}
        <div style={{ textAlign: "center", marginBottom: "12px" }}>
          <Image src="/images/logos/isotipo-negro.svg" alt="Autoobservación" width={56} height={56} style={{ height: "56px", width: "56px", margin: "0 auto 16px" }} priority />
          <Image src="/images/logos/logotipo-negro.svg" alt="Autoobservación" width={200} height={40} style={{ height: "34px", width: "auto" }} />
        </div>

        {/* Divider */}
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#c6b8e8", margin: "20px auto 32px" }} />

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={exhale}
          style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "40px 36px", boxShadow: "0 8px 40px rgba(26,26,26,0.09)" }}
        >
          <AnimatePresence mode="wait">
            {!showForgot ? (
              <motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "24px", fontWeight: 600, color: "#1a1a1a", marginBottom: "8px", lineHeight: 1.2 }}>
                  Ingresa a tu cuenta
                </h1>
                <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "14px", color: "#888", marginBottom: "28px", lineHeight: 1.6 }}>
                  Accede a tus cursos y recursos en Kajabi.
                </p>

                <label style={{ fontFamily: "Nunito, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: "8px" }}>Email</label>
                <input type="email" required placeholder="tu@correo.com" style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = "#c6b8e8")} onBlur={e => (e.target.style.borderColor = "#d6d6d4")} />

                <label style={{ fontFamily: "Nunito, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: "8px" }}>Contraseña</label>
                <input type="password" required placeholder="••••••••" style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = "#c6b8e8")} onBlur={e => (e.target.style.borderColor = "#d6d6d4")} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px", marginTop: "4px" }}>
                  <label style={{ display: "flex", gap: "8px", alignItems: "center", cursor: "pointer" }}>
                    <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)}
                      style={{ accentColor: "#1a1a1a", width: "15px", height: "15px", cursor: "pointer" }} />
                    <span style={{ fontFamily: "Nunito, sans-serif", fontSize: "13px", color: "#666" }}>Recordar cuenta</span>
                  </label>
                  <button onClick={() => setShowForgot(true)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "Nunito, sans-serif", fontSize: "13px", color: "#c6b8e8", textDecoration: "underline", padding: 0 }}>
                    Olvidé contraseña
                  </button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  style={{ width: "100%", backgroundColor: "#1a1a1a", color: "#fff", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "0.06em", padding: "16px", borderRadius: "10px", border: "none", cursor: "pointer" }}
                >
                  Entrar →
                </motion.button>
              </motion.div>

            ) : (
              <motion.div key="forgot" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                {!forgotSent ? (
                  <>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 600, color: "#1a1a1a", marginBottom: "8px" }}>Recuperar contraseña</h2>
                    <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "14px", color: "#888", marginBottom: "24px", lineHeight: 1.6 }}>
                      Ingresa tu correo y te enviaremos un enlace para restablecer tu contraseña.
                    </p>
                    <label style={{ fontFamily: "Nunito, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: "8px" }}>Email</label>
                    <input type="email" required placeholder="tu@correo.com" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = "#c6b8e8")} onBlur={e => (e.target.style.borderColor = "#d6d6d4")} />
                    <motion.button
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      onClick={() => setForgotSent(true)}
                      style={{ width: "100%", backgroundColor: "#1a1a1a", color: "#fff", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "0.06em", padding: "16px", borderRadius: "10px", border: "none", cursor: "pointer", marginBottom: "14px" }}
                    >
                      Enviar enlace
                    </motion.button>
                    <button onClick={() => setShowForgot(false)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "Nunito, sans-serif", fontSize: "13px", color: "#888", textDecoration: "underline", display: "block", margin: "0 auto" }}>
                      ← Volver al login
                    </button>
                  </>
                ) : (
                  <div style={{ textAlign: "center", padding: "16px 0" }}>
                    <div style={{ fontSize: "40px", marginBottom: "16px" }}>✉️</div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "#1a1a1a", marginBottom: "12px" }}>Enlace enviado</h3>
                    <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "14px", color: "#666", lineHeight: 1.7, marginBottom: "20px" }}>
                      Revisa tu bandeja de entrada y sigue las instrucciones para restablecer tu contraseña.
                    </p>
                    <button onClick={() => { setShowForgot(false); setForgotSent(false); }} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "Nunito, sans-serif", fontSize: "13px", color: "#c6b8e8", textDecoration: "underline" }}>
                      ← Volver al login
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bottom links */}
        <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "13px", color: "#a09088", textAlign: "center", marginTop: "24px", lineHeight: 1.7 }}>
          ¿Aún no tienes acceso?{" "}
          <a href="/programas-online" style={{ color: "#c6b8e8", textDecoration: "underline" }}>Conoce los programas</a>
        </p>
      </div>
    </section>
  );
}
