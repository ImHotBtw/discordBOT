const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('Your discordbots.org token', client);
const shorten = require("isgd")

let statuses = ["with extasy.xyz","with my prefix: =", `with ${client.guilds.size} servers!`, `with ${client.users.size} users!`, "Version 1.5.6"]
let activites = ["dnd", "online", "idle"]

dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
  setInterval(function() {
      let activity = activites[Math.floor(Math.random()*activites.length)]
      client.user.setStatus(activity)
    }, 30000)
    setInterval(function() {
      let status = statuses[Math.floor(Math.random()*statuses.length)]
      client.user.setActivity(status)
    }, 30000)
    setInterval(function() {
    client.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD', 'MENTION_EVERYONE'])
    console.log(`Generated bot invite link: ${link}`)
    }, 18000000)
    setInterval(function() {
    console.log(client.uptime)
    }, 1800000)
})
client.on('channelCreate', () => {
        const channel = message.guild.channels.find(ch => ch.name === '〖🌂〗staff-logs')
        let botembed = new Discord.RichEmbed()
        .setTitle("Channel Created")
        .setColor("#000000")
        .addField("A channel has been created.")
        .setDescription(`Channel: ${channel}`)
        .setTimestamp()
        .setFooter("Made by Flix#8105")
        .setAuthor("Flix#8105")
        return client.channels.get(channel.id).send(botembed);
})
client.on('channelDelete', () => {
        const channel = message.guild.channels.find(ch => ch.name === '〖🌂〗staff-logs')
        let botembed = new Discord.RichEmbed()
        .setTitle("Channel Deleted")
        .setColor("#000000")
        .addField("A channel has been deleted.")
        .setDescription(`Channel: ${channel}`)
        .setTimestamp()
        .setFooter("Made by Flix#8105")
        .setAuthor("Flix#8105")
        return client.channels.get(channel.id).send(botembed);
})
client.on('channelUpdate', () => {
        const channel = message.guild.channels.find(ch => ch.name === '〖🌂〗staff-logs')
        let botembed = new Discord.RichEmbed()
        .setTitle("Channel Updated")
        .setColor("#000000")
        .addField("A channel has been updated.")
        .setDescription(`Old Channel: ${oldChannel}\nNew Channel: ${newChannel}`)
        .setTimestamp()
        .setFooter("Made by Flix#8105")
        .setAuthor("Flix#8105")
        return client.channels.get(channel.id).send(botembed);
})
client.on('guildBanAdd', () => {
        const channel = member.guild.channels.find(ch => ch.name === '〖🌂〗staff-logs')
        let botembed = new Discord.RichEmbed()
        .setTitle("Guild Member Banned")
        .setColor("#000000")
        .addField("A guild member has been banned.")
        .setDescription(`Guild: ${guild}\nUser: ${user}`)
        .setTimestamp()
        .setFooter("Made by Flix#8105")
        .setAuthor("Flix#8105")
        return client.channels.get(channel.id).send(botembed);
})
client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find(ch => ch.name === '〖👋〗welcome-goodbye')
        let botembed = new Discord.RichEmbed()
        .setTitle(`Goodbye!`)
        .setColor("#000000")
        .setDescription(`It's sad to see you go, ${member}!\nMember: ${member}`)
        .setTimestamp()
        .setFooter("Made by Flix#8105")
        .setAuthor("Flix#8105")
        return client.channels.get(channel.id).send(botembed);
})
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === '〖👋〗welcome-goodbye')
        let botembed = new Discord.RichEmbed()
        .setTitle(`Goodbye!`)
        .setColor("#000000")
        .setDescription(`It's sad to see you go, ${member}!\nMember: ${member}`)
        .setTimestamp()
        .setFooter("Made by Flix#8105")
        .setAuthor("Flix#8105")
        return client.channels.get(channel.id).send(botembed);
})
client.on("guildCreate", guild => {
  console.log(`New guild added : ${guild.name}, owned by ${guild.owner.user.username}`);
});
client.on('message', (message) => {
    if (message.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
    
    if (message.content.startsWith("=")) {
        processCommand(message)
    }
})

function processCommand(message) {
    let fullCommand = message.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments

    if (primaryCommand == "help") {
        helpCommand(arguments, message)
    } else if (primaryCommand == "ping") {
        pingCommand(arguments, message)
    } else if (primaryCommand == "kick") {
        kickCommand(arguments, message)
    } else if (primaryCommand == "ban") {
        banCommand(arguments, message)
    } else if (primaryCommand == "8ball") {
        eightballCommand(arguments, message)
    } else if (primaryCommand == "eval") {
        evalCommand(arguments, message)
    } else if (primaryCommand == "avatar") {
        avatarCommand(arguments, message)
    } else if (primaryCommand == "multiply") {
        multiplyCommand(arguments, message)
    } else if (primaryCommand == "coinflip") {
        coinflipCommand(arguments, message)
    } else if (primaryCommand == "setusername") {
        setusernameCommand(arguments, message)
    } else if (primaryCommand == "warn") {
      warnCommand(arguments, message)
    } else if (primaryCommand == "invite") {
      inviteCommand(arguments, message)
    } else if (primaryCommand == "shorten") {
      shortenCommand(arguments, message)
    } else if (primaryCommand == "botinfo") {
      botinfoCommand(arguments, message)
    } else if (primaryCommand == "serverinfo") {
      serverinfoCommand(arguments, message)
    } else if (primaryCommand == "purge") {
      purgeCommand(arguments, message)
    } else if (primaryCommand == "developer") {
      developerCommand(arguments, message)
    } else if (primaryCommand == "edit") {
      editCommand(arguments, message)
    } else if (primaryCommand == "permissions") {
      permissionsCommand(arguments, message)
    } else if (primaryCommand == "uptime") {
      uptimeCommand(arguments, message)
    } else if (primaryCommand == "restart") {
      restartCommand(arguments, message)
    } else {
      message.channel.send("Hey! That doesn't seem right! Prefix: =")
    }
}
function helpCommand(arguments, message) {
    if (arguments.length > 0) {
        console.log("Sent help command!")
        message.react("✅")
        let botembed = new Discord.RichEmbed()
        .setTitle("Commands")
        .setColor("#000000")
        .setDescription("**,help** - List of all commands\n**,ping** - Ping!\n**,kick** - Kick a member\n**,ban** - Ban a member\n**,8ball** - The Mysterious Magic 8Ball\n**,eval** - Eval Javascript code\n**,avatar** - Check an avatar\n**,setusername** - Set the bot's username\n**,shorten** - Shorten a link\n**,botinfo** - Show the bot info\n**,serverinfo** - Show the server info\n**,purge** - Purge messages\n**,developer** - Developer commands\n**\n**,permissions** - Show a user's permissions\n**,uptime** - Show the bot uptime\n**,invite** - Invite the bot")
        .setTimestamp()
        .setFooter("Made by Flix#8105")
        .setAuthor("Flix#8105")
        return message.channel.send(botembed)
    } else {
        console.log("Sent help command!")
        message.react("✅")
        let botembed = new Discord.RichEmbed()
        .setTitle("Commands")
        .setColor("#000000")
        .setDescription("**,help** - List of all commands\n**,ping** - Ping!\n**,kick** - Kick a member\n**,ban** - Ban a member\n**,8ball** - The Mysterious Magic 8Ball\n**,eval** - Eval Javascript code\n**,avatar** - Check an avatar\n**,setusername** - Set the bot's username\n**,shorten** - Shorten a link\n**,botinfo** - Show the bot info\n**,serverinfo** - Show the server info\n**,purge** - Purge messages\n**,developer** - Developer commands\n**\n**,permissions** - Show a user's permissions\n**,uptime** - Show the bot uptime\n**,invite** - Invite the bot")
        .setTimestamp()
        .setFooter("Made by Flix#8105")
        .setAuthor("Flix#8105")
        return message.channel.send(botembed)
    }
}

function multiplyCommand(arguments, receivedMessage) {
    if (arguments.length < 2) {
        console.log("Sent multiply command! Not enough values. :(")
        receivedMessage.channel.send("Not enough values to multiply. Try `>multiply 2 4 10` or `>multiply 5.2 7`")
        return
    }
    console.log("Sent multiply command!")
    let product = Math.floor(Math.random() * 8) + 1
    arguments.forEach((value) => {
        product = product * parseFloat(value)
    })
    receivedMessage.channel.send("The product of " + arguments + " multiplied together is: " + product.toString())
}
function pingCommand(arguments, message) {
    if (arguments.length > 0) {
        console.log("Sent ping command!")
    message.channel.send("Pong! `" + Math.round(client.ping) + " ms!`")
    } else {
    console.log("Sent ping command!")
    message.channel.send("Pong! `" + Math.round(client.ping) + " ms!`")
    }
}
function uptimeCommand(arguments, message) {
  message.channel.send("Uptime: `" + client.uptime + " ms!`")
}
function permissionsCommand(arguments, message) {
  console.log("Sent permissions command!")
  const user = message.mentions.users.first()
    if (user) {
      const member = message.guild.member(user)
      if (member) {
        message.channel.send(`${member}'s Permissions!`)
        message.channel.send("`" + message.channel.permissionsFor(member.user).toArray().join("\n") + "`")
        }
    } else {
      message.channel.send(message.author + "'s Permissions!")
      message.channel.send("`" + message.channel.permissionsFor(message.member).toArray().join("\n") + "`")
    }
}
function botinfoCommand(arguments, message) {
  console.log("Sent botinfo command!")
        let botembed = new Discord.RichEmbed()
        .setTitle("Bot Info")
        .setColor("#000000")
        .addField("Bot Name:", "Extasy.xyz")
        .addField("Bot Author:", "Flix#8105")
        .addField("Bot Uptime (in miliseconds):", client.uptime)
        .addField("Bot Ping:", (Math.round(client.ping)))
        .addField("Servers:", client.guilds.size)
        .addField("Users:", client.users.size)
        .setTimestamp()
        .setFooter("Made by Flix#8105")
        .setAuthor("Flix#8105")
        return message.channel.send(botembed)
}
function serverinfoCommand(arguments, message) {
  console.log("Sent serverinfo command!")
        let botembed = new Discord.RichEmbed()
        .setTitle("Server Info")
        .setColor("#000000")
        .addField("Server Owner:", `${message.guild.owner}`)
        .addField("Server Owner ID:", `${message.guild.owner.id}`)
        .addField("Server ID:", `${message.guild.id}`)
        .addField("Server Name:", `${message.guild.name}`)
        .addField("Server Icon:", `${message.guild.iconURL}`)
        .addField("Server Roles:", `${message.guild.roles.size}`)
        .addField("Server Region:", `${message.guild.region}`)
        .addField("Server Created On:", `${message.guild.createdAt}`)
        .addField("You Joined On:", `${message.guild.joinedAt}`)
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        .setFooter("Made by Flix#8105")
        .setAuthor("Flix#8105")
        return message.channel.send(botembed)
}
function purgeCommand(arguments, message) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permission!")
  console.log("Sent purge command!")
  if (isNaN(arguments[0])) return message.channel.send("**Please supply a __valid__ amount of messages to purge!** Must be less than 1000.")
  if (arguments[0] > 1000) return message.channel.send("**Please supply a number __less than__ 1000.")
  
  message.channel.bulkDelete(arguments[0])
  .then(messages => message.channel.send(`Cleared \`${messages.size}/${arguments[0]}\` messages!`)
  .then(message => message.delete({ timeout : 10000 })))
  .catch(error => message.channel.send(`**Error**: ${error.message}`))
}
function shortenCommand(arguments, message) {
  if (!arguments[1]) {
  shorten.shorten(arguments[0], function(res) {
  if (res.startsWith("Error:")) return message.channel.send("**Please enter a __valid__ URL!**")
  
    message.channel.send(`**${res}**`)
    
  })
  } else {
    
    shorten.custom(arguments[0], arguments[1], function(res) {
    
    if (res.startsWith("Error:")) return message.channel.send(`**${res}**`)
      
    message.channel.send(`**${res}**`)  
      
    })
    
  }
}
function inviteCommand(arguments, message) {
    if (arguments.length > 0) {
      console.log("Sent invite command!")
      message.channel.send("Invite the bot: https://discordapp.com/oauth2/authorize?client_id=559743007742754826&scope=bot")
    } else {
    console.log("Sent invite command!")
    message.channel.send("Invite the bot: https://discordapp.com/oauth2/authorize?client_id=559743007742754826&scope=bot")
    }
}
function restartCommand(arguments, message) {
  resetBot(message.channel);
}
function kickCommand(arguments, message) {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have permission!")
    const user = message.mentions.users.first()
    if (user) {
      const member = message.guild.member(user)
      if (member) {
        member.kick('Made by Flix#8105!').then(() => {
          message.reply("Successfully kicked `" + user.tag + "`!")
        }).catch(err => {
          message.reply("I was unable to kick the member.")
          console.error(err)
        });
      } else {
        message.reply("That user isn't in this server!")
      }
    } else {
      message.reply("You didn't mention the user to kick!")
    }
  }
