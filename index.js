const Discord = require('discord.js');
const bot = new Discord.Client();
const token = ('NzY0MTk1MjkxNzkyNDA4NTc3.X4CuUw.4UgojIQOepHdPEb1RSh0APtYDZU');
const prefix = ('-');
const Chat = ('771950986465771532');
const ms = require('ms'); 
var http = require('http');  

http.createServer(function (req, res) {   
  res.write("I'm alive");   
  res.end(); 
}).listen(8080);

bot.on('ready', () => {

  console.log('Your Bot is now Online.')
  let activities = [`Watching what pepsi is doing breh -download`, `-download`   ],i = 0;

  setInterval(() => bot.user.setActivity(`${activities[i++ %  activities.length]}`,  {type:"STREAMING",url:"https://www.twitch.tv/lobanjicaa"  }), 599)
})

bot.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

bot.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});
bot.login(token);
