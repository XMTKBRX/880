module.exports.config = {
    name: "شخصيتي_انمي",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "JRT",
    description: "Thả thính",
    commandCategory: "𝔾𝔸𝕄𝔼𝕊",
    usages: "[tag]",
    cooldowns: 5
};

module.exports.run = async ({ api, event}) => {
   const { threadID, messageID, senderID } = event;
     async function getUserInfo(userID) {
            const userInfo = await api.getUserInfo(userID);
            return {gender: userInfo[userID].gender };
     }
    const gai = ["قشيحة",

        "ديدين كلاش",

        "تراب كينغ",

        "يوبي",

        "تبون",

        "وردة شارلومانتي",

        "ميا خليفة",

        "جوني سينس",

        "نوميديا لزول",

        "بنزيما",

        "انوش مافيا",

"فردينيو",

        "الشاب بيلو",

        "ماميدو",

        "هواري منال",

        "صدام حسين",

        "غوكو",

        "لوفي",

        "شانكس",

        "كايدو",

        "بيغ مام",

        "غول دي روجر",

"ايس",

        "ناروتو",

        "ساسكي",

        "بيكولو",

        "فيجيتا",

        "سايتاما",

        "زورو",

        "سانجي",

        "روكس",

        "وايت بيرد",

        "منانوك",

"لم اجد شخصية تواجه جمال شخصيتك ❤️",

        "بوب مارلي",

        "سولكينغ",

        "زادكا",

        "توباك",

        "صالح اوڨرت",

        "بومدين",

        "سنيطرة",

        "البكبك",

        "شخصيتك خرا 🌚😂",

        "تشبه شخصية المطور❤️",
        
    ];
    const trai = ["قشيحة",

        "ديدين كلاش",

        "تراب كينغ",

        "يوبي",

        "تبون",

        "وردة شارلومانتي",

        "ميا خليفة",

        "جوني سينس",

        "نوميديا لزول",

        "بنزيما",

        "انوش مافيا",

"فردينيو",

        "الشاب بيلو",

        "ماميدو",

        "هواري منال",

        "صدام حسين",

        "غوكو",

        "لوفي",

        "شانكس",

        "كايدو",

        "بيغ مام",

        "غول دي روجر",

"ايس",

        "ناروتو",

        "ساسكي",

        "بيكولو",

        "فيجيتا",

        "سايتاما",

        "زورو",

        "سانجي",

        "روكس",

        "وايت بيرد",

        "منانوك",

"لم اجد شخصية تواجه جمال شخصيتك ❤️",

        "بوب مارلي",

        "سولكينغ",

        "زادكا",

        "توباك",

        "صالح اوڨرت",

        "بومدين",

        "سنيطرة",

        "البكبك",

        "شخصيتك خرا 🌚😂",

        "تشبه شخصية المطور❤️",

    ];
  var mention = Object.keys(event.mentions);
   const data = await getUserInfo(senderID);
  if (Object.keys(event.mentions).length == 1) {
    if (data.gender == 2 ) {
        api.sendMessage(`Gửi lời thả thính đến ${event.mentions[mention].replace("@", "")}:\n${trai[Math.floor(Math.random() * trai.length)]}`,threadID, messageID);
    }
    if (data.gender == 1 ) {
        api.sendMessage(`Gửi lời thả thính đến ${event.mentions[mention].replace("@", "")}:\n${gai[Math.floor(Math.random() * gai.length)]}`, threadID, messageID);
    }
  }
  else {
    if (data.gender == 2) {
     api.sendMessage(`${trai[Math.floor(Math.random() * trai.length)]}`,threadID, messageID); 
    }
    if (data.gender == 1 ) {
     api.sendMessage(`${gai[Math.floor(Math.random() * gai.length)]}`, threadID, messageID);
    }
  }
  
}