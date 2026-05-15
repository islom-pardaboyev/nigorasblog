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
          <Link
            to="/"
            className="text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            Asosiy
          </Link>
        </div>
      </header>
      <main className="">{children}</main>
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Left: Project Info */}
            <div>
              <h3 className="font-serif text-xl text-gray-900 mb-2">
                Adabiyot Dunyosi
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                4-sinf III qism “O’qish savodxonligi” darsligi asosidan
              </p>
            </div>

            {/* Center: Creator Info */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                Tayyorladi
              </h4>
              <div className="space-y-1 text-sm text-gray-700">
                <b >
                  Ravshanova (Yuldasheva) Nigora Sultanovna
                </b>
                
                <p className="text-gray-600">Ta’lim va tarbiya nazariyasi va metodikasi (boshlang’ich ta’lim) magistranti</p>
              </div>
            </div>

            {/* Right: Contact Info */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                Aloqa
              </h4>
              <div className="space-y-2">
                <a
                  href="tel:+998933292602"
                  className="flex items-center text-sm text-primary hover:text-accent transition-colors"
                >
                  <span className="mr-2">📱</span>
                  +998 93 329 26 02
                </a>
                <a
                  href="https://t.me/NigoraSultanovna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-primary hover:text-accent transition-colors"
                >
                  <span className="mr-2">@</span>
                  @NigoraSultanovna
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-200 my-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>
              © {new Date().getFullYear()} Adabiyot Dunyosi. Barcha huquqlar
              himoyalangan.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-700 transition-colors">
                Maxfiylik siyosati
              </a>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Foydalanish shartlari
              </a>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Bog'lanish
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
