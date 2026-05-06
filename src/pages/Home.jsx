import { Link } from "react-router-dom";
import { books } from "../data/books.js";

export default function Home() {
  return (
    <>
      <section className="bg-cream border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
          <p className="text-accent font-medium tracking-widest uppercase text-xs mb-4">
            Mutolaa · Topshiriqlar · Tafakkur
          </p>
          <h2 className="text-4xl md:text-6xl font-serif max-w-3xl mx-auto leading-tight">
            Har bir hikoya — yangi bir dunyo
          </h2>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            O'qing, o'ylang va interaktiv topshiriqlar orqali o'z bilimingizni sinab ko'ring.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="font-serif text-3xl mb-8">Asarlar</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((b) => (
            <Link
              key={b.id}
              to={`/book/${b.id}`}
              className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                {b.genre}
              </span>
              <h4 className="font-serif text-2xl mt-4 group-hover:text-primary transition-colors">
                {b.novel_name}
              </h4>
              <p className="text-sm text-gray-500 mt-1">{b.author}</p>
              <p className="text-gray-700 mt-4 text-[15px] leading-relaxed line-clamp-3">
                {b.short_description}
              </p>
              <span className="inline-flex items-center gap-1 mt-5 text-primary font-medium text-sm">
                O'qish →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
