const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'skip',
    description: 'Pula a musica atual',
    voiceChannel: true,

    execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

         if (!queue || !queue.isPlaying()) return inter.editReply({ content:`Nenhuma musica tocando ${inter.member}... tente novamente ? ❌`, ephemeral: true });

        const success = queue.node.skip();

        const SkipEmbed = new EmbedBuilder()
        .setColor('#2f3136')
        .setAuthor({name: success ? `Musica ${queue.currentTrack.title} pulada ✅` : `Algo de errado aconteceu ${inter.member}... tente novamente ? ❌` })


       return inter.editReply({ embeds: [SkipEmbed] });

    },
};