const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!mute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send("Susturmak için bir kullanıcı etiketle!");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Üzgünüm, Bu komutu kullanmak için yeterli yetkin yok.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bu kullanıcıyı susturamazsın");
  if (tomute.id === message.author.id) return message.channel.send("Bu kullanıcıyı susturamazsın!");
  let muterole = message.guild.roles.find(`name`, "Vlorian Sustur");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Mute's",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.channel.send("Süre belirt!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));

  message.delete();

}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sus'],
  permLevel: 0
};

module.exports.help = {
  name: 'mute',
  description: 'Yapimcimi Gosterir.',
  usage: 'yapimcim'
};