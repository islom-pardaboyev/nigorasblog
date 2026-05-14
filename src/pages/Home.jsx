import { Link } from "react-router-dom";
import { books } from "../data/books.js";
import videoSrc from "../assets/home-video.mp4";

export default function Home() {
  return (
    <section>
      <header className="relative overflow-hidden py-10 border-b border-gray-200">
        {/* Background Video */}
        <video
          src={videoSrc}
          muted
          loop
          autoPlay
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 text-center text-white">
          <p className="font-medium tracking-widest uppercase text-xs mb-4 text-accent">
            Mutolaa · Topshiriqlar · Tafakkur
          </p>

          <h2 className="text-4xl md:text-6xl font-serif max-w-3xl mx-auto leading-tight">
            Har bir hikoya — yangi bir dunyo
          </h2>

          <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-200">
            O'qing, o'ylang va interaktiv topshiriqlar orqali o'z bilimingizni
            sinab ko'ring.
          </p>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="font-serif text-3xl mb-8">Asarlar</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((b) => (
            <Link
              key={b.id}
              to={`/book/${b.id}`}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${b.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Dark overlay — textlar ko'rinsin */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />

              {/* Content */}
              <div className="relative z-10 p-6">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-white px-3 py-1 rounded-full">
                  {b.genre}
                </span>
                <h4 className="font-serif text-2xl mt-4 text-white group-hover:text-white/80 transition-colors">
                  {b.novel_name}
                </h4>
                <p className="text-sm text-white/70 mt-1">{b.author}</p>
                <p className="text-white/80 mt-4 text-[15px] leading-relaxed line-clamp-3">
                  {b.short_description}
                </p>
                <span className="inline-flex items-center gap-1 mt-5 text-white font-medium text-sm">
                  O'qish →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
