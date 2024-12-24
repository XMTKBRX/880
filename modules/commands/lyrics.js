module.exports.config = {
    name: "كلمات",
    version: "1.0.0",
    hasPermision: 0,
    credit: "Kopiko",
    description: "احصل على معلومات أي أغنية",
    commandCategory: "𝕄𝔼𝔻𝕀𝔸",
    cooldowns: 0,
};

module.exports.run = async function({api, event, args, utils, Users, Threads}) {
    try {
        let axios = require('axios');
        let fs = require("fs-extra");
        let request = require("request");
        let {threadID, senderID, messageID} = event;
        let juswa = args.join(" ");
	const res = await axios.get(`https://api.popcat.xyz/lyrics?song=${juswa}`);
	console.log(res.data);
	var data = res.data;
	let callback = function() {
            return api.sendMessage({
                body:`-اسم الأغنية: ${data.title}\n-أسم المغني : ${data.artist}\n\n-كلمات الأغنية :\n${data.lyrics}`,
                attachment: fs.createReadStream(__dirname + `/cache/image.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/image.png`), event.messageID);
        };
		return request(encodeURI(data.image)).pipe(fs.createWriteStream(__dirname + `/cache/image.png`)).on("close", callback);
		} catch (err) {
        console.log(err)
        return api.sendMessage(`اكتب اسم الأغنية !`, event.threadID)
    }
}