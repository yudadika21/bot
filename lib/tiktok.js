const axios = require('axios')

const tiktokDown = async (link) => {
	return new Promise (async (resolve, reject) => {
		await axios.request(`https://toksaver.com/convertok?url=` + link, {
			method: "GET",
			data: null,
			headers: {
				"accept": "*/*",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36'
			}
		}).then(res => {
			resolve(res.data)
		}).catch(reject)
	})
}
module.exports = { tiktokDown}
