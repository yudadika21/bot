const request = require("request");
const cheerio = require("cheerio");

async function Textpro(URL,text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: URL,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}
async function Textpro2(URL,text1, text2) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: URL,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, text_2: text2, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}
module.exports = {
  Textpro,
   Textpro2
};