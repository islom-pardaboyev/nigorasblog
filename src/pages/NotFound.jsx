import { Link } from "react-router-dom";
import { notFoundMeta, useSeo } from "../seo.js";

export default function NotFound() {
  useSeo(notFoundMeta());
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="font-serif text-4xl">Sahifa topilmadi</h1>
      <p className="italic text-muted mt-3">Bu javonda bunday kitob yo'q.</p>
      <Link to="/" className="text-brass mt-6 inline-block hover:underline">
        ← Javonga qaytish
      </Link>
    </div>
  );
}
