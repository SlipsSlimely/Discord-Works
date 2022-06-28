module.exports = {
    name: 'genderrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '855183208962719824';

        const maleRole = message.guild.roles.cache.find(role => role.name === "he/him");
        const femaleRole = message.guild.roles.cache.find(role => role.name === "she/her");
        const neutralRole = message.guild.roles.cache.find(role => role.name === "they/them");
 

        //const maleEmoji = '🇭';
        const maleEmoji = '♂️';
        const femaleEmoji = '♀️';
        const neutralEmoji = '⭕';
        
    
 
        let embed = new Discord.MessageEmbed()
            .setColor('#ebe873')
            //.setTitle('Select Your roles!')
            .setDescription('**Select an emote below to set your pronoun tags:**\n\n'

                + `${maleEmoji} for he/him\n`
                + `${femaleEmoji} for she/her\n`
                + `${neutralEmoji} for they/them`);
 
        let messageEmbed = await message.channel.send(embed);

        messageEmbed.react(maleEmoji);
        messageEmbed.react(femaleEmoji);
        messageEmbed.react(neutralEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === maleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(maleRole);
                }
                if (reaction.emoji.name === femaleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(femaleRole);
                }
                if (reaction.emoji.name === neutralEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(neutralRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === maleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(maleRole);
                }
                if (reaction.emoji.name === femaleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(femaleRole);
                }
                if (reaction.emoji.name === neutralEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(neutralRole);
                }
            } else {
                return;
            }
        });
    }
 
}   












