  
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Üzgünüm, Bu komutu kullanmak için yeterli yetkin yok")

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.sendMessage("Mute kaldırmak için bi kullanıcı etiketle ya da ID yaz");

        let role = message.guild.roles.find(r => r.name === "Mute's")
        
        if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("Kullanıcı muteli değil!");

        await toMute.removeRole(role);
        message.channel.sendMessage("Kullanıcının mutesi kaldırırldı!");

        message.delete();

     }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['susturma'],
  permLevel: 0
};

module.exports.help = {
  name: 'unmute',
  description: 'Yapimcimi Gosterir.',
  usage: 'yapimcim'
};