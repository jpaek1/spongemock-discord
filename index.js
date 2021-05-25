const Discord = require("discord");
const client = new Discord.Client();

const keys = require("./config/keys");

client.on("ready", () => {
  console.log("i'M ReaDy tO lIstEN");
});

client.login(keys.botToken);
