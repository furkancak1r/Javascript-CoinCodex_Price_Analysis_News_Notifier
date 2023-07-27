const axios = require("axios");
const cheerio = require("cheerio");
const nodemailer = require("nodemailer");
const http = require("http"); // http modülünü dahil et
const port = 3000; // istediğiniz bir port numarası seçin
const dotenv = require("dotenv");
dotenv.config({ path: "./email.env" });
// Outlook bilgileri
const outlookAddress = process.env.outlookAddress;
const outlookPassword = process.env.outlookPassword;
// E-posta alıcısı
const recipientEmail = process.env.recipientEmail;
// Web sitesinin URL'si
const url = "https://coincodex.com/news/category/price-analysis/";

// Önceki haberin başlığı
let previousHeadline = "";

async function checkNews() {
  // Web sitesinin içeriğini al
  const response = await axios.get(url);
  const html = response.data;

  // Cheerio ile HTML'i işle
  const $ = cheerio.load(html);

  // En son haberin başlığını ve linkini al
  const headlineElement = $("a.entry-title").first();
  const headline = headlineElement.text().trim();
  const link = "https://coincodex.com" + headlineElement.attr("href");

  // E-posta gönder
  if (headline !== previousHeadline) {
    sendEmail(headline, link);
    previousHeadline = headline;
  }
}

async function sendEmail(headline, link) {
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: outlookAddress,
      pass: outlookPassword,
    },
  });

  let info = await transporter.sendMail({
    from: outlookAddress,
    to: recipientEmail,
    subject: "Yeni Haber",
    text: `Merhaba! Belirttiğiniz web sitesindeki en son haber:\n\n${headline} (${link})`,
    html: `<b>Merhaba!</b><br><br>Belirttiğiniz web sitesindeki en son haber:<br><br><a href="${link}">${headline}</a>`,
  });

  console.log("E-posta gönderildi:", info.messageId);
}

// Haberleri kontrol etmeye başla
setInterval(checkNews, 60 * 1000);

// Uygulamayı belirli bir port ve adreste dinlemeye başla
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Uygulama çalışıyor\n");
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Uygulama ${port} numaralı portta çalışıyor`);
  });
