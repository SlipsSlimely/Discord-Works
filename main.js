const Discord = require('discord.js');
const {ButtonBuilder,  SlashCommandBuilder, AttachmentBuilder, MessageEmbed, Intents, time, ActionRowBuilder, MessageButton, ButtonStyle, MessageActionRow} = require('discord.js');
//const commandList = require('./commands.js');
const Client = new Discord.Client({intents: ["GUILDS", 'GUILD_MEMBERS', "GUILD_MESSAGES"]});
require('dotenv').config()


var fs = require('fs');
const { waitForDebugger } = require('inspector');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');
 
/* Client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    Client.commands.set(command.name, command);
} */

Client.once('ready',()=>{
    console.log('Cube time!')
    Client.user.setActivity("p1p1"); 
});



// Old message command content, no longer needed
/* Client.on('message', async message =>{
    const { channel } = message

    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        Client.commands.get('ping').execute(message, args);
    } 
    else if(command === 'reactionrole'){
        Client.commands.get('reactionrole').execute(message, args, Discord, Client);
    }
    else if(command === 'genderrole'){
        Client.commands.get('genderrole').execute(message, args, Discord, Client);
    }
    else if(command === 'timerole'){
        Client.commands.get('timerole').execute(message, args, Discord, Client);
    }
    else if (command == 'aprilfools'){
        let embed = new Discord.MessageEmbed()
        .setTitle('April fools bad word counter!')
        .setDescription('The bad words were: Mulldrifter, Baneslayer, It depends, and context!')
        .addFields(
            {name: 'Mulldrifter', value: ' ' + mulldrifter},
            {name: 'Baneslayer', value: ' ' + baneslayer},
            {name: 'It depends', value: ' ' + itdepends},
            {name: 'Context', value: ' ' + context},
        )
        .setTimestamp();
    message.channel.send(embed);
    }
}); */

