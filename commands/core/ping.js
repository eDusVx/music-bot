const ms = require('ms');

module.exports = {
    name: 'ping',
    description: "Mostra o ping do bot!",
    async execute({ client, inter }) {

        const m = await inter.editReply("Ping?")
        inter.editReply(`O ping do bot é de  ${Math.round(client.ws.ping)} calculado a ultima vez ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })}`)

    },
};