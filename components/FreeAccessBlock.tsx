import RevealOnScroll from "./RevealOnScroll";

export default function FreeAccessBlock() {
  return (
    <section className="section-padding bg-[#1a1a1a]">
      <div className="container-custom">
        <div className="max-w-[700px] mx-auto text-center">
          <RevealOnScroll variant="scaleReveal">
            {/* Badge */}
            <span
              className="inline-block mb-6 px-5 py-2 rounded-full text-[12px] uppercase tracking-[0.15em]"
              style={{ backgroundColor: "rgba(198,184,232,0.2)", color: "#c6b8e8", fontFamily: "Nunito, sans-serif" }}
            >
              Acceso libre · Sin costo
            </span>

            {/* Title */}
            <h2
              className="text-headline text-white mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Autoobservación®: Estoy Conmigo
            </h2>

            {/* Body */}
            <p
              className="text-[#d6d6d4] mb-4"
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, lineHeight: 2.0, fontSize: "17px" }}
            >
              Antes de cambiar algo afuera, puedes notar cómo estás tú.
            </p>
            <p
              className="text-[#d6d6d4] mb-4"
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, lineHeight: 2.0, fontSize: "17px" }}
            >
              He creado una experiencia breve para aprender a estar contigo sin exigencia.
              Un video corto. Una práctica guiada. Una hoja simple para registrar lo que notes.
            </p>
            <p
              className="text-[#d6d6d4] mb-10"
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, lineHeight: 2.0, fontSize: "17px", fontStyle: "italic" }}
            >
              Nada que mejorar. Nada que corregir. Solo estar contigo.
            </p>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-3 glow-pulse rounded-[8px] transition-all duration-300 hover:scale-[1.04]"
              style={{
                backgroundColor: "#f5dd7a",
                color: "#1a1a1a",
                fontFamily: "Nunito, sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "18px 40px",
              }}
            >
              👉 Acceder a la experiencia
            </a>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
