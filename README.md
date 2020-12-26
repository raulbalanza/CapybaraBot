# CapybaraBot
Discord bot for getting information and pictures about the cutest animal in the world: the **Capybara**.

<p align="center">
  <img src="https://theraulxp.es/legacy/capybara_bot.png">
</p>

## Usage

To use the bot in your Discord server, you can follow **our join link** or you can **deploy your own instance** (see the *Deployment* section).

[Click here to make *CapybaraBot* join your server](https://discord.com/api/oauth2/authorize?client_id=792482583278649354&permissions=8&scope=bot)

## Deployment

To get this bot up and running, the next steps must be followed:

1. Clone the repository ( ```git clone https://github.com/raulbalanza/CapybaraBot.git``` )
2. ```cd``` into the repository folder and install Node modules ( ```npm install``` )
3. Get a Discord API key and place it in the corresponding string of the ```config.json``` file ([Guide](https://www.digitalocean.com/community/tutorials/how-to-build-a-discord-bot-with-node-js-es))
4. Start the bot running ```node index.js```

## Commands

The bot currently support the following commands:

| Command                       | Response
| ---------------------------- | -----------
| `&capy`                 | Returns the latency of the sent message.
| `&capybara`                 | Prints a random image of a capybara from one of the implemented image sources.

## Data sources

This is the current data source list that the bot uses:

- Images
  - [Flickr](https://www.flickr.com/search/?text=capybara)