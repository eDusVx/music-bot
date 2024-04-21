const maxVol = client.config.opt.maxVol;
const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'volume',
    description: 'Ajusta o volume',
    voiceChannel: true,
    options: [
        {
            name: 'volume',
            description: 'the amount volume',
            type: ApplicationCommandOptionType.Number,
            required: true,
            minValue: 1,
            maxValue: maxVol
        }
    ],

    execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

        if (!queue) return inter.editReply({ content: `Nenhuma musica tocando ${inter.member}... tente novamente ? ❌`, ephemeral: true });
        const vol = inter.options.getNumber('volume')

        if (queue.node.volume === vol) return inter.editReply({ content: `O volume que voce quer já é o atual ${inter.member}... tente novamente ? ❌`, ephemeral: true });

        const success = queue.node.setVolume(vol);

       return inter.editReply({ content: success ? `Volume alterado para ${vol}/${maxVol}% 🔊` : `Algo de errado aconteceu ${inter.member}... tente novamente ? ❌` });
    },
};