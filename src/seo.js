import { useEffect } from "react";
import { SITE } from "./site.js";

// Works whose "author" is a source (a magazine, a folk tale, a book series), not a person.
const NOT_A_PERSON = new Set([4, 5, 8, 9, 13, 18]);

export const cleanTitle = (b) => b.novel_name.replace(/\s{2,}/g, " ").trim();

const clip = (s, n = 158) => {
  const t = s.replace(/\s+/g, " ").trim().replace(/\.\.\.$/, "").replace(/…$/, "");
  return t.length <= n ? t : t.slice(0, n - 1).replace(/\s+\S*$/, "") + "…";
};

export const faqItems = (books) => [
  [
    "Adabiyot Dunyosi nima?",
    `${SITE.name} bu ${books.length} ta she'r, hikoya, ertak va ilmiy maqolani o'qib, har biri bo'yicha interfaol topshiriqlar bajarish mumkin bo'lgan o'quv sayti.`,
  ],
  [
    "Bu sayt kimlar uchun?",
    `Sayt 4-sinf o'quvchilari, ularning o'qituvchilari va ota-onalari uchun. Asarlar ${SITE.textbook} asosida tanlangan.`,
  ],
  [
    "Saytni kim tayyorlagan?",
    "Saytni Ravshanova (Yuldasheva) Nigora Sultanovna, ta'lim va tarbiya nazariyasi va metodikasi (boshlang'ich ta'lim) magistranti tayyorlagan.",
  ],
];

export function homeMeta(books, image) {
  const url = `${SITE.url}/`;
  const description = clip(
    `${books.length} ta she'r, hikoya va ertak. Matnni o'qing, interfaol topshiriqlar bilan sinab ko'ring. 4-sinf «O'qish savodxonligi» asosida.`,
  );
  return {
    title: `${SITE.name} | 4-sinf she'r, hikoya va ertaklar`,
    description,
    url,
    image,
    type: "website",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE.name,
        url,
        inLanguage: "uz",
        description,
        publisher: { "@type": "Person", name: SITE.creator },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems(books).map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Asarlar",
        itemListElement: books.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: cleanTitle(b),
          url: `${SITE.url}/book/${b.id}`,
        })),
      },
    ],
  };
}

export function bookMeta(book, image) {
  const url = `${SITE.url}/book/${book.id}`;
  const title = cleanTitle(book);
  const intro = (book.description || book.short_description || "").replace(/(\.{3}|…)\s*$/, "").trim();
  const description = clip(
    `${book.genre}: «${title}», ${book.author}. ${intro ? intro.replace(/\.?$/, ".") + " " : ""}${book.tasks.length} ta topshiriq.`,
  );
  const work = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    url,
    inLanguage: "uz",
    genre: book.genre,
    description: clip(intro || description),
    educationalLevel: "4-sinf",
    learningResourceType: "Interaktiv topshiriqlar",
    isPartOf: { "@type": "WebSite", name: SITE.name, url: `${SITE.url}/` },
    creditText: book.author,
  };
  if (image) work.image = image;
  if (!NOT_A_PERSON.has(book.id)) work.author = { "@type": "Person", name: book.author };
  return {
    title: title.length > 42 ? title : `${title} | ${SITE.name}`,
    description,
    url,
    image,
    type: "article",
    jsonLd: [
      work,
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: SITE.name, item: `${SITE.url}/` },
          { "@type": "ListItem", position: 2, name: title, item: url },
        ],
      },
    ],
  };
}

export function notFoundMeta() {
  return {
    title: `Sahifa topilmadi | ${SITE.name}`,
    description: "Bunday sahifa yo'q. Asosiy sahifaga qayting.",
    url: `${SITE.url}/`,
    robots: "noindex",
    jsonLd: [],
  };
}

function upsert(selector, create, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}
const meta = (key, name, content) =>
  upsert(
    `meta[${key}="${name}"]`,
    () => {
      const m = document.createElement("meta");
      m.setAttribute(key, name);
      return m;
    },
    "content",
    content,
  );

/** Keeps <head> in step with the current route after client-side navigation. */
export function useSeo(m) {
  const key = m.url + m.title;
  useEffect(() => {
    document.title = m.title;
    meta("name", "description", m.description);
    meta("name", "robots", m.robots || "index, follow, max-image-preview:large");
    meta("property", "og:title", m.title);
    meta("property", "og:description", m.description);
    meta("property", "og:url", m.url);
    meta("property", "og:type", m.type || "website");
    meta("name", "twitter:title", m.title);
    meta("name", "twitter:description", m.description);
    if (m.image) {
      meta("property", "og:image", m.image);
      meta("name", "twitter:image", m.image);
    }
    upsert(
      'link[rel="canonical"]',
      () => {
        const l = document.createElement("link");
        l.rel = "canonical";
        return l;
      },
      "href",
      m.url,
    );
    let ld = document.getElementById("ld-json");
    if (!ld) {
      ld = document.createElement("script");
      ld.id = "ld-json";
      ld.type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(m.jsonLd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
}

export const absolute = (path) => (path ? new URL(path, window.location.origin).href : undefined);
