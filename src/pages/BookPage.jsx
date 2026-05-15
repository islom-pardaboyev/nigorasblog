import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { books } from "../data/books.js";
import TaskRenderer from "../components/TaskRenderer.jsx";

export default function BookPage() {
  const { id } = useParams();
  const book = books.find((b) => String(b.id) === String(id));
  const [scores, setScores] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

  if (!book) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h2 className="font-serif text-4xl">Asar topilmadi</h2>
        <Link to="/" className="text-primary mt-4 inline-block">
          ← Asosiyga qaytish
        </Link>
      </div>
    );
  }

  const checkable = useMemo(
    () => book.tasks.filter((t) => t.type !== "oral_questions"),
    [book.tasks],
  );
  const allChecked = checkable.every((t) => scores[t.id] !== undefined);
  const totalCorrect = Object.values(scores).reduce((a, s) => a + s.correct, 0);
  const totalPossible = Object.values(scores).reduce((a, s) => a + s.total, 0);
  const pct = totalPossible
    ? Math.round((totalCorrect / totalPossible) * 100)
    : 0;
  const tone =
    pct >= 70
      ? "bg-success text-white"
      : pct >= 50
        ? "bg-accent text-ink"
        : "bg-danger text-white";

  return (
    <section>
      {/* HEADER - BACKGROUND IMAGE BILAN */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url('${book.image || "/images/default-bg.jpg"}')`,
          backgroundAttachment: "fixed",
          objectFit: "cover",
        }}
      >
        {/* Overlay - matni osonroq o'qish uchun */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

        {/* Content - Asar ma'lumotlari */}
        <article className="z-10 w-full text-white">
          <div className="max-w-3xl mx-auto px-6 py-12">

          <Link to="/" className="text-sm text-white/80 hover:text-white inline-block mb-8">
            ← Barcha asarlar
          </Link>

          <header className="mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-100 bg-amber-900/40 px-3 py-1 rounded-full mb-4">
              {book.genre}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-3">
              {book.novel_name}
            </h1>
            <p className="text-xl italic text-amber-50 mb-8">{book.author}</p>

            {/* Asar haqida qisqacha ma'lumot */}
            {book.description && (
              <p className="text-base leading-relaxed max-w-2xl text-white/90">
                {book.description}
              </p>
            )}
          </header>
          </div>
        </article>
      </div>

      {/* MAIN CONTENT - OQ FONDA */}
      <article className="bg-white relative z-20">
        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* ASAR MATNI */}
          <div className="article-prose mb-12">
            {book.genre === "She'r" ? (
              <div className="space-y-6">
                {book.text
                  .trim()
                  .split(/\n\s*\n/)
                  .map((band, i) => (
                    <div key={i} className="space-y-1">
                      {band.split("\n").map((misra, j) =>
                        misra.trim() === "" ? null : (
                          <span
                            key={j}
                            className="text-lg italic mb-0! block text-gray-700 leading-relaxed"
                          >
                            {misra.trim()}
                          </span>
                        ),
                      )}
                    </div>
                  ))}
              </div>
            ) : (
              <div className="article-prose space-y-6">
                {book.text.split("\n").map((p, i) => (
                  <p key={i} className="text-gray-800 leading-relaxed text-lg">
                    {p}
                  </p>
                ))}
              </div>
            )}
          </div>

          <hr className="my-12 border-gray-200" />

          {/* TOPSHIRIQLAR */}
          <div className="mb-10">
            <p className="text-accent font-semibold uppercase tracking-widest text-xs">
              Topshiriqlar
            </p>
            <h2 className="font-serif text-3xl mt-2">Bilimingizni sinab ko'ring</h2>
          </div>

          <div className="space-y-8">
            {book.tasks.map((task) => (
              <TaskRenderer
                key={task.id}
                task={task}
                onScore={(id, c, t) =>
                  setScores((p) => ({ ...p, [id]: { correct: c, total: t } }))
                }
              />
            ))}
          </div>

          {allChecked && (
            <div
              className={`mt-10 rounded-2xl p-8 text-center shadow-card ${tone}`}
            >
              <p className="uppercase tracking-widest text-xs font-semibold opacity-90">
                Yakuniy natija
              </p>
              <p className="font-serif text-5xl mt-3">
                {totalCorrect}/{totalPossible}
              </p>
              <p className="mt-2 text-lg opacity-95">{pct}%</p>
            </div>
          )}
        </div>
      </article>
    </section>
  );
}