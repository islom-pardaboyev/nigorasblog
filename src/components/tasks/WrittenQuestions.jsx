import { useState } from "react";

const ENVELOPE_COLORS = [
  { bg: "#e8f5e9", border: "#2c5f2e", dark: "#1e4620" },
  { bg: "#fff8e1", border: "#e8a020", dark: "#c8860a" },
  { bg: "#e3f2fd", border: "#1565c0", dark: "#0d47a1" },
];

export default function WrittenQuestions({ questions }) {
  const [remaining, setRemaining] = useState([...questions]);
  const [opened, setOpened] = useState(null);
  const [animating, setAnimating] = useState(null);
  const [done, setDone] = useState(false);

  function pick(colorIndex) {
    if (!remaining.length || animating !== null) return;
    const picked = remaining[Math.floor(Math.random() * remaining.length)];
    setAnimating(colorIndex);
    setTimeout(() => {
      setOpened({ q: picked, colorIndex });
      setRemaining(prev => prev.filter(q => q !== picked));
      setAnimating(null);
      if (remaining.length === 1) setDone(true);
    }, 600);
  }

  function reset() {
    setRemaining([...questions]);
    setOpened(null);
    setDone(false);
  }

  const availableColors = ENVELOPE_COLORS.slice(0, Math.min(3, remaining.length + (opened ? 1 : 0)));

  return (
    <div className="flex flex-col items-center gap-8 py-6">

      {!opened && (
        <p className="text-sm text-gray-400 text-center">
          Guruhingiz uchun zarf tanlang
        </p>
      )}

      {/* Zarflar */}
      {!opened && (
        <div className="flex gap-6 flex-wrap justify-center">
          {remaining.map((_, i) => {
            const color = ENVELOPE_COLORS[i % ENVELOPE_COLORS.length];
            const isAnimating = animating === i;
            return (
              <button
                key={i} className="hover:!scale-110 transition-all"
                onClick={() => pick(i)}
                disabled={animating !== null}
                style={{
                  width: 120,
                  height: 90,
                  background: color.bg,
                  border: `2px solid ${color.border}`,
                  borderRadius: 12,
                  cursor: "pointer",
                  position: "relative",
                  transition: "transform 0.2s",
                  transform: isAnimating ? "scale(1.12)" : "scale(1)",
                  overflow: "hidden",
                  padding: 0,
                }}
              >
                {/* Zarf tepasi uchburchak */}
                <svg
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "50%" }}
                  viewBox="0 0 120 45" preserveAspectRatio="none"
                >
                  <polygon
                    points="0,0 120,0 60,45"
                    fill={isAnimating ? color.border : color.border}
                    opacity={isAnimating ? 1 : 0.5}
                    style={{ transition: "opacity 0.3s" }}
                  />
                </svg>
                {/* Zarf pastki qism chiziq */}
                <svg
                  style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "55%" }}
                  viewBox="0 0 120 50" preserveAspectRatio="none"
                >
                  <polygon points="0,50 60,0 120,50" fill={color.border} opacity="0.15" />
                </svg>
                <span style={{
                  position: "absolute",
                  bottom: 10,
                  width: "100%",
                  textAlign: "center",
                  fontSize: 13,
                  fontWeight: 500,
                  color: color.dark,
                }}>
                  {i + 1}-zarf
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Ochilgan savol */}
      {opened && (
        <div
          style={{
            background: ENVELOPE_COLORS[opened.colorIndex % 3].bg,
            border: `2px solid ${ENVELOPE_COLORS[opened.colorIndex % 3].border}`,
            borderRadius: 16,
            padding: "2rem 1.5rem",
            maxWidth: 480,
            width: "100%",
            textAlign: "center",
          }}
        >
          <div style={{
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: ENVELOPE_COLORS[opened.colorIndex % 3].dark,
            marginBottom: 12,
            fontWeight: 500,
          }}>
            Yozma topshiriq
          </div>
          <p style={{
            fontSize: 17,
            lineHeight: 1.7,
            fontWeight: 500,
            color: "#1a1a1a",
            marginBottom: "1.5rem",
          }}>
            {opened.q}
          </p>
          {!done && (
            <button
              onClick={() => setOpened(null)}
              style={{
                padding: "8px 24px",
                borderRadius: 999,
                background: ENVELOPE_COLORS[opened.colorIndex % 3].border,
                color: "#fff",
                border: "none",
                fontSize: 14,
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              Yopish
            </button>
          )}
          {done && (
            <div>
              <p style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>
                Barcha savollar ishlatildi
              </p>
              <button
                onClick={reset}
                style={{
                  padding: "8px 24px",
                  borderRadius: 999,
                  background: "#2c5f2e",
                  color: "#fff",
                  border: "none",
                  fontSize: 14,
                  cursor: "pointer",
                }}
              >
                Qayta boshlash
              </button>
            </div>
          )}
        </div>
      )}

      {remaining.length > 0 && !opened && (
        <p className="text-xs text-gray-400">
          Qolgan: {remaining.length} ta savol
        </p>
      )}
    </div>
  );
}