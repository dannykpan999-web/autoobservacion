"use client";

interface Props {
  items: string[];
  bgColor?: string;
  textColor?: string;
  dotColor?: string;
  height?: string;
  fontSize?: string;
}

export default function MarqueeStrip({
  items,
  bgColor = "#1a1a1a",
  textColor = "#ffffff",
  dotColor = "#f5dd7a",
  height = "72px",
  fontSize = "13px",
}: Props) {
  const doubled = [...items, ...items];

  return (
    <div
      className="w-full overflow-hidden flex items-center"
      style={{ backgroundColor: bgColor, height }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6"
            style={{ color: textColor, fontSize, letterSpacing: "0.18em", fontFamily: "Nunito, sans-serif", fontWeight: 600, textTransform: "uppercase" }}
          >
            {item}
            <span style={{ color: dotColor, fontSize: "18px", lineHeight: 1 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
