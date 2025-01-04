const { Player } = require('discord-player');
const Genius = require("genius-lyrics");
const { Client, GatewayIntentBits } = require('discord.js');
const { DefaultExtractors } = require('@discord-player/extractor');
const express = require('express');

global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ],
    disableMentions: 'everyone',
});

client.config = require('./config');

const player = new Player(client, client.config.opt.discordPlayer);
global.genius = new Genius.Client();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

(async () => {
    await player.extractors.loadMulti(DefaultExtractors);
})();

require('./src/loader');

client.login(client.config.app.token);
