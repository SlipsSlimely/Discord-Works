module.exports = {
    name: 'timerole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, Client) {
        const channel = '855183208962719824';

        const naRole = message.guild.roles.cache.find(role => role.name === "north america");
        const saRole = message.guild.roles.cache.find(role => role.name === "south america");
        const weRole = message.guild.roles.cache.find(role => role.name === "western europe");
        const ruRole = message.guild.roles.cache.find(role => role.name === "eastern europe/russia");
        const afRole = message.guild.roles.cache.find(role => role.name === "africa");
        const eaRole = message.guild.roles.cache.find(role => role.name === "eastern asia/pacific islands");
        const auRole = message.guild.roles.cache.find(role => role.name === "australia");
        const meRole = message.guild.roles.cache.find(role => role.name === "middle east");
        const inRole = message.guild.roles.cache.find(role => role.name === "south asia/india");
        
 

        //const maleEmoji = '🇭';
        const naEmoji = ('🇺🇸'); //north america
        const saEmoji = ('🇺🇾'); //south america
        const weEmoji = ('🇫🇷'); //western europe
        const ruEmoji = ('🇷🇺'); //russia
        const afEmoji = ('🇿🇦'); //africa
        const eaEmoji = ('🇯🇵'); //east asia
        const auEmoji = ('🇦🇺'); //australia
        const meEmoji = ('🇱🇧'); //middle east
        const inEmoji = ('🇮🇳'); //india
        
        '<a:Sneed:783268747061362699>'
 
        let embed = new Discord.MessageEmbed()
            .setColor('#ebe873')
            //.setTitle('Select Your roles!')
            .setDescription('**Select an emote below to set your location tags:**\n\n'

                + `${naEmoji} for North America\n`
                + `${saEmoji} for South America\n`
                + `${weEmoji} for Western Europe\n`
                + `${ruEmoji} for Eastern Europe/Russia\n`
                + `${afEmoji} for Africa\n`
                + `${eaEmoji} for Eastern Asia/Pacific Islands\n`
                + `${auEmoji} for Australia\n`
                + `${meEmoji} for Middle East\n`
                + `${inEmoji} for South Asia/India`);
 
        let messageEmbed = await message.channel.send(embed);

        messageEmbed.react(naEmoji)
        messageEmbed.react(saEmoji);
        messageEmbed.react(weEmoji);
        messageEmbed.react(ruEmoji);
        messageEmbed.react(afEmoji);
        messageEmbed.react(eaEmoji);
        messageEmbed.react(auEmoji);
        messageEmbed.react(meEmoji);
        messageEmbed.react(inEmoji);
 
        Client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === naEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(naRole);
                }
                if (reaction.emoji.name === saEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(saRole);
                }
                if (reaction.emoji.name === weEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(weRole);
                }
                if (reaction.emoji.name === ruEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ruRole);
                }
                if (reaction.emoji.name === afEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(afRole);
                }
                if (reaction.emoji.name === eaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(eaRole);
                }
                if (reaction.emoji.name === auEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(auRole);
                }
                if (reaction.emoji.name === meEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(meRole);
                }
                if (reaction.emoji.name === inEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(inRole);
                }
            } else {
                return;
            }
 
        });
 
        Client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === naEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(naRole);
                }
                if (reaction.emoji.name === saEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(saRole);
                }
                if (reaction.emoji.name === weEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(weRole);
                }
                if (reaction.emoji.name === ruEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ruRole);
                }
                if (reaction.emoji.name === afEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(afRole);
                }
                if (reaction.emoji.name === eaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(eaRole);
                }
                if (reaction.emoji.name === auEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(auRole);
                }
                if (reaction.emoji.name === meEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(meRole);
                }
                if (reaction.emoji.name === inEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(inRole);
                }

            } else {
                return;
            }
        });
    }
 
}   