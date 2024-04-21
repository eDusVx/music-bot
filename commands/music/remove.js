const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'remove',
    description: "Remove uma musica da fila",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'the name/url of the track you want to remove',
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

        const number =  inter.options.getNumber('number')
        const track = inter.options.getString('song');

const queue = useQueue(inter.guild);

        if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Nenhuma musica tocando ${inter.member}... tente novamente ? ❌`, ephemeral: true });
        if (!track && !number) inter.editReply({ content: `You have to use one of the options to remove a song ${inter.member}... tente novamente ? ❌`, ephemeral: true });

        const BaseEmbed = new EmbedBuilder()
        .setColor('#2f3136')


        if (track) {
            const track_to_remove = queue.tracks.toArray().find((t) => t.title === track || t.url === track);
            if (!track_to_remove) return inter.editReply({ content: `Não foi possivel encontrar ${track} ${inter.member}...tente usar o nome completo ou url da musica ? ❌`, ephemeral: true });
            queue.removeTrack(track_to_remove);
            BaseEmbed.setAuthor({name: `${track_to_remove.title} Removida da fila ✅` })

            return inter.editReply({ embeds: [BaseEmbed] });
        }

        if (number) {

            const index = number - 1
            const trackname = queue.tracks.toArray()[index].title

            if (!trackname) return inter.editReply({ content: `Essa musica parece nao existir na fila ${inter.member}...  tente novamente ?❌`, ephemeral: true });   

            queue.removeTrack(index);

            BaseEmbed.setAuthor({name: `${trackname} Removida da fila ✅` })

            return inter.editReply({ embeds: [BaseEmbed] });
        }


         
    }
}