function warnCommand(arguments, message) {
let reason = arguments.slice(1).join(' ');
  const user = message.mentions.users.first();
  const modlog = member.guild.channels.find(ch => ch.name === 'staff-logs')
  if (!modlog) return message.reply('I cannot find the logs channel.');
  if (reason.length < 1) return message.reply('You must supply a reason for the warning.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription("**Action:** Warning\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}");
  return bot.channels.get(modlog.id).send({embed});
  message.channel.send(user.tag + ` - have recived a warning for: ` + reason + ` - from: ` + message.author.tag);
  }
function banCommand(arguments, message) {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission!")
    const user = message.mentions.users.first()
    if (user) {
      const member = message.guild.member(user)
      if (member) {
        member.ban('Made by Flix#8105!').then(() => {
          message.reply("Successfully killed `" + user.tag + "`!")
        }).catch(err => {
          message.reply("I was unable to kill the member.")
          console.error(err)
        });
      } else {
        message.reply("That user isn't in this server!")
      }
    } else {
      message.reply("Who do you want me to kill?")
    }
  }
function coinflipCommand(arguments, message) {
    var coinflip = [
                "Heads",
                "Tails"
];
var coinflips = coinflip[Math.floor(Math.random() *coinflip.length)];
  message.channel.send("Flipping...")
    message.channel.send(coinflips)
}
function evalCommand(arguments, message) {
if(message.author.id !== "717362541445120072") return message.channel.send("You do not have permission to use developer commands! DM Flix#8105 if you think this is wrong.")
    try {
      var code = arguments.join(" ");
      var evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.sendCode("x1", clean(evaled));
    } catch (err) {
      message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
function developerCommand(arguments, message) {
   if(message.author.id !== "717362541445120072") return message.channel.send("You do not have permission to use developer commands! DM Flix#8105 if you think this is wrong.")
   let botembed = new Discord.RichEmbed()
        .setTitle("Developer Tools")
        .setColor("#000000")
        .addField("Edit Guild: (1-10)", `${message.guild.name}`)
        .setFooter("Made by Flix#8105")
        .setAuthor("Flix#8105")
        return message.channel.send(botembed)
  }
function avatarCommand(arguments, message) {
    if (arguments.length > 0) {
        console.log("Sent avatar command!")
        message.reply(message.author.avatarURL)
    } else {
        console.log("Sent avatar command!")
        message.reply(message.author.avatarURL)
    }
}
function editCommand(arguments, message) {
  if(message.author.id !== "762599488723746826") return message.channel.send("You do not have permission to use developer commands! DM Flix#8105 if you think this is wrong.")
  message.author.send("https://glitch.com/edit/#!/join/1c950e1d-af7f-41c6-a99c-3882199b632b")
  message.channel.send("Sent the editing link to your DM's!")
}
function setusernameCommand(arguments, message) {
  let username = arguments.join(' ');
      if (username.length < 1) return message.reply('You must supply a name for the bot.').catch(console.error);
      if (!message.guild.member(client.user).hasPermission('CHANGE_NICKNAME')) return message.channel.sendMessage('I do not have the required permissions!').catch(console.error);
      message.guild.members.get('559743007742754826').setNickname(username);
                message.reply('Username set!').catch(console.error);
}
function eightballCommand(arguments, message) {
  eightrand = Math.floor(Math.random() * 21)
  console.log(eightrand)
  if (eightrand == "1") {
    message.channel.send("It is certain.")
    console.log("It is certain.")
  }
    if (eightrand == "2") {
    message.channel.send("It is decidedly so.")
    console.log("It is decidedly so.")
  }
    if (eightrand == "3") {
    message.channel.send("Without a doubt.")
    console.log("Without a doubt.")
  }
    if (eightrand == "4") {
    message.channel.send("Yes - definitely.")
    console.log("Yes - definitely.")
  }
    if (eightrand == "5") {
    message.channel.send("You may rely on it.")
    console.log("You may rely on it.")
  }
    if (eightrand == "6") {
    message.channel.send("As I see it, yes.")
    console.log("As I see it, yes.")
  }
    if (eightrand == "7") {
    message.channel.send("Most likely.")
    console.log("Most likely.")
  }
    if (eightrand == "8") {
    message.channel.send("Outlook good.")
    console.log("Outlook good.")
  }
    if (eightrand == "9") {
    message.channel.send("Yes.")
    console.log("Yes.")
  }
    if (eightrand == "10") {
    message.channel.send("Signs point to yes.")
    console.log("Signs point to yes.")
  }
    if (eightrand == "11") {
    message.channel.send("Reply hazy, try again.")
    console.log("Reply hazy, try again.")
  }
    if (eightrand == "12") {
    message.channel.send("Ask again later.")
    console.log("Ask again later.")
  }
  if (eightrand == "13") {
    message.channel.send("Better not tell you now.")
    console.log("Better not tell you now.")
  }
  if (eightrand == "14") {
    message.channel.send("Cannot predict now.")
    console.log("Cannot predict now.")
  }
  if (eightrand == "15") {
    message.channel.send("Concentrate and ask again.")
    console.log("Concentrate and ask again.")
  }
  if (eightrand == "16") {
    message.channel.send("Don't count on it.")
    console.log("Don't count on it.")
  }
  if (eightrand == "17") {
    message.channel.send("My reply is no.")
    console.log("My reply is no.")
  }
  if (eightrand == "18") {
    message.channel.send("My sources say no.")
    console.log("My sources say no.")
  }
  if (eightrand == "19") {
    message.channel.send("Outlook not so good.")
    console.log("Outlook not so good.")
  }
  if (eightrand == "20") {
    message.channel.send("Very doubtful.")
    console.log("Very doubtful.")
  }}
client.login("NzYyNjQxMjgwNTg4ODQxMDAx.X3sHCg.yj1sFu295W4NvY7t0Vp8QTpK9TI")
