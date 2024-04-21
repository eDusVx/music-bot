const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { useMainPlayer, useQueue } = require('discord-player');

module.exports = {
    name: 'nowplaying',
    description: 'Ver qual a música que está tocando!',
    voiceChannel: true,

    execute({ inter }) {
const queue = useQueue(inter.guild);
        const player = useMainPlayer()

        if (!queue) return inter.editReply({ content: `Nenhuma musica tocando ${inter.member}... tente novamente ? ❌`, ephemeral: true });

        const track = queue.currentTrack;

        const methods = ['disabled', 'track', 'queue'];

        const timestamp = track.duration;

        const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

        const progress = queue.node.createProgressBar();
        

        const embed = new EmbedBuilder()
        .setAuthor({ name: track.title,  iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })})
        .setThumbnail(track.thumbnail)
        .setDescription(`Volume **${queue.node.volume}**%\nDuração **${trackDuration}**\nProgresso ${progress}\nModo Loop **${methods[queue.repeatMode]}**\nRequisitada por ${track.requestedBy}`)
        .setFooter({ text: 'Enzo ❤️', iconURL: inter.member.avatarURL({ dynamic: true })})
        .setColor('#2f3136')
        .setTimestamp()

        const saveButton = new ButtonBuilder()
        .setLabel('Salvar musica')
        .setCustomId(JSON.stringify({ffb: 'savetrack'}))
        .setStyle('Danger')

        const volumeup = new ButtonBuilder()
        .setLabel('Aumentar volume')
        .setCustomId(JSON.stringify({ffb: 'volumeup'}))
        .setStyle('Primary')

        const volumedown = new ButtonBuilder()
        .setLabel('Abaixar volume')
        .setCustomId(JSON.stringify({ffb: 'volumedown'}))
        .setStyle('Primary')

        const loop = new ButtonBuilder()
        .setLabel('Loop')
        .setCustomId(JSON.stringify({ffb: 'loop'}))
        .setStyle('Danger')

        const resumepause = new ButtonBuilder()
         .setLabel('Resumir/Pausar')
         .setCustomId(JSON.stringify({ffb: 'resumepause'}))
         .setStyle('Success')



        const row = new ActionRowBuilder().addComponents(volumedown, saveButton, resumepause, loop, volumeup);

         inter.editReply({ embeds: [embed], components: [row] });
    },
};
