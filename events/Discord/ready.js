module.exports = async (client) => {
    console.log(`Logado em ${client.user.username}`);
    client.user.setActivity(client.config.app.playing);   
};