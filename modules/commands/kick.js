module.exports.config = {
	name: "طرد",
	version: "1.0.1", 
	hasPermssion: 1,
	credits: "Mirai Team",
	description: "قم بإزالة الشخص الذي تريد إزالته من المجموعة عن طريق وضع علامة عليه",
	commandCategory: "𝔸𝔻𝕄𝕀ℕ 𝔾ℝ𝕆𝕌ℙ", 
	usages: "[tag]", 
	cooldowns: 0,
};

module.exports.languages = {
	"vi": {
		"error": "حدث خطاء !",
		"needPermssion": "شدا سوي دصعدني ادمن اول !",
		"missingTag": "سوي تاك لواحد خلسحله"
	},
	"en": {
		"error": "خطأ! حدث خطأ. الرجاء معاودة المحاولة في وقت لاحق!",
		"needPermssion": "شدا سوي دصعدني ادمن اول !",
		"missingTag": "سوي تاك لواحد خلسحله"
	}
}

module.exports.run = async function({ api, event, getText, Threads }) {
	var mention = Object.keys(event.mentions);
	try {
		let dataThread = (await Threads.getData(event.threadID)).threadInfo;
		if (!dataThread.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(getText("needPermssion"), event.threadID, event.messageID);
		if(!mention[0]) return api.sendMessage("Bạn phải tag người cần kick",event.threadID);
		if (dataThread.adminIDs.some(item => item.id == event.senderID)) {
			for (const o in mention) {
				setTimeout(() => {
					api.removeUserFromGroup(mention[o],event.threadID) 
				},3000)
			}
		}
	} catch { return api.sendMessage(getText("error"),event.threadID) }
}
