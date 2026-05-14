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
    <div className="relative min-h-screen">

      {/* Background rasm */}
      <img
        src={book.image}
        alt=""
        className="fixed inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient overlay */}
      <div className="fixed inset-0 z-10 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      {/* Content */}
      <article className="relative z-20">

        {/* Rasm qismi — shaffof */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <Link to="/" className="text-sm text-white/70 hover:text-white">
            ← Barcha asarlar
          </Link>

          <header className="mt-6 mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent bg-white/20 px-3 py-1 rounded-full">
              {book.genre}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl mt-4 leading-tight text-white">
              {book.novel_name}
            </h1>
            <p className="text-white/70 mt-3 text-lg italic">{book.author}</p>
          </header>

          <div className="article-prose">
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
                            className="text-lg italic mb-0! block text-white/90"
                          >
                            {misra.trim()}
                          </span>
                        ),
                      )}
                    </div>
                  ))}
              </div>
            ) : (
              <div className="article-prose">
                {book.text.split("\n").map((p, i) => (
                  <div key={i}>
                    <p className="text-white/90">{p}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <hr className="border-white/20" />

        {/* Topshiriqlar qismi — oq fon */}
        <div className="bg-white min-h-screen">
          <div className="max-w-3xl mx-auto px-6 py-12">
            <div className="mb-8">
              <p className="text-accent font-semibold uppercase tracking-widest text-xs">
                Topshiriqlar
              </p>
              <h2 className="font-serif text-3xl mt-2">
                Bilimingizni sinab ko'ring
              </h2>
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
              <div className={`mt-10 rounded-2xl p-8 text-center shadow-card ${tone}`}>
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
        </div>

      </article>
    </div>
  );
}