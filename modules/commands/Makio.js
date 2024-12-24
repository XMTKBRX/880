module.exports.config = {
  name: "ماكيو",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mr benzo ",
  description: "",
  commandCategory: "ℙℍ𝕆𝕋𝕆",
  usages: "art",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
  "https://i.imgur.com/RLZk4Fg.jpg",
    "https://i.imgur.com/bF9Cm5W.jpg",
    "https://i.imgur.com/VzKeGEp.jpg",
    "https://i.imgur.com/Suhub4y.jpg",
    "https://i.imgur.com/Weq0thZ.jpg",
    "https://i.imgur.com/3x72mU7.jpg",
    "https://i.imgur.com/mXUAmbZ.jpg",
"https://i.imgur.com/H4R4rh5.jpg",
    "https://i.imgur.com/ArwMo1T.jpg",
    "https://i.imgur.com/JieLgcT.jpg",
    "https://i.imgur.com/wqjOHNp.jpg",
    "https://i.imgur.com/SlrnISf.jpg",
    "https://i.imgur.com/F7xSgJZ.jpg",
    "https://i.imgur.com/KeeqYFm.jpg",
    "https://i.imgur.com/Apdc1vS.jpg",
    "https://i.imgur.com/6qo14za.jpg",
    "https://i.imgur.com/2fQVBZl.jpg",
    "https://i.imgur.com/HMttmjG.jpg",
    "https://i.imgur.com/PlBOdw3.jpg",
    "https://i.imgur.com/oXy7Kk2.jpg",
    "https://i.imgur.com/GepOqJd.jpg",
    "https://i.imgur.com/PMoELR7.jpg",
    "https://i.imgur.com/OtcsgFx.jpg",
    "https://i.imgur.com/HW1g6b3.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("أنت بحاجة إلى 1000 دولار لرؤية الصورة ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000})
   var callback = () => api.sendMessage({body:` صورة ماكيو 
💞عدد صور ${link.length}\n-1000 دولار!`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
 