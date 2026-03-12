import Image from "next/image";
import Link from "next/link";
import MarqueeStrip from "@/components/MarqueeStrip";
import RevealOnScroll from "@/components/RevealOnScroll";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";
import WaveDivider from "@/components/WaveDivider";

const EthicsNote = () => (
  <section className="section-padding" style={{ backgroundColor: "#f5dd7a" }}>
    <div className="container-custom">
      <div className="max-w-[700px] mx-auto text-center">
        <RevealOnScroll variant="fadeUp">
          <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#78716c", marginBottom: "16px" }}>
            Nota Ética
          </p>
          <p style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", fontSize: "1.1rem", color: "#1a1a1a", lineHeight: 1.8 }}>
            Autoobservación® es un espacio de acompañamiento personal y comunitario, de naturaleza práctica y reflexiva. No sustituye la atención profesional de salud mental o física, ni incluye diagnósticos ni tratamientos médicos o psicológicos.
          </p>
        </RevealOnScroll>
      </div>
    </div>
  </section>
);

export default function ProgramasOnlinePage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-16" style={{ backgroundColor: "#f7f0ea" }}>
        <div className="container-custom text-center">
          <RevealOnScroll variant="fadeUp">
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "16px" }}>
              Caminos de práctica
            </p>
            <h1 className="text-display mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              Programas Online
            </h1>
            <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, color: "#78716c", fontSize: "18px", maxWidth: "560px", margin: "0 auto" }}>
              Aquí encontrarás algunos de los caminos recorridos en mi formación y lo que ofrezco como acompañamiento.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* S1 — Yellow Marquee Strip */}
      <MarqueeStrip
        items={["Acciones internas simples", "Transformación real"]}
        bgColor="#f5dd7a"
        textColor="#1a1a1a"
        dotColor="#c6b8e8"
        height="60px"
      />

      {/* S2 — Featured Course */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <RevealOnScroll variant="fadeUp" className="mb-14 text-center">
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "12px" }}>
              Programa vigente
            </p>
            <h2 className="text-headline" style={{ fontFamily: "Playfair Display, serif" }}>
              Curso Evergreen
            </h2>
          </RevealOnScroll>

          {/* Hero Course Card */}
          <RevealOnScroll variant="scaleReveal">
            <div className="relative rounded-[20px] overflow-hidden" style={{ minHeight: "480px" }}>
              <Image
                src="/images/photos/journal-writing.jpg"
                alt="Programa de Autoobservación"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(26,26,26,0.82) 0%, rgba(26,26,26,0.5) 55%, rgba(26,26,26,0.1) 100%)" }} />
              <div className="absolute inset-0 flex items-center p-10 md:p-16">
                <div className="max-w-[520px]">
                  <span className="inline-block mb-5 px-5 py-2 rounded-full" style={{ backgroundColor: "rgba(198,184,232,0.25)", color: "#c6b8e8", fontFamily: "Nunito, sans-serif", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>
                    Evergreen · Siempre disponible
                  </span>
                  <h3 className="text-headline text-white mb-5" style={{ fontFamily: "Playfair Display, serif" }}>
                    Acompañamiento en<br />Autoobservación®
                  </h3>
                  <p className="text-white mb-8" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, fontSize: "17px", lineHeight: 1.8, opacity: 0.9 }}>
                    Un proceso para aprender a habitar tu vida con presencia y claridad. Sin exigencia, sin corrección — solo estar contigo y notar.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#"
                      style={{ backgroundColor: "#f5dd7a", color: "#1a1a1a", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 32px", borderRadius: "8px", display: "inline-flex", alignItems: "center", transition: "all 0.3s" }}
                      className="hover:scale-[1.03]"
                    >
                      Acceder al curso →
                    </a>
                    <a
                      href="#"
                      style={{ border: "1.5px solid rgba(255,255,255,0.5)", color: "#ffffff", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 32px", borderRadius: "8px", display: "inline-flex", alignItems: "center", transition: "all 0.3s" }}
                      className="hover:bg-white hover:text-dark"
                    >
                      Conoce más
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* S3 — Coming Soon Grid */}
      <section className="section-padding" style={{ backgroundColor: "#f7f0ea" }}>
        <div className="container-custom">
          <RevealOnScroll variant="fadeUp" className="mb-14 text-center">
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "12px" }}>
              Próximos caminos
            </p>
            <h2 className="text-headline" style={{ fontFamily: "Playfair Display, serif" }}>
              Más por venir
            </h2>
          </RevealOnScroll>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <StaggerItem key={i}>
                <div className="rounded-card overflow-hidden" style={{ backgroundColor: "#fff", boxShadow: "0 4px 24px rgba(26,26,26,0.06)", opacity: 0.7 }}>
                  <div style={{ height: "160px", backgroundColor: "#e8e0d8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#a09088" }}>Próximamente</p>
                  </div>
                  <div className="p-7">
                    <div style={{ height: "12px", borderRadius: "6px", backgroundColor: "#e8e0d8", marginBottom: "12px", width: "60%" }} />
                    <div style={{ height: "10px", borderRadius: "6px", backgroundColor: "#f0ece8", marginBottom: "8px", width: "80%" }} />
                    <div style={{ height: "10px", borderRadius: "6px", backgroundColor: "#f0ece8", width: "50%" }} />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* S4 — Facilitadora */}
      <section className="section-padding" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <RevealOnScroll variant="fadeRight">
              <div className="relative rounded-card overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <Image src="/images/photos/claudia-portrait.jpg" alt="Claudia Elena Padilla — Facilitadora" fill className="object-cover" />
              </div>
            </RevealOnScroll>
            <RevealOnScroll variant="fadeLeft">
              <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "16px" }}>
                La facilitadora
              </p>
              <h2 className="text-headline text-white mb-7" style={{ fontFamily: "Playfair Display, serif" }}>
                Claudia Elena Padilla
              </h2>
              <div style={{ borderLeft: "3px solid #c6b8e8", paddingLeft: "22px", marginBottom: "32px" }}>
                <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, color: "#d6d6d4", lineHeight: 1.9, fontSize: "17px" }}>
                  Más de 20 años de práctica personal e integración de diversas disciplinas de consciencia corporal, escritura reflexiva y acompañamiento. Mi trabajo parte de la experiencia vivida, no de la teoría prescrita.
                </p>
              </div>
              <Link
                href="/sobre-mi"
                style={{ border: "1.5px solid rgba(255,255,255,0.4)", color: "#ffffff", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 32px", borderRadius: "8px", display: "inline-flex", alignItems: "center", transition: "all 0.3s" }}
                className="hover:bg-white hover:text-dark"
              >
                Conocer más sobre mí →
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#f5dd7a" />
      <EthicsNote />
    </>
  );
}
