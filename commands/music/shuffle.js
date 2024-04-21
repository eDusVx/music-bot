const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'shuffle',
    description: 'Embaralha a fila de musicas',
    voiceChannel: true,

    async execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

        if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Nenhuma musica tocando ${inter.member}... tente novamente ? ❌`, ephemeral: true });

        if (!queue.tracks.toArray()[0]) return inter.editReply({ content: `Nenhuma musica na fila depois dessa ${inter.member}... tente novamente ? ❌`, ephemeral: true });

        await queue.tracks.shuffle();

        const ShuffleEmbed = new EmbedBuilder()
        .setColor('#2f3136')
        .setAuthor({name: `Fila embaralhada ${queue.tracks.size} musicas! ✅` })


       return inter.editReply({ embeds: [ShuffleEmbed] });
    },
};