const fetch = require("node-fetch");
const { JSDOM } = require("jsdom");

module.exports = () => {
  return fetch("http://books.toscrape.com/catalogue/page-2.html")
    .then((res) => res.text())
    .then((html) => new JSDOM(html))
    .then((DOM) => DOM.window.document);

  // const res = await fetch("http://books.toscrape.com/catalogue/page-2.html");
  // const html = await res.text();
  //
  // const DOM = new JSDOM(html);
  //
  // return DOM.window.document;
};
