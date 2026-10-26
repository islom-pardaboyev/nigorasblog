// Runs after `vite build`. Writes one real HTML file per page (home + every book)
// with its own title, description, canonical URL, social tags, structured data and
// the readable text inside #root, so search engines and AI crawlers that do not run
// JavaScript still get the content. Also writes sitemap.xml and llms.txt.
import fs from "node:fs";
import path from "node:path";
import { createServer } from "vite";

const dist = "dist";
const vite = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "error" });
const { books } = await vite.ssrLoadModule("/src/data/books.js");
const seo = await vite.ssrLoadModule("/src/seo.js");
const { SITE } = await vite.ssrLoadModule("/src/site.js");

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const assets = fs.readdirSync(path.join(dist, "assets"));
const imageUrl = (b) => {
  const base = path.basename(b.image.split("?")[0], path.extname(b.image.split("?")[0]));
  const file = assets.find((f) => f.startsWith(base + "-") && f.endsWith(".webp"));
  return file ? `${SITE.url}/assets/${file}` : undefined;
};

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

function head(m) {
  const ld = JSON.stringify(m.jsonLd).replace(/</g, "\\u003c");
  return [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    `<meta name="robots" content="${m.robots || "index, follow, max-image-preview:large"}" />`,
    `<link rel="canonical" href="${m.url}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${m.url}" />`,
    `<meta property="og:type" content="${m.type}" />`,
    m.image ? `<meta property="og:image" content="${m.image}" />` : "",
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    m.image ? `<meta name="twitter:image" content="${m.image}" />` : "",
    `<script type="application/ld+json" id="ld-json">${ld}</script>`,
  ]
    .filter(Boolean)
    .join("\n    ");
}

function write(route, m, body) {
  const html = template
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, `<!--seo:start-->\n    ${head(m)}\n    <!--seo:end-->`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  const out = path.join(dist, route === "/" ? "" : route, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
}

const genres = [...new Set(books.map((b) => b.genre))];
const homeBody = `<main>
<h1>Har bir hikoya — yangi bir dunyo</h1>
<p>${esc(seo.homeMeta(books).description)}</p>
<h2>Barcha asarlar</h2>
${genres
  .map(
    (g) =>
      `<h3>${esc(g)}</h3><ul>${books
        .filter((b) => b.genre === g)
        .map((b) => `<li><a href="/book/${b.id}">${esc(seo.cleanTitle(b))}</a> · ${esc(b.author)}</li>`)
        .join("")}</ul>`,
  )
  .join("\n")}
<h2>Savol va javoblar</h2>
<dl>${seo.faqItems(books).map(([q, a]) => `<dt>${esc(q)}</dt><dd>${esc(a)}</dd>`).join("")}</dl>
</main>`;
write("/", { ...seo.homeMeta(books, imageUrl(books[0])), type: "website" }, homeBody);

for (const b of books) {
  const poem = b.genre === "She'r";
  const text = poem
    ? b.text.trim().split(/\n\s*\n/).map((band) => `<p>${band.split("\n").map((l) => esc(l.trim())).filter(Boolean).join("<br>")}</p>`).join("")
    : b.text.split("\n").filter((p) => p.trim()).map((p) => `<p>${esc(p)}</p>`).join("");
  const body = `<article>
<p><a href="/">← Javonga qaytish</a></p>
<h1>${esc(seo.cleanTitle(b))}</h1>
<p>${esc(b.author)} · ${esc(b.genre)}</p>
${b.description ? `<p>${esc(b.description)}</p>` : ""}
${text}
<h2>Topshiriqlar</h2>
<ul>${b.tasks.map((t) => `<li>${esc(t.title)}</li>`).join("")}</ul>
</article>`;
  write(`/book/${b.id}`, seo.bookMeta(b, imageUrl(b)), body);
}

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    [`  <url><loc>${SITE.url}/</loc><lastmod>${today}</lastmod><priority>1.0</priority></url>`]
      .concat(books.map((b) => `  <url><loc>${SITE.url}/book/${b.id}</loc><lastmod>${today}</lastmod><priority>0.8</priority></url>`))
      .join("\n") +
    `\n</urlset>\n`,
);

fs.writeFileSync(
  path.join(dist, "llms.txt"),
  `# ${SITE.name}\n\n> ${seo.homeMeta(books).description}\n\nSayt: ${SITE.url}/\nTil: o'zbek (lotin)\nMuallif: ${SITE.creator}\n\n## Asarlar\n\n` +
    books
      .map((b) => `- [${seo.cleanTitle(b)}](${SITE.url}/book/${b.id}): ${b.genre}, ${b.author}. ${(b.short_description || "").replace(/\s+/g, " ").trim()}`)
      .join("\n") +
    `\n`,
);

await vite.close();
console.log(`prerendered ${books.length + 1} pages, sitemap.xml, llms.txt`);
