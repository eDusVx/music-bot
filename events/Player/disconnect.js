const { EmbedBuilder } = require('discord.js');

module.exports = (queue) => {

 const Disconnect = new EmbedBuilder()
    .setAuthor({name: `Desconectado da sala, limpando a fila! ❌`})
    .setColor('#2f3136')

queue.metadata.send({ embeds: [Disconnect] })
}
