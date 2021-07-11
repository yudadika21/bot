const axios = require('axios');
const cheerio = require('cheerio');


async function SearchFilm(querry) {
	const link =  await axios.get(`https://123movies.mom/search/?keyword=${querry}`)
	const $ = cheerio.load(link.data)
	let hasil = []
	let result = []
	$('#main').each(function (a, b) {
			 $(b).find('div').each(function (c, d) {
				let url = $(d).find('a').attr('href')
				let img = $(d).find('a > img').attr('src')
				let judul = $(d).find('a > img').attr('alt')
				let data = {
					judul: judul,
					thumb: img,
					url: url
				}
				result.push(data)
			})
			for (let i = 29; i < result.length; i++) {
			hasil.push(result[i])
			}
	})
	return hasil
}
module.exports = { SearchFilm }