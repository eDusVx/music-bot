module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Nenhuma musica tocando tente novamente`, ephemeral: true });
    
    const success = queue.node.skip();

    return inter.editReply({ content: success ? `A musica ${queue.currentTrack.title} foi pulada` : `Algo de errado ocorreu ${inter.member}... tente novamente ? ❌`, ephemeral: true});
}