Client.on('interactionCreate', async interaction => {

    if (interaction.isButton()) {
      const buttonID = interaction.customId;
      if (buttonID === '1') { 
          const member = interaction.member; // get member from the interaction - person who clicked the button

          

          if (member.roles.cache.has('545082632762032129')) { // if they already have the role
              member.roles.remove('545082632762032129'); // remove it
              return interaction.reply({
                  content: 'Successfully removed role!',
                  ephemeral: true
              });
          } else { // if they don't have the role
              member.roles.add('545082632762032129'); // add it
              return interaction.reply({
                  content: 'Successfully added role!',
                  ephemeral: true
              })
          }
      }
      else if (buttonID === '2') { 
        const member = interaction.member; // get member from the interaction - person who clicked the button

        

        if (member.roles.cache.has('545082678936993793')) { // if they already have the role
            member.roles.remove('545082678936993793'); // remove it
            return interaction.reply({
                content: 'Successfully removed role!',
                ephemeral: true
            });
        } else { // if they don't have the role
            member.roles.add('545082678936993793'); // add it
            return interaction.reply({
                content: 'Successfully added role!',
                ephemeral: true
            })
        }
    }
    else if (buttonID === '3') { 
      const member = interaction.member; // get member from the interaction - person who clicked the button

      

      if (member.roles.cache.has('545083386662879250')) { // if they already have the role
          member.roles.remove('545083386662879250'); // remove it
          return interaction.reply({
              content: 'Successfully removed role!',
              ephemeral: true
          });
      } else { // if they don't have the role
          member.roles.add('545083386662879250'); // add it
          return interaction.reply({
              content: 'Successfully added role!',
              ephemeral: true
          })
      }
  }
  else if (buttonID === '4') { 
    const member = interaction.member; // get member from the interaction - person who clicked the button

    

    if (member.roles.cache.has('545083350214508544')) { // if they already have the role
        member.roles.remove('545083350214508544'); // remove it
        return interaction.reply({
            content: 'Successfully removed role!',
            ephemeral: true
        });
    } else { // if they don't have the role
        member.roles.add('545083350214508544'); // add it
        return interaction.reply({
            content: 'Successfully added role!',
            ephemeral: true
        })
    }
}
else if (buttonID === '5') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button

  

  if (member.roles.cache.has('405425048372117506')) { // if they already have the role
      member.roles.remove('405425048372117506'); // remove it
      return interaction.reply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('405425048372117506'); // add it
      return interaction.reply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
}
else if (buttonID === '6') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button

  

  if (member.roles.cache.has('892908568477597736')) { // if they already have the role
      member.roles.remove('892908568477597736'); // remove it
      return interaction.reply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('892908568477597736v'); // add it
      return interaction.reply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
}
else if (buttonID === '7') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button



  if (member.roles.cache.has('545084057558450185')) { // if they already have the role
      member.roles.remove('545084057558450185'); // remove it
      return interaction.reply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('545084057558450185'); // add it
      return interaction.reply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
}
else if (buttonID === '8') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button

 

  if (member.roles.cache.has('545084122838597652')) { // if they already have the role
      member.roles.remove('545084122838597652'); // remove it
      return interaction.reply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('545084122838597652'); // add it
      return interaction.reply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
}
else if (buttonID === '9') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button



  if (member.roles.cache.has('802835212982943755')) { // if they already have the role
      member.roles.remove('802835212982943755'); // remove it
      return interaction.reply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('802835212982943755'); // add it
      return interaction.reply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
}
else if (buttonID === '10') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button



  if (member.roles.cache.has('796905065318973472')) { // if they already have the role
      member.roles.remove('796905065318973472'); // remove it
      return interaction.reply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('796905065318973472'); // add it
      return interaction.reply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
}
else if (buttonID === '11') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button



  if (member.roles.cache.has('796905157253922829')) { // if they already have the role
      member.roles.remove('796905157253922829'); // remove it
      return interaction.reply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('796905157253922829'); // add it
      return interaction.reply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
}
else if (buttonID === '12') { 
    const member = interaction.member; // get member from the interaction - person who clicked the button
  
  
  
    if (member.roles.cache.has('796905203936395274')) { // if they already have the role
        member.roles.remove('796905203936395274'); // remove it
        return interaction.reply({
            content: 'Successfully removed role!',
            ephemeral: true
        });
    } else { // if they don't have the role
        member.roles.add('1025577232212701305'); // add it
        return interaction.reply({
            content: 'Successfully added role!',
            ephemeral: true
        })
    }
  }
  else if (buttonID === '13') { 
    const member = interaction.member; // get member from the interaction - person who clicked the button
  
  
  
    if (member.roles.cache.has('888135872892006421')) { // if they already have the role
        member.roles.remove('888135872892006421'); // remove it
        return interaction.reply({
            content: 'Successfully removed role!',
            ephemeral: true
        });
    } else { // if they don't have the role
        member.roles.add('888135872892006421'); // add it
        return interaction.reply({
            content: 'Successfully added role!',
            ephemeral: true
        })
    }
  }
  else if (buttonID === '14') { 
    const member = interaction.member; // get member from the interaction - person who clicked the button
  
  
  
    if (member.roles.cache.has('888135926327427132')) { // if they already have the role
        member.roles.remove('888135926327427132'); // remove it
        return interaction.reply({
            content: 'Successfully removed role!',
            ephemeral: true
        });
    } else { // if they don't have the role
        member.roles.add('888135926327427132'); // add it
        return interaction.reply({
            content: 'Successfully added role!',
            ephemeral: true
        })
    }
  }
  else if (buttonID === '15') { 
    const member = interaction.member; // get member from the interaction - person who clicked the button
  
  
  
    if (member.roles.cache.has('888136080740716625')) { // if they already have the role
        member.roles.remove('888136080740716625'); // remove it
        return interaction.reply({
            content: 'Successfully removed role!',
            ephemeral: true
        });
    } else { // if they don't have the role
        member.roles.add('888136080740716625'); // add it
        return interaction.reply({
            content: 'Successfully added role!',
            ephemeral: true
        })
    }
  }
  else if (buttonID === '16') { 
    const member = interaction.member; // get member from the interaction - person who clicked the button
  
  
  
    if (member.roles.cache.has('888136154103296041')) { // if they already have the role
        member.roles.remove('888136154103296041'); // remove it
        return interaction.reply({
            content: 'Successfully removed role!',
            ephemeral: true
        });
    } else { // if they don't have the role
        member.roles.add('888136154103296041'); // add it
        return interaction.reply({
            content: 'Successfully added role!',
            ephemeral: true
        })
    }
  }
  else if (buttonID === '17') { 
    const member = interaction.member; // get member from the interaction - person who clicked the button
  
  
  
    if (member.roles.cache.has('888136240740859955')) { // if they already have the role
        member.roles.remove('888136240740859955'); // remove it
        return interaction.reply({
            content: 'Successfully removed role!',
            ephemeral: true
        });
    } else { // if they don't have the role
        member.roles.add('888136240740859955'); // add it
        return interaction.reply({
            content: 'Successfully added role!',
            ephemeral: true
        })
    }
  }
  else if (buttonID === '18') { 
    const member = interaction.member; // get member from the interaction - person who clicked the button
  
  
  
    if (member.roles.cache.has('888136315823075348')) { // if they already have the role
        member.roles.remove('888136315823075348'); // remove it
        return interaction.reply({
            content: 'Successfully removed role!',
            ephemeral: true
        });
    } else { // if they don't have the role
        member.roles.add('888136315823075348'); // add it
        return interaction.reply({
            content: 'Successfully added role!',
            ephemeral: true
        })
    }
  }
  else if (buttonID === '19') { 
    const member = interaction.member; // get member from the interaction - person who clicked the button
  
  
  
    if (member.roles.cache.has('888136382411845642')) { // if they already have the role
        member.roles.remove('888136382411845642'); // remove it
        return interaction.reply({
            content: 'Successfully removed role!',
            ephemeral: true
        });
    } else { // if they don't have the role
        member.roles.add('888136382411845642'); // add it
        return interaction.reply({
            content: 'Successfully added role!',
            ephemeral: true
        })
    }
  }
  else if (buttonID === '20') { 
    const member = interaction.member; // get member from the interaction - person who clicked the button
  
  
  
    if (member.roles.cache.has('888136541115932734')) { // if they already have the role
        member.roles.remove('888136541115932734'); // remove it
        return interaction.reply({
            content: 'Successfully removed role!',
            ephemeral: true
        });
    } else { // if they don't have the role
        member.roles.add('888136541115932734'); // add it
        return interaction.reply({
            content: 'Successfully added role!',
            ephemeral: true
        })
    }
  }
  else if (buttonID === '21') { 
    const member = interaction.member; // get member from the interaction - person who clicked the button
  
  
  
    if (member.roles.cache.has('888137489586475008')) { // if they already have the role
        member.roles.remove('888137489586475008'); // remove it
        return interaction.reply({
            content: 'Successfully removed role!',
            ephemeral: true
        });
    } else { // if they don't have the role
        member.roles.add('888137489586475008'); // add it
        return interaction.reply({
            content: 'Successfully added role!',
            ephemeral: true
        })
    }
  }
}
});

