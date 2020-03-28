const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Müzik Komutlar**", "v!müzik (isim-url) = Şarkı açar \nv!geç = Sonraki şarkıya geçer \nv!ses (Ses seviyesi) = Şarkının ses seviyesini değiştirir \nv!durdur = Şarkıyı durdurur")                                                    
  .addField("**Eğlence Komutları**", "v!çayiç = Çay içer \nv!yıkıkkim = dc deki yıkığı bulur \nv!kaçcm = Malafatını ölçer \nv!espri = Espri yapar \nv!aşkölçer = Aşk ölçer \nv!dc = Doğruluk Cesaretlik Oynatır \nv!8ball = Sorunuza cevap verir \n")                                                                  
  .addField("**Yapımcı**", " **Deuxcharen#0001**")
  .setFooter('**--------------------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};