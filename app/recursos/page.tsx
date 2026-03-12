import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import FreeAccessBlock from "@/components/FreeAccessBlock";
import WaveDivider from "@/components/WaveDivider";

export default function RecursosPage() {
  return (
    <>
      {/* Page Header — parallax journal bg */}
      <section className="relative overflow-hidden" style={{ minHeight: "420px", display: "flex", alignItems: "flex-end" }}>
        <Image src="/images/bg/notebook-open.jpg" alt="" fill style={{ objectFit: "cover", objectPosition: "center 30%" }} priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,26,26,0.80) 0%, rgba(26,26,26,0.25) 60%, rgba(26,26,26,0.1) 100%)" }} />
        <div className="relative z-10 w-full pb-16 pt-36 px-6">
          <div className="container-custom text-center">
            <RevealOnScroll variant="fadeUp">
              <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c6b8e8", marginBottom: "16px" }}>
                Para tu práctica
              </p>
              <h1 className="text-display mb-6" style={{ fontFamily: "Playfair Display, serif", color: "#ffffff" }}>
                Recursos
              </h1>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* S1 — El Libro */}
      <WaveDivider fillColor="#ffffff" />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Book image */}
            <RevealOnScroll variant="fadeRight">
              <div className="relative rounded-card overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <Image
                  src="/images/photos/claudia-laptop.jpg"
                  alt="Notar: Ensayando la Autoobservación — Claudia Elena Padilla"
                  fill
                  className="object-cover"
                />
                {/* Book badge */}
                <div className="absolute top-5 left-5 px-4 py-2 rounded-full" style={{ backgroundColor: "#f5dd7a", fontFamily: "Nunito, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a1a1a" }}>
                  Disponible en Amazon
                </div>
              </div>
            </RevealOnScroll>

            {/* Text */}
            <RevealOnScroll variant="fadeLeft">
              <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "14px" }}>
                El libro
              </p>
              <h2 className="text-headline mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
                Notar: Ensayando la Autoobservación
              </h2>
              <p style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", color: "#c6b8e8", fontSize: "1.1rem", marginBottom: "24px" }}>
                Más que un libro, es una práctica.
              </p>
              <div style={{ borderLeft: "3px solid #c6b8e8", paddingLeft: "22px", marginBottom: "32px" }}>
                <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, color: "#44403c", lineHeight: 1.9, fontSize: "17px" }}>
                  Una combinación de ensayos literarios y ejercicios prácticos para la autoobservación cotidiana. Esta obra te acompaña a volver a ti, sostener tu atención y habitar la vida con autenticidad y claridad.
                </p>
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ border: "1.5px solid #1a1a1a", color: "#1a1a1a", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 32px", borderRadius: "8px", display: "inline-flex", alignItems: "center", gap: "8px", transition: "all 0.3s" }}
                className="hover:bg-dark hover:text-white"
              >
                Comienza a ensayar el arte de notar →
              </a>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* S2 — Podcast */}
      <WaveDivider fillColor="#f7f0ea" />
      <section className="section-padding" style={{ backgroundColor: "#f7f0ea" }}>
        <div className="container-custom">
          <RevealOnScroll variant="fadeUp" className="text-center mb-16">
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "16px" }}>
              El podcast
            </p>
            <h2 className="text-headline mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
              Hazte presente cada semana
            </h2>
            <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, color: "#78716c", fontSize: "17px", maxWidth: "480px", margin: "0 auto 32px" }}>
              Nuevos episodios cada semana para acompañarte en la práctica de notar.
            </p>
            {/* Platform buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-pill transition-all duration-300 hover:scale-[1.03]"
                style={{ backgroundColor: "#1db954", color: "#ffffff", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "0.06em", padding: "14px 28px" }}
              >
                🎵 Spotify
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-pill transition-all duration-300 hover:scale-[1.03]"
                style={{ backgroundColor: "#ff0000", color: "#ffffff", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "0.06em", padding: "14px 28px" }}
              >
                ▶ YouTube
              </a>
            </div>
          </RevealOnScroll>

          {/* Latest Episode Card */}
          <RevealOnScroll variant="scaleReveal">
            <div className="max-w-[780px] mx-auto rounded-card overflow-hidden" style={{ backgroundColor: "#ffffff", boxShadow: "0 4px 24px rgba(26,26,26,0.08)" }}>
              <div className="grid grid-cols-1 md:grid-cols-5">
                {/* Thumbnail */}
                <div className="md:col-span-2 relative" style={{ minHeight: "220px" }}>
                  <Image src="/images/photos/candles-lavender.jpg" alt="Último episodio del podcast" fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(26,26,26,0.7)", backdropFilter: "blur(4px)" }}>
                      <span className="text-white text-xl ml-1">▶</span>
                    </div>
                  </div>
                </div>
                {/* Info */}
                <div className="md:col-span-3 p-8 flex flex-col justify-center">
                  <span style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c6b8e8", marginBottom: "8px", display: "block" }}>
                    Último episodio
                  </span>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.25rem", color: "#1a1a1a", marginBottom: "10px", lineHeight: 1.35 }}>
                    El arte de estar contigo sin hacer nada
                  </h3>
                  <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, color: "#78716c", fontSize: "15px", lineHeight: 1.7, marginBottom: "20px" }}>
                    En este episodio exploramos qué significa realmente estar presente sin agenda, sin objetivo — solo notar.
                  </p>
                  <a
                    href="#"
                    style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#1a1a1a", display: "inline-flex", alignItems: "center", gap: "6px" }}
                    className="hover:text-[#c6b8e8] transition-colors"
                  >
                    Escuchar episodio →
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* S3 — Free Access (reusable) */}
      <FreeAccessBlock />
    </>
  );
}
