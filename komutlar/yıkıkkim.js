const Discord = require('discord.js');
exports.run = function(client, message, args) {



    const çekiliş = new Discord.RichEmbed()
   
     
    .addField(`discordakiyıkık:`, `<@${message.guild.members.random().id}>`, true)
    .setImage('https://st2.depositphotos.com/1499736/9556/i/950/depositphotos_95566772-stock-photo-man-pointing-finger-at-camera.jpg')
    .setColor("RANDOM")
    .setDescription('')
    return message.channel.sendEmbed(çekiliş);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dcdekiyıkık"],
  permLevel: 0
};

exports.help = {
  name: 'yıkıkkim',
  description: 'Çekiliş yapar.',
  usage: 'çekilişyap'
};