module.exports = async ({ inter, queue }) => {
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Nenhuma musica tocando tente novamente`, ephemeral: true });

    const resumed = queue.node.resume();
    let message = `Current music ${queue.currentTrack.title} resumed ✅`;
    
    if (!resumed) {
        queue.node.pause();
        message = `Current music ${queue.currentTrack.title} paused ✅`;
    }

    return inter.editReply({
        content: message, ephemeral: true
    });
}