Client.on("messageCreate", async message => { 

    if (message.content.toLowerCase() == "-createreactionrole") {
        if (message.author.bot) return;
  
        const Mainrolesrow = new MessageActionRow()
            .addComponents(
              new MessageButton()
                  .setCustomId('1')
                  .setLabel('Powered')
                  .setStyle('SUCCESS'),
              new MessageButton()
                  .setCustomId('2')
                  .setLabel('Unpowered Traditional')
                  .setStyle('SUCCESS'),
              new MessageButton()
                  .setCustomId('3')
                  .setLabel('Unpowered Themed')
                  .setStyle('SUCCESS'),
              new MessageButton()
                  .setCustomId('4')
                  .setLabel('Multiplayer')
                  .setStyle('SUCCESS'),
              new MessageButton()
                  .setCustomId('5')
                  .setLabel('Battle Box')
                  .setStyle('SUCCESS'),
            );
          const Mainroles2row = new MessageActionRow()
            .addComponents(
              new MessageButton()
                  .setCustomId('6')
                  .setLabel('Jumpstart')
                  .setStyle('SUCCESS'),
              new MessageButton()
                  .setCustomId('7')
                  .setLabel('Peasant')
                  .setStyle('SUCCESS'),
              new MessageButton()
                  .setCustomId('8')
                  .setLabel('Pauper')
                  .setStyle('SUCCESS'),
              new MessageButton()
                  .setCustomId('9')
                  .setLabel('Drafter')
                  .setStyle('SUCCESS'),
            );
            const Genderrolesrow = new MessageActionRow()
            .addComponents(
              new MessageButton()
                  .setCustomId('10')
                  .setLabel('He/Him')
                  .setStyle('SUCCESS'),
              new MessageButton()
                  .setCustomId('11')
                  .setLabel('She/Her')
                  .setStyle('SUCCESS'),
              new MessageButton()
                  .setCustomId('12')
                  .setLabel('They/Them')
                  .setStyle('SUCCESS'),
            );
            const Timerolesrow = new MessageActionRow()
            .addComponents(
              new MessageButton()
                  .setCustomId('13')
                  .setLabel('North America')
                  .setStyle('SUCCESS')
                  .setEmoji('🇺🇸'),
              new MessageButton()
                  .setCustomId('14')
                  .setLabel('South America')
                  .setStyle('SUCCESS')
                  .setEmoji('🇺🇾'),
              new MessageButton()
                  .setCustomId('15')
                  .setLabel('Western Europe')
                  .setStyle('SUCCESS')
                  .setEmoji('🇫🇷'),
              new MessageButton()
                  .setCustomId('16')
                  .setLabel('Eastern Europe/Russia')
                  .setStyle('SUCCESS')
                  .setEmoji('🇷🇺'),
              new MessageButton()
                  .setCustomId('17')
                  .setLabel('Africa')
                  .setStyle('SUCCESS')
                  .setEmoji('🇿🇦'),
            );
          const Timeroles2row = new MessageActionRow()
            .addComponents(
              new MessageButton()
                  .setCustomId('18')
                  .setLabel('Eastern Asia/Pacific Islands')
                  .setStyle('SUCCESS')
                  .setEmoji('🇯🇵'),
              new MessageButton()
                  .setCustomId('19')
                  .setLabel('Australia')
                  .setStyle('SUCCESS')
                  .setEmoji('🇦🇺'),
              new MessageButton()
                  .setCustomId('20')
                  .setLabel('Middle East')
                  .setStyle('SUCCESS')
                  .setEmoji('🇱🇧'),
              new MessageButton()
                  .setCustomId('21')
                  .setLabel('South asia/India')
                  .setStyle('SUCCESS')
                  .setEmoji('🇮🇳'),
            );
        message.channel.send({
            content: 'Please press the button for the role that you would like.',
            components: [Mainrolesrow]
        })
        message.channel.send({
            content: 'Remember: Drafter can be pinged by other users!',
            components: [Mainroles2row]
        })
        message.channel.send({
            content: 'Please only select a role from here if you are comfortable doing so.',
            components: [Genderrolesrow]
        })
        message.channel.send({
            content: 'These roles are not necessary but can help when setting up IRL drafting.',
            components: [Timerolesrow]
        })
        message.channel.send({
            content: 'Make sure to select the time zone/region most relevant to you.',
            components: [Timeroles2row]
        })
    }
  });








Client.login(process.env.TOKEN);