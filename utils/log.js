const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF7F50")('[ ❕ WARNING] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF0000")('[ ❗ ERROR ] » ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#FF4500")(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF0000")('[ 𝐌𝐑 -𝗕𝗘𝗡𝗭𝗢➥] ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FFFF00")('[♧ 𝗕𝗘𝗡𝗭𝗢-𝐓𝐑𝐈𝐂𝐊𝐄𝐑 ♧  ]') + data);
			break;
		default:
			console.log(chalk.bold.hex("#00FFFF")('[☾︎☛ 𝗕𝗘𝗡𝗭𝗢 ☚☽︎]  ') + data);
			break;
	}
}