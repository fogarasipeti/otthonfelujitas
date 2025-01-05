const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

// Sitemap konfiguráció
const sitemapUrls = [{ url: "/", changefreq: "daily", priority: 1.0 }];

(async () => {
  try {
    // Sitemap stream létrehozása
    const stream = new SitemapStream({
      hostname: "https://www.otthonkorszerusites.hu",
    });

    // URL-ek hozzáadása a streamhez
    sitemapUrls.forEach((entry) => stream.write(entry));
    stream.end();

    // Stream átalakítása XML-fájllá
    const xml = await streamToPromise(stream).then((data) => data.toString());

    // XML mentése fájlba
    fs.writeFileSync("sitemap.xml", xml);
    console.log("Sitemap sikeresen generálva!");
  } catch (err) {
    console.error("Hiba történt a sitemap generálása közben:", err);
  }
})();
