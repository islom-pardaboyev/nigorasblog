import { useState, useEffect, useRef } from "react";

const GREENS = [
  "#1e4620",
  "#2c5f2e",
  "#3d7340",
  "#4a8c4d",
  "#5a9e5d",
  "#27500a",
  "#3b6d11",
  "#639922",
];

function drawWheel(ctx, angle, items) {
  const cx = 160,
    cy = 160,
    r = 148;
  ctx.clearRect(0, 0, 320, 320);
  if (!items.length) {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = "#eee";
    ctx.fill();
    ctx.fillStyle = "#999";
    ctx.font = "15px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Tamom!", cx, cy + 5);
    return;
  }
  const slice = (Math.PI * 2) / items.length;
  items.forEach((item, i) => {
    const s = angle + i * slice,
      e = s + slice;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, s, e);
    ctx.closePath();
    ctx.fillStyle = GREENS[i % GREENS.length];
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(s + slice / 2);
    ctx.textAlign = "center";
    ctx.fillStyle = "#fff";
    ctx.font = "bold 15px sans-serif";
    ctx.fillText(item.n, r - 22, 5);
    ctx.restore();
  });
  ctx.beginPath();
  ctx.arc(cx, cy, 20, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.strokeStyle = "#e5e7eb";
  ctx.lineWidth = 1;
  ctx.stroke();
}

export default function OralQuestions({ questions }) {
  const canvasRef = useRef(null);
  const angleRef = useRef(0);
  const [remaining, setRemaining] = useState(
    questions.map((q, i) => ({ n: i + 1, q })),
  );
  const [spinning, setSpinning] = useState(false);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) drawWheel(ctx, angleRef.current, remaining);
  }, [remaining]);

  function spin() {
    if (spinning || !remaining.length) return;
    setSpinning(true);

    const n = remaining.length;
    const slice = (Math.PI * 2) / n;
    const pi = Math.floor(Math.random() * n);
    const picked = remaining[pi];

    const sliceCenter = pi * slice + slice / 2;
    const ROTATIONS = 8;
    const target = ROTATIONS * Math.PI * 2 + (-Math.PI / 2 - sliceCenter);

    const dur = 3000;
    const total = target;
    const st = performance.now();
    const snap = [...remaining];
    const ctx = canvasRef.current.getContext("2d");

    angleRef.current = 0;

    function step(now) {
      const t = Math.min((now - st) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 4);
      angleRef.current = total * ease;
      drawWheel(ctx, angleRef.current, snap);
      if (t < 1) {
        requestAnimationFrame(step);
        return;
      }
      angleRef.current = 0;
      setSpinning(false);
      setRemaining((prev) => prev.filter((q) => q.n !== picked.n));
      setModal(picked);
    }
    requestAnimationFrame(step);
  }

  return (
    <div className="flex flex-col items-center gap-6 py-6">
      <div className="relative" style={{ width: 320, height: 320 }}>
        <canvas ref={canvasRef} width={320} height={320} />
        <svg
          style={{
            position: "absolute",
            top: -14,
            left: "50%",
            transform: "translateX(-50%)",
          }}
          width="28"
          height="32"
          viewBox="0 0 28 32"
        >
          <polygon
            points="14,32 1,4 14,12 27,4"
            fill="#2c5f2e"
            stroke="#fff"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <button
        onClick={spin}
        disabled={spinning || !remaining.length}
        className="px-9 py-2.5 rounded-full text-white font-medium disabled:opacity-40 transition"
        style={{ background: "#2c5f2e" }}
      >
        Aylantirish
      </button>

      <p className="text-sm text-gray-400 text-center">
        {remaining.length > 0
          ? `Qolgan savollar: ${remaining.map((q) => q.n).join(", ")}`
          : "Barcha savollar berildi!"}
      </p>

      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white border border-gray-100 rounded-3xl p-8 max-w-lg w-full text-center shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
              {modal.n}-savol
            </p>
            <p className="text-lg leading-relaxed font-medium text-gray-800 mb-6">
              {modal.q}
            </p>
            <button
              onClick={() => setModal(null)}
              className="px-7 py-2 rounded-full text-white text-sm font-medium"
              style={{ background: "#2c5f2e" }}
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
