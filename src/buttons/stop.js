const { EmbedBuilder } = require('discord.js');
module.exports = async ({ client, inter, queue }) => { 
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Nnehuma musica tocando ... tente novamente ? ❌`, ephemeral: true });

    queue.delete();

        const StopEmbed = new EmbedBuilder()
        .setColor('#2f3136')
        .setAuthor({name: `Acabou a música nessa porra ✅` })


       return inter.editReply({ embeds: [StopEmbed], ephemeral: true });

}