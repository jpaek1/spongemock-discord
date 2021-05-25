const { Client, Intents } = require("discord.js");

const myIntents = new Intents();
myIntents.add("GUILD_MESSAGE_REACTIONS");
const client = new Client({ intents: myIntents });

const keys = require("./config/keys");

client.on("ready", () => {
  console.log("i'M ReaDy tO lIstEN");
});

client.on("messageReactionAdd", (messageReaction) => {
  // check for emoji.id === null to see if valid when setting
  console.log(messageReaction.emoji.name);
  console.log(client.emojis);
});

client.login(keys.botToken);
