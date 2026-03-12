import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";
import WaveDivider from "@/components/WaveDivider";

const changes = [
  { icon: "🌿", title: "Notas más, reaccionas menos", desc: "La práctica de observar crea un espacio entre el estímulo y la respuesta — y en ese espacio, vives con mayor libertad." },
  { icon: "🕯️", title: "Tu relación contigo se vuelve más honesta", desc: "Dejas de actuar desde el piloto automático y comienzas a elegir desde un lugar más consciente." },
  { icon: "📝", title: "Escribes con más claridad lo que sientes", desc: "La escritura reflexiva se convierte en una herramienta de autoconocimiento accesible en cualquier momento." },
  { icon: "🌊", title: "Las emociones dejan de desbordarte", desc: "No las suprimes — las notas. Y al notarlas, pierden la urgencia que las hace insoportables." },
  { icon: "✨", title: "La vida cotidiana se vuelve práctica", desc: "No necesitas un retiro para practicar. El supermercado, una conversación difícil, un momento de quietud — todo es práctica." },
  { icon: "🏠", title: "Te habitas a ti mismo/a", desc: "La autoobservación es, en esencia, aprender a estar en casa — sin importar lo que ocurra afuera." },
];

export default function AcercaPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-16 relative overflow-hidden" style={{ backgroundColor: "#f5dd7a" }}>
        <div className="container-custom text-center">
          <RevealOnScroll variant="fadeUp">
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#78716c", marginBottom: "16px" }}>
              El proyecto
            </p>
            <h1 className="text-display mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              Acerca de<br />Autoobservación®
            </h1>
            <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, color: "#44403c", fontSize: "18px", maxWidth: "560px", margin: "0 auto" }}>
              Un espacio de práctica personal, no una metodología ni un sistema. Aquí no hay pasos a seguir — hay invitaciones a notar.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* S1 — What is Autoobservación */}
      <WaveDivider fillColor="#ffffff" />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <RevealOnScroll variant="fadeRight">
              <div className="relative rounded-card overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <Image src="/images/photos/journal-writing.jpg" alt="La práctica de Autoobservación" fill className="object-cover" />
              </div>
            </RevealOnScroll>
            <RevealOnScroll variant="fadeLeft">
              <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "14px" }}>
                Qué es esto
              </p>
              <h2 className="text-headline mb-7" style={{ fontFamily: "Playfair Display, serif" }}>
                Una práctica cotidiana,<br />no una técnica
              </h2>
              <div style={{ borderLeft: "3px solid #c6b8e8", paddingLeft: "22px", marginBottom: "24px" }}>
                <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, color: "#44403c", lineHeight: 1.9, fontSize: "17px" }}>
                  Autoobservación® como marca y proyecto nació de una práctica personal — y sigue siendo eso: una invitación a mirar hacia adentro sin agenda, sin corrección, sin expectativa de resultado.
                </p>
              </div>
              <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, color: "#44403c", lineHeight: 1.9, fontSize: "17px", marginBottom: "24px" }}>
                No es psicología, no es coaching directivo, no es meditación formal. Es simplemente la práctica de notar — lo que sientes, lo que piensas, lo que el cuerpo dice — sin apresurarte a cambiarlo.
              </p>
              <p style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", color: "#c6b8e8", fontSize: "1.1rem" }}>
                &ldquo;Comienza notando… eso basta para empezar.&rdquo;
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* S2 — Lo que cambias cuando practicas */}
      <WaveDivider fillColor="#f7f0ea" />
      <section className="section-padding" style={{ backgroundColor: "#f7f0ea" }}>
        <div className="container-custom">
          <RevealOnScroll variant="fadeUp" className="text-center mb-16">
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1baaa", marginBottom: "12px" }}>
              Lo que cambia
            </p>
            <h2 className="text-headline" style={{ fontFamily: "Playfair Display, serif" }}>
              Lo que cambias cuando practicas
            </h2>
          </RevealOnScroll>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {changes.map((item) => (
              <StaggerItem key={item.title}>
                <div className="p-7 rounded-card h-full transition-all duration-300 hover:-translate-y-2" style={{ backgroundColor: "#ffffff", boxShadow: "0 4px 24px rgba(26,26,26,0.06)" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 text-xl" style={{ backgroundColor: "rgba(198,184,232,0.2)" }}>
                    {item.icon}
                  </div>
                  <h3 className="mb-3" style={{ fontFamily: "Playfair Display, serif", fontSize: "1.15rem", color: "#1a1a1a", lineHeight: 1.35 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, color: "#78716c", fontSize: "15px", lineHeight: 1.75 }}>
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* S3 — Ethics Note */}
      <WaveDivider fillColor="#f5dd7a" />
      <section className="section-padding" style={{ backgroundColor: "#f5dd7a" }}>
        <div className="container-custom">
          <div className="max-w-[700px] mx-auto text-center">
            <RevealOnScroll variant="fadeUp">
              <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#78716c", marginBottom: "20px" }}>
                Nota Ética
              </p>
              <p style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "#1a1a1a", lineHeight: 1.85 }}>
                Autoobservación® es un espacio de acompañamiento personal y comunitario, de naturaleza práctica y reflexiva. No sustituye la atención profesional de salud mental o física, ni incluye diagnósticos médicos o psicológicos. Si vives una situación de crisis, te invitamos a buscar ayuda profesional especializada.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
