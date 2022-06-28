module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '855183208962719824';
        const poweredRole = message.guild.roles.cache.find(role => role.name === "Powered");
        const unpoweredtradRole = message.guild.roles.cache.find(role => role.name === "Unpowered Traditional");
        const unpoweredthemeRole = message.guild.roles.cache.find(role => role.name === "Unpowered Themed");
        const multiplayerRole = message.guild.roles.cache.find(role => role.name === "Multiplayer");
        const battleboxRole = message.guild.roles.cache.find(role => role.name === "Battle_Box");
        const jumpRole = message.guild.roles.cache.find(role => role.name === "Jumpstart");
        const peasantRole = message.guild.roles.cache.find(role => role.name === "Peasant");
        const pauperRole = message.guild.roles.cache.find(role => role.name === "Pauper");
        const draftRole = message.guild.roles.cache.find(role => role.name === "drafter");

                                         //855231682457370696               
        //const poweredEmoji = '<:Mythic:855231682457370696>';
        const poweredEmoji = '🔵';  //855231682751889418
        //const unpoweredtradEmoji = '<:Rare:855231682751889418>';
        const unpoweredtradEmoji = '🟤';                //855231682566029345
        //const unpoweredthemeEmoji = '<:TimeshiftedBig:855231682566029345>';
        const unpoweredthemeEmoji = '🟢';
        const multiplayerEmoji = '🧑‍🤝‍🧑'; //855231682733801472
        const battleboxEmoji = '⚔️';
        const jumpEmoji = '🔘';  
        //const peasantEmoji = '<:Uncommon:855231682733801472>';
        const peasantEmoji = '🟠';  //855231682423554118
        //const pauperEmoji = '<:Common:855231682423554118>';
        const pauperEmoji = '🟣';  //855231682311356467
        //const draftEmoji = '<:drafter:855231682311356467>';
        const draftEmoji = '🔴';
        
    
 
        let embed = new Discord.MessageEmbed()
            .setColor('#edad1f')
            //.setTitle('Select Your roles!')
            .setDescription('**Select an emote below to set your cube format tags:**\n\n'
                + `${poweredEmoji} for powered\n`
                + `${unpoweredtradEmoji} for unpowered traditional\n`
                + `${unpoweredthemeEmoji} for unpowered themed\n`
                + `${peasantEmoji} for peasant\n`
                + `${pauperEmoji} for pauper\n`
                + `${battleboxEmoji} for battle box\n`
                + `${jumpEmoji} for jumpstart\n`
                + `${multiplayerEmoji} for multiplayer (pingable by other members)\n`
                + `${draftEmoji} for drafter (pingable by other members)\n`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(poweredEmoji);
        messageEmbed.react(unpoweredtradEmoji);
        messageEmbed.react(unpoweredthemeEmoji);
        messageEmbed.react(peasantEmoji);
        messageEmbed.react(pauperEmoji);
        messageEmbed.react(battleboxEmoji);
        messageEmbed.react(jumpEmoji);
        messageEmbed.react(multiplayerEmoji);
        messageEmbed.react(draftEmoji);

 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === poweredEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(poweredRole);
                }
                if (reaction.emoji.name === unpoweredtradEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(unpoweredtradRole);
                }
                if (reaction.emoji.name === unpoweredthemeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(unpoweredthemeRole);
                }
                if (reaction.emoji.name === battleboxEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(battleboxRole);
                }
                if (reaction.emoji.name === multiplayerEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(multiplayerRole);
                }
                if (reaction.emoji.name === peasantEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(peasantRole);
                }
                if (reaction.emoji.name === pauperEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pauperRole);
                }
                if (reaction.emoji.name === draftEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(draftRole);
                }
                if (reaction.emoji.name === jumpEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(jumpRole);
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
                if (reaction.emoji.name === poweredEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(poweredRole);
                }
                if (reaction.emoji.name === unpoweredtradEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(unpoweredtradRole);
                }
                if (reaction.emoji.name === unpoweredthemeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(unpoweredthemeRole);
                }
                if (reaction.emoji.name === battleboxEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(battleboxRole);
                }
                if (reaction.emoji.name === peasantEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(peasantRole);
                }
                if (reaction.emoji.name === pauperEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pauperRole);
                }
                if (reaction.emoji.name === multiplayerEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(multiplayerRole);
                }
                if (reaction.emoji.name === draftEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(draftRole);
                }
                if (reaction.emoji.name === jumpEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(jumpRole);
                }
            } else {
                return;
            }
        });
    }
 
}   