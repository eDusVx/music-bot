const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'skipto',
    description: "Pula para uma musica especifica na fila",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'the name/url of the track you want to skip to',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: 'number',
            description: 'the place in the queue the song is in',
            type: ApplicationCommandOptionType.Number,
            required: false,
        }
    ],

    async execute({ inter }) { 
        const player = useMainPlayer()

        const track = inter.options.getString('song');
        const number =  inter.options.getNumber('number')

const queue = useQueue(inter.guild);

        if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Nenhuma musica tocando ${inter.member}... tente novamente ? ❌`, ephemeral: true });
        if (!track && !number) inter.editReply({ content: `You have to use one of the options to jump to a song ${inter.member}... try again ? ❌`, ephemeral: true });

            if (track) {
                const track_skipto = queue.tracks.toArray().find((t) => t.title.toLowerCase() === track.toLowerCase() || t.url === track)
                if (!track_skipto) return inter.editReply({ content: `Nao foi possivel encontrar ${track} ${inter.member}... tente usar o nome completo ou url da musica ? ❌`, ephemeral: true });
                queue.node.skipTo(track_skipto);
                return inter.editReply({ content: `Jumped to ${track_skipto.title}  ✅` });
    }
    if (number) {
        const index = number - 1
        const trackname = queue.tracks.toArray()[index].title
        if (!trackname) return inter.editReply({ content: `Essa musica parece nao existir na fila ${inter.member}...  tente novamente ?❌`, ephemeral: true });   
        queue.node.skipTo(index);

        const skipToEmbed = new EmbedBuilder()
        .setAuthor({name: `Pulado para ${trackname} ✅`})
        .setColor('#2f3136')
        
        inter.editReply({ embeds: [skipToEmbed] });
    }
         
    }
}
