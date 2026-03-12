import Image from "next/image";

export default function LoginPage() {
  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#f7f0ea" }}
    >
      <div className="text-center px-6 max-w-[480px] mx-auto">
        {/* Isotipo mark centered */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/logos/isotipo-negro.svg"
            alt="Autoobservación"
            width={64}
            height={64}
            style={{ height: "64px", width: "64px" }}
            priority
          />
        </div>
        {/* Full wordmark below */}
        <div className="mb-10 flex justify-center">
          <Image
            src="/images/logos/logotipo-negro.svg"
            alt="Autoobservación"
            width={220}
            height={44}
            style={{ height: "38px", width: "auto" }}
          />
        </div>

        {/* Divider dot */}
        <div className="w-2 h-2 rounded-full mx-auto mb-10" style={{ backgroundColor: "#c6b8e8" }} />

        {/* Title */}
        <h1
          className="text-headline mb-4"
          style={{ fontFamily: "Playfair Display, serif", color: "#1a1a1a" }}
        >
          Tu espacio de práctica<br />te espera
        </h1>

        {/* Subtitle */}
        <p
          className="mb-12"
          style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, color: "#78716c", fontSize: "17px", lineHeight: 1.8 }}
        >
          Accede a tus cursos y recursos en Kajabi.
        </p>

        {/* CTA */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#1a1a1a",
            color: "#ffffff",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "15px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "18px 48px",
            borderRadius: "8px",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            transition: "all 0.3s",
          }}
          className="hover:scale-[1.03] hover:shadow-lg"
        >
          Acceder a Kajabi →
        </a>

        {/* Footer note */}
        <p
          className="mt-10"
          style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, color: "#a09088", fontSize: "13px", lineHeight: 1.7 }}
        >
          ¿Aún no tienes acceso?{" "}
          <a href="/programas-online" style={{ color: "#c6b8e8", textDecoration: "underline" }}>
            Conoce los programas
          </a>
        </p>
      </div>
    </section>
  );
}
