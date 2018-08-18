const Parser = require("rss-parser");
let parser = new Parser();

parser.parseURL('http://www.treasury.gov/resource-center/sanctions/OFAC-Enforcement/Documents/ofac.xml').then((feed) => {
  feed.items.forEach(item => {
    console.log(`${item.title}: ${item.link}`);
  })
})