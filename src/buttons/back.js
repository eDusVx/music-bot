module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Nenhuma musica tocando tente novamente`, ephemeral: true });

    if (!queue.history.previousTrack) return inter.editReply({ content: `Não tem nenhuma música antes dessa tente novamente `, ephemeral: true });

    await queue.history.back();

    inter.editReply({ content:`Tocando a música anterior ✅`, ephemeral: true});
}
