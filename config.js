module.exports = {
    app: {
        token: 'MTE2NDcyMTQ1MzE1MzkxMDc4NA.G0x5m7.6KISKvrxICt9S0I2b5BcUFKnfWODkmpEN_krJI',
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
