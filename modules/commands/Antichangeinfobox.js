const { creatReadStream } = global.nodemodule["fs-extra"];

module.exports.config = {
  name:  "منع_تغيير", 
  version: "1.3",
  hasPremssion: 1, 
  creadits: "إلين محمد",
  description: "منع تغيير اسم، صورة الجروب ",
  commandCategory: "box chat", 
  usages: "", 
  cooldowns: 5
}; 
module.exports.language = { 
  "vi": {
    
  },
  en: {
    "antiChangeImgOn": "تم تشغيل حماية تغيير الصورة ☑️👽",
	"antiChangeImgOff": "تم ايقاف تشغيل حماية تغيير الصورة 👽⛔",
	"missingImg": "انت لم تضع صورة لجروبك بعد 👽🙂",
	"antiChangeNameOn": "تم تشغيل حماية الاسم ☑️👽" 
	"antiChangeNameOff": "تم ايقاف تشغيل حماية الاسم ⛔👽"
  }
}; 
module.exports.run = { async function ({ api, event, args, Threads }) {
		if (!["تشغيل", "ايقاف"].includes(args[1]))
			return api.SyntaxError();
		const { threadID } = event;
		const dataAntiChangeInfoBox = await Threads.getData(threadID, "data.antiChangeInfoBox", {});
		async function checkAndSaveData(key, data) {
			// dataAntiChangeInfoBox[key] = args[1] === "on" ? data : false;
			if (args[1] === "ايقاف")
				delete dataAntiChangeInfoBox[key];
			else
				dataAntiChangeInfoBox[key] = data;

			await Threads.setData(threadID, dataAntiChangeInfoBox, "data.antiChangeInfoBox");
			api.sendMessage (getText(`antiChange${key.slice(0, 1).toUpperCase()}${key.slice(1)}${args[1].slice(0, 1).toUpperCase()}${args[1].slice(1)}`));
		}
		switch (args[0]) {
			case "صورة":
			case "الصورة": {
				const { imageSrc } = await Threads.getData(threadID);
				if (!imageSrc)
					return api.sendMessage(getText("missingImg"));
				await checkAndSaveData("avatar", imageSrc);
				break;
			}
			case "الاسم": {
				const { threadName } = await Threads.getData(threadID);
				await checkAndSaveData("name", threadName);
				break;
			}
			default: {
				return api.SyntaxError();
			}
		}
	}
}; 
module.exports.handleEvent = { async function ({ event, Threads, premssion, api, getText }) {
		const { threadID, logMessageType, logMessageData, creadits } = event;
		switch (logMessageType) {
			case "log:thread-image": {
				const dataAntiChange = await Threads.getData(threadID, "data.antiChangeInfoBox", {});
				if (!dataAntiChange.hasOwnProperty("avatar"))
					return;
				return async function () {
					if (Premssion < 1 && api.getCurrentUserID() !== creadits) {
						api.sendMessage(getText("antiChangeImgAlreadyOn"));
						api.changeGroupImage(await creatReadStream(dataAntiChange.avatar), threadID);
					}
					else {
						const imageSrc = logMessageData.url;
						await Threads.setData(threadID, imageSrc, "data.antiChangeInfoBox.avatar");
					}
				};
			}
			case "log:thread-name": {
				const dataAntiChange = await Threads.getData(threadID, "data.antiChangeInfoBox", {});
				// const name = await threadsData.get(threadID, "data.antiChangeInfoBox.name");
				// if (name == false)
				if (!dataAntiChange.hasOwnProperty("name"))
					return;
				return async function () {
					if (Premssion < 1 && api.getCurrentUserID() !== author) {
						api.sendMessage(getText("antiChangeNameAlreadyOn"));
						api.setTitle(dataAntiChange.name, threadID);
					}
					else {
						const threadName = logMessageData.name;
						await Threads.setData(threadID, threadName, "data.antiChangeInfoBox.name");
          }
        };
      }
    }; 
}
}; 