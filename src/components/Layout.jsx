import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative bg-white">
      <header className="border-b border-gray-200 bg-white/90 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="block">
            <h1 className="text-3xl md:text-4xl font-serif text-primary leading-none">
              Adabiyot Dunyosi
            </h1>
            <p className="text-xs md:text-sm text-gray-500 mt-1 italic">
              Nigora tomonidan tayyorlangan
            </p>
          </Link>
          <Link to="/" className="text-sm font-medium text-primary hover:text-accent transition-colors">
            Asosiy
          </Link>
        </div>
      </header>
      <main className="">{children}</main>
      <footer className="border-t z-20 border-gray-200 bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Adabiyot Dunyosi | Tayyorladi: Nigora
        </div>
      </footer>
    </div>
  );
}
