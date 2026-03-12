"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function FreeAccessBlock() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ minHeight: "480px", display: "flex", alignItems: "center" }}>
      {/* Parallax bg */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[12%] h-[124%]">
        <Image src="/images/bg/candles-warm.jpg" alt="" fill style={{ objectFit: "cover", objectPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,26,26,0.92) 0%, rgba(26,26,26,0.82) 100%)" }} />
      </motion.div>

      {/* Subtle glow circle behind CTA */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          backgroundColor: "#f5dd7a",
          filter: "blur(80px)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 w-full py-24 px-6">
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <RevealOnScroll variant="scaleReveal">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                display: "inline-block",
                backgroundColor: "#c6b8e8",
                color: "#1a1a1a",
                fontSize: "11px",
                fontFamily: "Nunito, sans-serif",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "6px 20px",
                borderRadius: "50px",
                marginBottom: "28px",
              }}
            >
              Acceso libre · Sin costo
            </motion.span>

            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}>
              Autoobservación®:<br />
              <em style={{ fontWeight: 400, color: "#f5dd7a" }}>Estoy Conmigo</em>
            </h2>

            <p style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "18px",
              color: "rgba(255,255,255,0.78)",
              lineHeight: 2.0,
              marginBottom: "40px",
            }}>
              Antes de cambiar algo afuera, puedes notar cómo estás tú.<br />
              Un video corto. Una práctica guiada.<br />
              Una hoja simple para registrar lo que notes.<br />
              <span style={{ color: "#fefcf9" }}>Nada que mejorar. Nada que corregir. Solo estar contigo.</span>
            </p>

            <Link href="/estoy-conmigo">
              <motion.span
                whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(245,221,122,0.35)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-block",
                  backgroundColor: "#f5dd7a",
                  color: "#1a1a1a",
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  letterSpacing: "0.06em",
                  padding: "18px 48px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
              >
                👉 Acceder a la experiencia
              </motion.span>
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
