require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.GuildMember, Partials.Message, Partials.User],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true },
});

client.once('ready', () => {
    console.log(`[INFO] Logged in as ${client.user.tag}`);
});

client.login(process.env.TOKEN);
