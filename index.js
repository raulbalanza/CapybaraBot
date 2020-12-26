const Discord = require("discord.js");
const config = require("./config.json");
const fetch = require('node-fetch');

const client = new Discord.Client();

client.on("message", function (message) {

    if (message.author.bot) return;
    if (!message.content.startsWith(config.PREFIX)) return;

    const commandBody = message.content.slice(config.PREFIX.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "capy") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Bara! This message had a latency of ${timeTaken}ms.`);
    }

    if (command === "capybara") {

        let url = "https://api.flickr.com/services/feeds/photos_public.gne?tags=capybara&tagmode=any&format=json";

        fetch(url, { method: 'GET' })
            .then(res => res.text())
            .then(text => {
                const data = JSON.parse(text.substring(text.indexOf("(") + 1, text.length - 1));

                let rnd = Math.floor(Math.random() * data.items.length);
                let image_src = data.items[rnd]['media']['m'].replace("_m", "_b");

                console.log(image_src);
                message.reply(`here you go! (${image_src})`);
            })

    }
});

client.login(config.BOT_TOKEN)
    .then(() => { console.log("Connected!"); })
    .catch((e) => console.log(e));