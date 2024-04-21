const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'stop',
    description: 'Para a reprodução da musica atual',
    voiceChannel: true,

    execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

        if (!queue || !queue.isPlaying()) return inter.editReply({ content:`Nenhuma musica tocando ${inter.member}... tente novamente ? ❌`, ephemeral: true });

        queue.delete();

        const StopEmbed = new EmbedBuilder()
        .setColor('#2f3136')
        .setAuthor({name: `Musica acabou nessa porra ✅` })


       return inter.editReply({ embeds: [StopEmbed] });

    },
};