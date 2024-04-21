const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'resume',
    description: 'Começa a tocar a musica',
    voiceChannel: true,

    execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

        if (!queue) return inter.editReply({ content: `Nenhuma musica tocando ${inter.member}... tente novamente ? ❌`, ephemeral: true });
        

        if(queue.node.isPlaying()) return inter.editReply({content: `A musica já está tocando, ${inter.member}... tente novamente ? ❌`, ephemeral: true})

        const success = queue.node.resume();
        
        const ResumeEmbed = new EmbedBuilder()
        .setAuthor({name: success ? `Musica ${queue.currentTrack.title} resumida ✅` : `Algo de errado aconteceu ${inter.member}... tente novamente ? ❌` })
        .setColor('#2f3136')
        
        return inter.editReply({ embeds: [ResumeEmbed] });

    },
};
