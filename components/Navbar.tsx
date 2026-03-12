"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Programas Online", href: "/programas-online" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Recursos", href: "/recursos" },
  { label: "Acerca", href: "/acerca" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Determine if we're on a dark/yellow hero page — use white logo
  const isHeroPage = pathname === "/";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 1px 20px rgba(26,26,26,0.08)" : "none",
        }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={
                  scrolled || !isHeroPage
                    ? "/images/logos/logotipo-negro.svg"
                    : "/images/logos/logotipo-blanco-amarillo.svg"
                }
                alt="Autoobservación"
                width={220}
                height={44}
                priority
                style={{ height: "40px", width: "auto" }}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${
                    scrolled || !isHeroPage ? "text-dark" : "text-white"
                  } ${pathname === link.href ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/login"
                className="ml-4 px-5 py-2 rounded-[8px] transition-all duration-300"
                style={{
                  backgroundColor: scrolled || !isHeroPage ? "#1a1a1a" : "rgba(255,255,255,0.15)",
                  color: "#ffffff",
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  border: scrolled || !isHeroPage ? "none" : "1px solid rgba(255,255,255,0.5)",
                }}
              >
                Login
              </Link>
            </nav>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-6 h-[2px]"
                style={{ backgroundColor: scrolled || !isHeroPage ? "#1a1a1a" : "#ffffff" }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-6 h-[2px]"
                style={{ backgroundColor: scrolled || !isHeroPage ? "#1a1a1a" : "#ffffff" }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-6 h-[2px]"
                style={{ backgroundColor: scrolled || !isHeroPage ? "#1a1a1a" : "#ffffff" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ backgroundColor: "rgba(26,26,26,0.97)" }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Link
                    href={link.href}
                    className="text-white text-[28px]"
                    style={{ fontFamily: "Playfair Display, serif", fontWeight: 400 }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07, duration: 0.5 }}
              >
                <Link
                  href="/login"
                  className="mt-4 px-8 py-3 rounded-[8px]"
                  style={{ backgroundColor: "#f5dd7a", color: "#1a1a1a", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  Login
                </Link>
              </motion.div>
              {/* Social icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-6 mt-8"
              >
                {[
                  { label: "IG", href: "https://instagram.com/autoobservacionoficial" },
                  { label: "FB", href: "https://facebook.com/autoobservacionoficial" },
                  { label: "YT", href: "https://youtube.com/@autoobservación" },
                  { label: "TK", href: "https://tiktok.com/@autoobservacion" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d6d6d4] text-[13px] uppercase tracking-widest hover:text-[#c6b8e8] transition-colors"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    {s.label}
                  </a>
                ))}
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
