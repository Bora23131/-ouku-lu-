const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = async bot => {
  //bot.shard.fetchClientValues("guilds.size").then(async results => {
  //bot.shard.fetchClientValues("users.size").then(async results2 => {
//  let shardi = bot.shard.id + 1;
  var oyun = [
    "Wishing you plenty of tea ...",
    "Bol çay içme dileğiyle...",
    "En iyi sistemle güvenlik sistemleri!",
    "Faster Security System!",
    "Version: v0.5",
    "c+help | c+invite | c+prefix",
    "c+yardım | c+invite | c+prefix",
    //`Shard: ${shardi}/${bot.shard.count}`,
    `${bot.guilds.size.toLocaleString()} Guilds! ${bot.guilds
      .reduce((a, b) => a + b.memberCount, 0)
      .toLocaleString()} Members!`
    `${bot.guilds.size.toLocaleString()} sunucu, ${bot.guilds
      .reduce((a, b) => a + b.memberCount, 0)
      .toLocaleString()} kullanıcı!`
  ];

  setInterval(async () => {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    bot.user.setActivity(oyun[random], { type: "WATCHING" });
  }, 12000);
  bot.user.setStatus("online");
  //});
  //});
};
