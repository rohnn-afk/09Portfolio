import { createElement } from "react";
import { renderToString } from "react-dom/server";
import process from "node:process";
import { createServer } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
const base = process.env.PAGES_BASE || "/";
const origin = process.env.SITE_ORIGIN;
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
try {
  const { Portfolio, CaseStudy } = await server.ssrLoadModule(
    "/src/components/Editorial.tsx",
  );
  const template = await readFile("dist/index.html", "utf8");
  for (const route of ["", "experience/ezyr/", "404.html"]) {
    const markup =
      route === "404.html"
        ? `<main class="container section"><h1>Page not found.</h1><a href="${base}">Back to portfolio</a></main>`
        : renderToString(
            createElement(route === "experience/ezyr/" ? CaseStudy : Portfolio),
          );
    let html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${markup}</div>`,
    );
    if (route === "experience/ezyr/") {
      html = html.replaceAll(
        "Rohan Sharma — Product Engineer & Technical Lead",
        "The Neuron Engine — Ezyr case study | Rohan Sharma",
      );
      html = html.replace(
        "Rohan Sharma is a product engineer and technical lead who builds software from interface through AI systems, backend and deployment. Explore Ezyr experience and independent product work.",
        "A technical case study on the Ezyr Neuron Engine: translating structured visual application definitions into runnable Next.js projects and a deployment handoff.",
      );
      html = html.replace(
        "From frontend engineering to technical leadership at Ezyr, with selected personal products and freelance work.",
        "How Rohan Sharma led engineering across Ezyr’s visual application platform, generation pipeline, AI runtime and deployment.",
      );
    }
    if (route === "404.html")
      html = html.replace(
        "</head>",
        '<meta name="robots" content="noindex" /></head>',
      );
    else if (origin)
      html = html.replace(
        "</head>",
        `<link rel="canonical" href="${origin}${base}${route}" /><meta property="og:url" content="${origin}${base}${route}" /><meta property="og:image" content="${origin}${base}social-preview.png" /><meta property="og:image:alt" content="Rohan Sharma: Thoughtful interfaces. Serious engineering." /></head>`,
      );
    const directory = route === "404.html" ? "dist" : `dist/${route}`;
    await mkdir(directory, { recursive: true });
    await writeFile(
      `${directory}/${route === "404.html" ? "404.html" : "index.html"}`,
      html,
    );
  }
  await writeFile("dist/.nojekyll", "");
  await writeFile(
    "dist/robots.txt",
    `User-agent: *\nAllow: /\n${origin ? `Sitemap: ${origin}${base}sitemap.xml\n` : ""}`,
  );
  if (origin)
    await writeFile(
      "dist/sitemap.xml",
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${["", "experience/ezyr/"].map((route) => `<url><loc>${origin}${base}${route}</loc></url>`).join("")}</urlset>`,
    );
} finally {
  await server.close();
}
