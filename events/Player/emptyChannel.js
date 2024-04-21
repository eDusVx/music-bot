const { EmbedBuilder } = require('discord.js');
module.exports = (queue) => {

    const emptyChannel = new EmbedBuilder()
    .setAuthor({name: `Ninguem no canal de voz, adeus!`})
    .setColor('#2f3136')

queue.metadata.send({ embeds: [emptyChannel] })
}
