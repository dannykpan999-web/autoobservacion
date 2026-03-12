import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Programas Online", href: "/programas-online" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Recursos", href: "/recursos" },
  { label: "Acerca", href: "/acerca" },
  { label: "Login", href: "/login" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/autoobservacionoficial", icon: "IG" },
  { label: "Facebook", href: "https://facebook.com/autoobservacionoficial", icon: "FB" },
  { label: "YouTube", href: "https://youtube.com/@autoobservación", icon: "YT" },
  { label: "TikTok", href: "https://tiktok.com/@autoobservacion", icon: "TK" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a1a1a" }}>
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Col 1 — Logo + Tagline */}
          <div className="md:col-span-1">
            <Image
              src="/images/logos/logotipo-blanco-amarillo.svg"
              alt="Autoobservación"
              width={220}
              height={44}
              style={{ height: "38px", width: "auto", marginBottom: "16px" }}
            />
            <p style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", color: "#d1baaa", fontSize: "15px", lineHeight: 1.7 }}>
              El arte de notar.
            </p>
          </div>

          {/* Col 2 — Nav */}
          <div className="md:col-span-1">
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#d6d6d4", marginBottom: "16px" }}>
              Navegar
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ fontFamily: "Nunito, sans-serif", fontSize: "15px", color: "#ffffff", fontWeight: 300, transition: "color 0.2s" }}
                    className="hover:text-[#c6b8e8] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Social */}
          <div className="md:col-span-1">
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#d6d6d4", marginBottom: "16px" }}>
              Síguenos
            </p>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.icon}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "Nunito, sans-serif", fontSize: "15px", color: "#ffffff", fontWeight: 300 }}
                    className="hover:text-[#c6b8e8] transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Disclaimer */}
          <div className="md:col-span-1">
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "13px", color: "#78716c", lineHeight: 1.7, fontWeight: 300 }}>
              Autoobservación® es un espacio de acompañamiento personal y comunitario, de naturaleza práctica y reflexiva.
              No sustituye la atención profesional de salud mental o física.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "13px", color: "#78716c", fontWeight: 300 }}>
            © 2025 Autoobservación®. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" style={{ fontFamily: "Nunito, sans-serif", fontSize: "13px", color: "#78716c" }} className="hover:text-[#c6b8e8] transition-colors">
              Términos
            </a>
            <a href="#" style={{ fontFamily: "Nunito, sans-serif", fontSize: "13px", color: "#78716c" }} className="hover:text-[#c6b8e8] transition-colors">
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
