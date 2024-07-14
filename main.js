const express = require('express');
const { Player } = require('discord-player');
const Genius = require("genius-lyrics");
const { Client, GatewayIntentBits } = require('discord.js');

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
player.extractors.loadDefault();

require('./src/loader');

client.login(client.config.app.token);

// Criar uma instância do servidor express
const app = express();
const PORT = process.env.PORT;

// Rota "hello world" simples
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Iniciar o servidor na porta especificada
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
