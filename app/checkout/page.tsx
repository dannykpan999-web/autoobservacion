"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const exhale = { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const };

type PayMethod = "card" | "paypal";

export default function CheckoutPage() {
  const [method, setMethod] = useState<PayMethod>("card");
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const tabStyle = (active: boolean): React.CSSProperties => ({
    flex: 1,
    padding: "12px",
    borderRadius: "8px",
    border: active ? "2px solid #1a1a1a" : "1.5px solid #d6d6d4",
    backgroundColor: active ? "#1a1a1a" : "#ffffff",
    color: active ? "#fff" : "#1a1a1a",
    fontFamily: "Nunito, sans-serif",
    fontWeight: 700,
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.2s",
    textAlign: "center",
  });

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f7f0ea", padding: "120px 24px 80px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 420px", gap: "40px", alignItems: "start" }}>

        {/* LEFT: Order summary */}
        <div>
          {/* Logo */}
          <div style={{ marginBottom: "40px" }}>
            <Image src="/images/logos/logotipo-negro.svg" alt="Autoobservación" width={200} height={40} style={{ height: "36px", width: "auto" }} />
          </div>

          {/* Product */}
          <div style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "36px", boxShadow: "0 4px 24px rgba(26,26,26,0.07)", marginBottom: "24px" }}>
            <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", marginBottom: "24px" }}>
              <div style={{ position: "relative", width: "80px", height: "80px", borderRadius: "12px", overflow: "hidden", flexShrink: 0 }}>
                <Image src="/images/photos/candles-lavender.jpg" alt="Comienza Notando" fill style={{ objectFit: "cover" }} />
              </div>
              <div>
                <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "4px" }}>Taller Online</p>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: "20px", color: "#1a1a1a", lineHeight: 1.2, marginBottom: "6px" }}>
                  Autoobservación:<br />Comienza Notando
                </h2>
                <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "13px", color: "#888" }}>
                  7 módulos · 11 videos · 4 prácticas guiadas
                </p>
              </div>
            </div>

            <div style={{ borderTop: "1px solid #f0ebe5", paddingTop: "20px" }}>
              {[
                "Acceso durante 6 meses",
                "Contenido 100% grabado, a tu ritmo",
                "4 prácticas guiadas por audio",
                "14 materiales de apoyo",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "center" }}>
                  <span style={{ color: "#c6b8e8", fontWeight: 700, fontSize: "14px" }}>✦</span>
                  <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "14px", color: "#555", margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Price summary */}
          <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px 28px", boxShadow: "0 4px 24px rgba(26,26,26,0.07)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <span style={{ fontFamily: "Nunito, sans-serif", fontSize: "15px", color: "#555" }}>Subtotal</span>
              <span style={{ fontFamily: "Nunito, sans-serif", fontSize: "15px", color: "#1a1a1a" }}>$11.00 USD</span>
            </div>
            <div style={{ borderTop: "1px solid #f0ebe5", paddingTop: "12px", display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "18px", color: "#1a1a1a" }}>Total</span>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "24px", color: "#1a1a1a" }}>$11.00 USD</span>
            </div>
            <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "12px", color: "#aaa", marginTop: "8px", margin: "10px 0 0" }}>
              ≈ El cobro se realizará en el equivalente a tu moneda local según el tipo de cambio de tu banco.
            </p>
          </div>
        </div>

        {/* RIGHT: Payment form */}
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }} transition={exhale}
              style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "36px", boxShadow: "0 8px 40px rgba(26,26,26,0.09)" }}
            >
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 600, color: "#1a1a1a", marginBottom: "28px" }}>
                Completa tu compra
              </h3>

              {/* Email */}
              <label style={{ fontFamily: "Nunito, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: "8px" }}>
                E-mail
              </label>
              <input type="email" required placeholder="tu@correo.com" style={inputStyle}
                onFocus={e => (e.target.style.borderColor = "#c6b8e8")} onBlur={e => (e.target.style.borderColor = "#d6d6d4")} />

              {/* Payment method tabs */}
              <label style={{ fontFamily: "Nunito, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: "10px", marginTop: "6px" }}>
                Método de pago
              </label>
              <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                <button style={tabStyle(method === "card")} onClick={() => setMethod("card")}>
                  💳 Tarjeta de Crédito
                </button>
                <button style={tabStyle(method === "paypal")} onClick={() => setMethod("paypal")}>
                  🅿 PayPal
                </button>
              </div>

              <AnimatePresence mode="wait">
                {method === "card" ? (
                  <motion.div key="card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                    <input type="text" placeholder="Número de tarjeta" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = "#c6b8e8")} onBlur={e => (e.target.style.borderColor = "#d6d6d4")} />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                      <input type="text" placeholder="MM / AA" style={{ ...inputStyle, marginBottom: 0 }}
                        onFocus={e => (e.target.style.borderColor = "#c6b8e8")} onBlur={e => (e.target.style.borderColor = "#d6d6d4")} />
                      <input type="text" placeholder="CVC" style={{ ...inputStyle, marginBottom: 0 }}
                        onFocus={e => (e.target.style.borderColor = "#c6b8e8")} onBlur={e => (e.target.style.borderColor = "#d6d6d4")} />
                    </div>
                    <div style={{ marginTop: "14px" }} />
                    <input type="text" placeholder="Nombre en la tarjeta" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = "#c6b8e8")} onBlur={e => (e.target.style.borderColor = "#d6d6d4")} />
                  </motion.div>
                ) : (
                  <motion.div key="paypal" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                    <div style={{ backgroundColor: "#f7f0ea", borderRadius: "12px", padding: "28px", textAlign: "center", marginBottom: "14px" }}>
                      <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "15px", color: "#666", lineHeight: 1.7, margin: 0 }}>
                        Al hacer clic en &quot;Completar compra&quot; serás redirigido a PayPal para finalizar tu pago de forma segura.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Terms */}
              <div style={{ backgroundColor: "#f7f0ea", borderRadius: "12px", padding: "18px 20px", marginBottom: "20px", marginTop: "4px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <input type="checkbox" id="terms" checked={accepted} onChange={e => setAccepted(e.target.checked)}
                    style={{ marginTop: "3px", accentColor: "#1a1a1a", width: "15px", height: "15px", flexShrink: 0, cursor: "pointer" }} />
                  <label htmlFor="terms" style={{ fontFamily: "Nunito, sans-serif", fontSize: "12px", color: "#666", lineHeight: 1.6, cursor: "pointer" }}>
                    He leído y acepto los <a href="#" style={{ color: "#1a1a1a", textDecoration: "underline" }}>términos y condiciones</a>.
                    El cobro se realiza en tu moneda local. <strong>Una vez realizado el pago no hay devoluciones bajo ninguna circunstancia.</strong>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <motion.button
                whileHover={accepted ? { scale: 1.02 } : {}}
                whileTap={accepted ? { scale: 0.98 } : {}}
                disabled={!accepted}
                onClick={() => accepted && setSubmitted(true)}
                style={{
                  width: "100%",
                  backgroundColor: accepted ? "#1a1a1a" : "#ccc",
                  color: "#fff",
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  letterSpacing: "0.05em",
                  padding: "18px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: accepted ? "pointer" : "not-allowed",
                  transition: "background-color 0.2s",
                  marginBottom: "14px",
                }}
              >
                👉 Completar compra · $11.00 USD
              </motion.button>

              <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "12px", color: "#aaa", textAlign: "center", lineHeight: 1.6 }}>
                🔒 Pago seguro · Cifrado SSL<br />
                🚨 Acceso por 6 meses · No reembolsable
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={exhale}
              style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "52px 36px", boxShadow: "0 8px 40px rgba(26,26,26,0.09)", textAlign: "center" }}
            >
              <div style={{ fontSize: "52px", marginBottom: "20px" }}>✨</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", fontWeight: 600, color: "#1a1a1a", marginBottom: "16px" }}>
                ¡Bienvenida al taller!
              </h3>
              <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "16px", color: "#666", lineHeight: 1.85 }}>
                Tu acceso a <strong>Comienza Notando</strong> ha sido activado.<br />
                Recibirás un correo con los detalles de acceso.<br /><br />
                <em style={{ color: "#888" }}>La práctica te espera. Sin prisa.</em>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
