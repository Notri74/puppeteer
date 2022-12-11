const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://inmanga.com/");
  await page.screenshot({ path: "prueba2.jpg" });

  const enlaces = await page.evaluate(() => {
    const imagenes = document.getElementsByTagName(".img");
    const descargas = [];
    for (imagenes of imagenes) {
      descargas.push(imagenes);
    }
    return descargas;
  });
  console.log(enlaces.length);

  browser.close();
})();
