import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { books } from "../data/books.js";
import TaskRenderer from "../components/TaskRenderer.jsx";

export default function BookPage() {
  const { id } = useParams();
  const book = books.find((b) => String(b.id) === String(id));
  const [scores, setScores] = useState({});

  if (!book) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h2 className="font-serif text-4xl">Asar topilmadi</h2>
        <Link to="/" className="text-primary mt-4 inline-block">← Asosiyga qaytish</Link>
      </div>
    );
  }

  const checkable = useMemo(
    () => book.tasks.filter((t) => t.type !== "oral_questions"),
    [book.tasks]
  );
  const allChecked = checkable.every((t) => scores[t.id] !== undefined);
  const totalCorrect = Object.values(scores).reduce((a, s) => a + s.correct, 0);
  const totalPossible = Object.values(scores).reduce((a, s) => a + s.total, 0);
  const pct = totalPossible ? Math.round((totalCorrect / totalPossible) * 100) : 0;
  const tone =
    pct >= 70 ? "bg-success text-white"
    : pct >= 50 ? "bg-accent text-ink"
    : "bg-danger text-white";

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <Link to="/" className="text-sm text-primary hover:text-accent">← Barcha asarlar</Link>

      <header className="mt-6 mb-10">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
          {book.genre}
        </span>
        <h1 className="font-serif text-4xl md:text-5xl mt-4 leading-tight">{book.novel_name}</h1>
        <p className="text-gray-500 mt-3 text-lg italic">{book.author}</p>
      </header>

      <div className="article-prose">
        {book.text.split("\n").map((p, i) => <p key={i}>{p}</p>)}
      </div>

      <hr className="my-12 border-gray-200" />

      <div className="mb-8">
        <p className="text-accent font-semibold uppercase tracking-widest text-xs">Topshiriqlar</p>
        <h2 className="font-serif text-3xl mt-2">Bilimingizni sinab ko'ring</h2>
      </div>

      <div className="space-y-8">
        {book.tasks.map((task) => (
          <TaskRenderer
            key={task.id}
            task={task}
            onScore={(id, c, t) => setScores((p) => ({ ...p, [id]: { correct: c, total: t } }))}
          />
        ))}
      </div>

      {allChecked && (
        <div className={`mt-10 rounded-2xl p-8 text-center shadow-card ${tone}`}>
          <p className="uppercase tracking-widest text-xs font-semibold opacity-90">Yakuniy natija</p>
          <p className="font-serif text-5xl mt-3">{totalCorrect}/{totalPossible}</p>
          <p className="mt-2 text-lg opacity-95">{pct}%</p>
        </div>
      )}
    </article>
  );
}
