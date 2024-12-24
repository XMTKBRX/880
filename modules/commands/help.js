module.exports.config = {
	name: "اوامر",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "𝗕𝗘𝗡𝗭𝗢",
	description: "FREE SET-UP MESSENGER ON YOUTUBE",
	commandCategory: "system",
	usages: "[Name module]",
	cooldowns: 5,
	envConfig: {
		autoUnsend: true,
		delayUnsend: 20
	}
};

module.exports.languages = {
	"en": {
		"moduleInfo": "「 %1 」\n%2\n\n❥︎ الاستخدام: %3\n❥︎ الفئة: %4\n❥︎ وقت الانتظار: %5 ثانية(s)\n❥︎ Permission: %6\n\n🦋 تمت البرمجة بواسطة إلين محمد/Mirai Team 🦋",
		"helpList": '[ يوجد %1 في هذا البوت، استخدم: "%2الاوامر + اسم الامر" لمعرفة طريقة استخدام الامر! ]',
		"user": "User  gy",
        "adminGroup": "ادمن الجروب",
        "adminBot": "ادمن البوت"
	}
};

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;

	if (!body || typeof body == "cmd" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports. run = function({ api, event, args, getText }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	if (!command) {
		const arrayInfo = [];
		const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 40;
    let i = 0;
    let msg = "╭────────╮\n → اوامر ايليونة ← \n╰────────╯\n👽▬▬▬▬▬▬▬▬▬▬▬👽\n";
    
    for (var [name, value] of (commands)) {
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);
    
    const startSlice = numberOfOnePage*page - numberOfOnePage;
    i = startSlice;
    const returnArray = arrayInfo.slice(startSlice, startSlice + numberOfOnePage);
  
    for (let item of returnArray) msg += `   ╏  ${++i} ֍ ${item}\n`;
    const randomText = [ "hy bhy baby","g","h"];
    const text = `👽▬▬▬▬▬▬▬▬▬▬▬👽\n╭──────╮\n✅ صفحة❴${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)}❵✅\n╰──────╯\nاكتب: °${prefix}الاوامر°\nاجمالي الاوامر: ${arrayInfo.length} `;
    return api.sendMessage(msg  + text, threadID, async (error, info) => {
			if (autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, delayUnsend * 10000));
				return api.unsendMessage(info.messageID);
			} else return;
		});
	}

	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
};