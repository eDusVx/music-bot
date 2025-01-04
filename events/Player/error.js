const { EmbedBuilder } = require('discord.js');

module.exports = (queue, error) => {
    const thumbnailUrl = queue?.currentTrack?.thumbnail || 'https://example.com/default-thumbnail.png';

    const ErrorEmbed = new EmbedBuilder()
        .setAuthor({
            name: 'Bot had an unexpected error, please check the console imminently!',
            iconURL: thumbnailUrl,
        })
        .setColor('#EE4B2B')
        .setDescription(`Error Message: ${error.message}`);

    if (queue?.metadata && typeof queue.metadata.send === 'function') {
        queue.metadata.send({ embeds: [ErrorEmbed] }).catch(err => {
            console.error('Failed to send error embed:', err.message);
        });
    } else {
        console.error('Metadata is missing or invalid. Unable to send embed.');
    }

    console.error(`Error emitted from the Bot: ${error.message}`);
    console.error('Full Error:', error);
};
