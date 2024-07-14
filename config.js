require('dotenv').config();
console.log(process.env)
console.log(process.env.TOKEN)
module.exports = {
    app: {
        token: process.env.TOKEN,
        playing: 'Enzo 👍',
        global: true,
        guild: false,
        ExtraMessages: false,
        loopMessage: false,
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 300000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 300000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
