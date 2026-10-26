import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { books } from "../data/books.js";
import { absolute, cleanTitle, faqItems, homeMeta, useSeo } from "../seo.js";

const GENRES = [...new Set(books.map((b) => b.genre))];

const COVERS = [
  ["#6e1f2b", "#cfa85d"],
  ["#17304f", "#d9bd7e"],
  ["#35502f", "#d8c27a"],
  ["#b08a2e", "#2a1608"],
  ["#4a2342", "#d9b97a"],
  ["#8b3b1c", "#f0d9a0"],
  ["#1f4a4c", "#d9bd7e"],
];
const HEIGHTS = [262, 286, 244, 276, 254, 292, 238, 270, 258, 282];

function Spine({ book, index, active, onPick }) {
  const [bg, fg] = COVERS[(index * 3 + 1) % COVERS.length];
  return (
    <button
      type="button"
      className="spine"
      aria-pressed={active}
      aria-label={`${book.novel_name}, ${book.author}`}
      onClick={() => onPick(book.id)}
      style={{
        background: bg,
        color: fg,
        "--h": HEIGHTS[(index * 7 + 3) % HEIGHTS.length],
        "--w": 44 + ((index * 5) % 4) * 6,
      }}
    >
      <span>{book.novel_name.replace(/\s{2,}/g, " ")}</span>
    </button>
  );
}

export default function Home() {
  useSeo({
    ...homeMeta(books, absolute(books[0].image)),
  });
  const [activeId, setActiveId] = useState(books[0].id);
  const card = useRef(null);
  const picked = useRef(false);
  const pick = (id) => {
    picked.current = true;
    setActiveId(id);
  };
  // After choosing a book on the shelf, bring its card into view.
  useEffect(() => {
    if (!picked.current) return;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    card.current?.scrollIntoView({ behavior: calm ? "auto" : "smooth", block: "center" });
  }, [activeId]);
  const active = books.find((b) => b.id === activeId);
  const split = Math.ceil(books.length / 2);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-6 text-center pt-12 md:pt-16">
        <h1 className="font-serif text-4xl md:text-6xl leading-[1.06] max-w-[16ch] mx-auto text-balance">
          Har bir hikoya — yangi bir dunyo
        </h1>
        <p className="mt-5 max-w-xl mx-auto italic text-lg text-muted leading-relaxed">
          Javondan o'zingizga yoqqan kitobni oling. Har birining ichida bir
          olam, har birining oxirida bir savol bor.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12">
        <div className="row">
          {books.slice(0, split).map((b, i) => (
            <Spine key={b.id} book={b} index={i} active={b.id === activeId} onPick={pick} />
          ))}
        </div>
        <div className="ledge" />
        <div className="row">
          {books.slice(split).map((b, i) => (
            <Spine key={b.id} book={b} index={i + split} active={b.id === activeId} onPick={pick} />
          ))}
        </div>
        <div className="ledge" />

        <article
          ref={card}
          key={active.id}
          className="grid gap-6 md:gap-9 md:grid-cols-[230px_1fr] max-w-4xl mx-auto mt-14 p-5 md:p-7 border border-brassd bg-black/20 items-center"
        >
          <img
            src={active.image}
            alt={`«${cleanTitle(active)}» asariga rasm`}
            width="230"
            height="307"
            decoding="async"
            className="w-full max-w-[230px] aspect-[3/4] object-cover border-[6px] border-paper shadow-card"
          />
          <div>
            <h3 className="font-serif text-3xl md:text-4xl leading-tight text-balance">
              {active.novel_name.replace(/\s{2,}/g, " ")}
            </h3>
            <p className="italic text-lg text-muted mt-2">{active.author}</p>
            <span className="inline-block mt-5 border border-brass text-brass px-3 py-0.5 text-xs uppercase tracking-[0.18em]">
              {active.genre}
            </span>
            <p className="mt-4 mb-6 text-muted leading-relaxed">
              {active.short_description}
            </p>
            <Link
              to={`/book/${active.id}`}
              className="inline-block bg-brass text-wall2 px-6 py-3 font-bold text-sm tracking-[0.08em] hover:bg-[#e3c47d] hover:-translate-y-0.5 transition"
            >
              O'qish
            </Link>
          </div>
        </article>

        <section className="max-w-4xl mx-auto mt-24" aria-labelledby="all-works">
          <h2 id="all-works" className="font-serif text-3xl md:text-4xl">
            Barcha asarlar
          </h2>
          <div className="mt-8 grid gap-10 sm:grid-cols-2">
            {GENRES.map((g) => (
              <div key={g}>
                <h3 className="text-xs uppercase tracking-[0.18em] text-brass mb-3">
                  {g}
                </h3>
                <ul className="space-y-2">
                  {books
                    .filter((b) => b.genre === g)
                    .map((b) => (
                      <li key={b.id}>
                        <Link
                          to={`/book/${b.id}`}
                          className="text-paper hover:text-brass transition-colors"
                        >
                          {cleanTitle(b)}
                        </Link>
                        <span className="italic text-muted text-sm"> · {b.author}</span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto mt-24" aria-labelledby="faq">
          <h2 id="faq" className="font-serif text-3xl md:text-4xl">
            Savol va javoblar
          </h2>
          <dl className="mt-8 space-y-7">
            {faqItems(books).map(([q, a]) => (
              <div key={q}>
                <dt className="font-serif text-xl text-brass">{q}</dt>
                <dd className="mt-1 text-muted leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </section>
  );
}
