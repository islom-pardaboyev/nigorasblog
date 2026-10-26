import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col room">
      <header className="max-w-6xl w-full mx-auto px-6 py-6 flex items-center justify-between gap-6">
        <Link
          to="/"
          className="block border border-brass text-center px-5 pt-2.5 pb-2 bg-brass/10 hover:bg-brass/20 transition-colors"
        >
          <span className="block font-serif text-lg md:text-[22px] leading-none tracking-[0.14em] uppercase text-brass">
            Adabiyot Dunyosi
          </span>
          <span className="block italic text-xs text-muted mt-1.5">
            Nigora tomonidan tayyorlangan
          </span>
        </Link>
        <nav>
          <Link
            to="/"
            className="italic text-[15px] text-muted hover:text-brass transition-colors"
          >
            Asosiy
          </Link>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-brassd mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-2xl text-paper mb-2">
              Adabiyot Dunyosi
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              4-sinf III qism “O’qish savodxonligi” darsligi asosida
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-brass mb-3">
              Tayyorladi
            </h4>
            <p className="text-paper font-bold text-sm">
              Ravshanova (Yuldasheva) Nigora Sultanovna
            </p>
            <p className="text-sm text-muted mt-1 leading-relaxed">
              Ta’lim va tarbiya nazariyasi va metodikasi (boshlang’ich ta’lim)
              magistranti
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-brass mb-3">
              Aloqa
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+998933292602"
                className="block text-paper hover:text-brass transition-colors"
              >
                +998 93 329 26 02
              </a>
              <a
                href="https://t.me/NigoraSultanovna"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-paper hover:text-brass transition-colors"
              >
                @NigoraSultanovna
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-muted pb-10 italic">
          © {new Date().getFullYear()} Adabiyot Dunyosi. Barcha huquqlar
          himoyalangan.
        </p>
      </footer>
    </div>
  );
}
