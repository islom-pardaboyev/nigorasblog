import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { books } from "../data/books.js";
import TaskRenderer from "../components/TaskRenderer.jsx";
import { absolute, bookMeta, notFoundMeta, useSeo } from "../seo.js";

export default function BookPage() {
  const { id } = useParams();
  const book = books.find((b) => String(b.id) === String(id));
  const [scores, setScores] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setScores({});
  }, [id]);

  useSeo(book ? bookMeta(book, absolute(book.image)) : notFoundMeta());

  const checkable = useMemo(
    () => (book ? book.tasks.filter((t) => t.type !== "oral_questions") : []),
    [book],
  );

  if (!book) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h2 className="font-serif text-4xl">Asar topilmadi</h2>
        <Link to="/" className="text-brass mt-4 inline-block">
          ← Javonga qaytish
        </Link>
      </div>
    );
  }

  const allChecked = checkable.every((t) => scores[t.id] !== undefined);
  const totalCorrect = Object.values(scores).reduce((a, s) => a + s.correct, 0);
  const totalPossible = Object.values(scores).reduce((a, s) => a + s.total, 0);
  const pct = totalPossible
    ? Math.round((totalCorrect / totalPossible) * 100)
    : 0;
  const title = book.novel_name.replace(/\s{2,}/g, " ");

  return (
    <section>
      <div className="max-w-4xl mx-auto px-6 pt-6 md:pt-10">
        <Link
          to="/"
          className="italic text-sm text-muted hover:text-brass transition-colors"
        >
          ← Javonga qaytish
        </Link>

        <header className="mt-8 grid gap-6 md:gap-10 md:grid-cols-[220px_1fr] items-center">
          <img
            src={book.image}
            alt={`«${book.novel_name.replace(/\s{2,}/g, " ")}» asariga rasm`}
            width="220"
            height="293"
            decoding="async"
            className="w-full max-w-[220px] aspect-[3/4] object-cover border-[6px] border-paper shadow-card"
          />
          <div>
            <span className="inline-block border border-brass text-brass px-3 py-0.5 text-xs uppercase tracking-[0.18em]">
              {book.genre}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.06] mt-4 text-balance">
              {title}
            </h1>
            <p className="italic text-lg text-muted mt-3">{book.author}</p>
            {book.description && (
              <p className="mt-5 text-muted leading-relaxed max-w-xl">
                {book.description}
              </p>
            )}
          </div>
        </header>
      </div>

      {/* The printed page */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 mt-14">
        <div className="ticket px-7 py-10 sm:px-14 sm:py-14">
          <div className="article-prose relative z-10">
            {book.genre === "She'r" ? (
              <div className="space-y-6">
                {book.text
                  .trim()
                  .split(/\n\s*\n/)
                  .map((band, i) => (
                    <div key={i} className="band">
                      {band
                        .split("\n")
                        .filter((m) => m.trim() !== "")
                        .map((misra, j) => (
                          <span key={j} className="misra">
                            {misra.trim()}
                          </span>
                        ))}
                    </div>
                  ))}
              </div>
            ) : (
              <div>
                {book.text
                  .split("\n")
                  .filter((p) => p.trim() !== "")
                  .map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
              </div>
            )}
          </div>
        </div>
      </article>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-20">
        <h2 className="font-serif text-3xl md:text-4xl">
          Bilimingizni sinab ko'ring
        </h2>
        <p className="italic text-muted mt-2">
          Har bir topshiriq alohida varaqda.
        </p>

        <div className="space-y-8 mt-8">
          {book.tasks.map((task) => (
            <TaskRenderer
              key={task.id}
              task={task}
              onScore={(tid, c, t) =>
                setScores((p) => ({ ...p, [tid]: { correct: c, total: t } }))
              }
            />
          ))}
        </div>

        {allChecked && (
          <div className="mt-12 border border-brass bg-black/20 p-8 text-center">
            <p className="italic text-muted">Yakuniy natija</p>
            <p className="font-serif text-6xl mt-2 text-brass">
              {totalCorrect}/{totalPossible}
            </p>
            <p className="mt-2 text-lg">{pct}%</p>
          </div>
        )}
      </div>
    </section>
  );
}
