const maxVol = client.config.opt.maxVol;
module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Nenhuma musica tocando no momento... tente novamente ? ❌`, ephemeral: true });

    const vol = Math.floor(queue.node.volume + 5)

    if (vol > maxVol ) return inter.editReply({ content: `Não posso aumentar mais o volume ${inter.member}... tente novamente ? ❌`, ephemeral: true })

    if (queue.node.volume === vol) return inter.editReply({ content: `O volume que você quer colocar já é o atual ${inter.member}... tente novamente ? ❌`, ephemeral: true });

    const success = queue.node.setVolume(vol);

    return inter.editReply({ content: success ? `O volume foi modificado para ${vol}/${maxVol}% 🔊` : `Algum erro ocorreu ${inter.member}... tente novamente ? ❌`, ephemeral: true});
}