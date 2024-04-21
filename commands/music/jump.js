const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue } = require('discord-player');

module.exports = {
    name: 'jump',
    description: "Pula para um musica especifica na fila",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'the name/url of the track you want to jump to',
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
        if (!track && !number) inter.editReply({ content: `Voce deve usar uma das opcoes para pular para outra musica especifica ${inter.member}... tente novamente ? ❌`, ephemeral: true });

            if (track) {
                const track_to_jump = queue.tracks.toArray().find((t) => t.title.toLowerCase() === track.toLowerCase() || t.url === track)
                if (!track_to_jump) return inter.editReply({ content: `Nao foi possivel encontrar ${track} ${inter.member}... tente usar o nome completo ou url da musica ? ❌`, ephemeral: true });
                queue.node.jump(track_to_jump);
                return inter.editReply({ content: `Pulado para ${track_to_jump.title}  ✅` });
    }
    if (number) {
        const index = number - 1
        const trackname = queue.tracks.toArray()[index].title
        if (!trackname) return inter.editReply({ content: `Essa musica parece nao existir ${inter.member}...  tente novamente ?❌`, ephemeral: true });   
        queue.node.jump(index);

        const JumpEmbed = new EmbedBuilder()
        .setAuthor({name: `Pulado para ${trackname} ✅`})
        .setColor('#2f3136')
        
        inter.editReply({ embeds: [JumpEmbed] });
    }
         
    }
}
