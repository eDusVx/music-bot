const { EmbedBuilder } = require('discord.js');
module.exports = async ({ client, inter, queue }) => { 
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Nnehuma musica tocando ... tente novamente ? ❌`, ephemeral: true });

    if (!queue.tracks.toArray()[0]) return inter.editReply({ content: `Nenhuma musica na queue depois dessa ${inter.member}... tente novamente ? ❌`, ephemeral: true });

        await queue.tracks.shuffle();

        const ShuffleEmbed = new EmbedBuilder()
        .setColor('#2f3136')
        .setAuthor({name: `Lista embarahada  ${queue.tracks.size} musicas! ✅` })


       return inter.editReply({ embeds: [ShuffleEmbed], ephemeral: true});
}