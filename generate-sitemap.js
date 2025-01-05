const sitemap = require("sitemap");
const fs = require("fs");

// Sitemap generálása
const sitemapInstance = sitemap.createSitemap({
  hostname: "https://www.otthonkorszerusites.hu",
  cacheTime: 600000, // 10 perc cache idő
  urls: [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/about", changefreq: "weekly", priority: 0.8 },
    { url: "/contact", changefreq: "monthly", priority: 0.5 },
  ],
});

// Generáljuk a sitemap XML-t
sitemapInstance.toXML((err, xml) => {
  if (err) {
    return console.error(err);
  }
  // Írjuk a fájlt a rendszerbe
  fs.writeFileSync("sitemap.xml", xml);
  console.log("Sitemap successfully generated!");
});
