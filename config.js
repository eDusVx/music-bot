module.exports = {
    app: {
        token: 'MTIzMTQzODkwNzc0OTQzNzUzMA.GdFRVd.-kvR-IFWa1A3XyS7hbgCxF3s_NREbGulzRSvOU',
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
