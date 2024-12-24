const chalk = require('chalk');
module.exports.config = {
    name: "join",
    version: "1.0.1",
    hasPermssion: 2,
    credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
    description: "Join the Bot boxes are in",
    commandCategory: "𝔻𝔼𝕍𝔼𝕃𝕆ℙ𝔼ℝ",
    usages: "",
    cooldowns: 5
};
 module.exports.onLoad = () => {
  console.log(chalk.bold.hex("#00c300").bold("============ حملت بنجاح أمر الانضمام ============"));
  }
module.exports.handleReply = async function({ api, event, handleReply, Threads }) {
  var { threadID, messageID, senderID, body } = event;
  var { ID } = handleReply;
  console.log(ID)
  if (!body || !parseInt(body)) return api.sendMessage('يجب أن يكون اختيارك رقمًا.', threadID, messageID);
  if ((parseInt(body) - 1) > ID.length) return api.sendMessage("Your pick is not on the list", threadID, messageID);
  try {
    var threadInfo = await Threads.getInfo(ID[body - 1]);
    var { participantIDs, approvalMode, adminIDs } = threadInfo;
    if (participantIDs.includes(senderID)) return api.sendMessage(`You are already in this group.`, threadID, messageID);
    api.addUserToGroup(senderID, ID[body - 1]);
    if (approvalMode == true && !adminIDs.some(item => item.id) == api.getCurrentUserID()) return api.sendMessage("Added you to the group's approval list...Custom yourself.", threadID, messageID);
    else return api.sendMessage(`لقد أضافتك  للتو إلى المجموعة
 ${threadInfo.threadName} بالفعل. تحقق في قسم رسائل الانتظار أو البريد العشوائي إذا كنت لا ترى المربع \nكثيراً 💟`, threadID, messageID);
  } catch (error) {
    return api.sendMessage(`أنا مخطئ لذا لا يمكنني إضافتك إلى تلك المجموعة: <.\n\n${error}`, threadID, messageID);
  }
}

module.exports.run = async function({ api, event, Threads }) {
  var { threadID, messageID, senderID } = event;
  var msg = `🔰==[ BOX LIST ]==🔰\n\n`, number = 0, ID = [];
  var allThreads = await Threads.getAll();
  for (var i of allThreads) {
    number++;
    msg += `${number}. ${i.threadInfo.threadName}\n`;
    ID.push(i.threadID)
  }
  msg += `\n👉 رد على هذه الرسالة بالرقم المقابل للمجموعة التي تريد إدخالها`
  return api.sendMessage(msg, threadID, (error, info) => {
    global.client.handleReply.push({
      name: this.config.name,
      author: senderID,
     messageID: info.messageID,
      ID: ID      
    })
  }, messageID)
}
