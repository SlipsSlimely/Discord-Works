const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const Discord = require('discord.js');

require('dotenv').config()
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const fs = require('fs');
 
client.commands = new Discord.Collection();



const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.once('ready',()=>{
    console.log('Cube time!')
    client.user.setActivity("Deciding on my p1p1"); 
});



// Old message command content, no longer needed
/* client.on('messageCreate', async message =>{
    const { channel } = message

    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 
    else if(command === 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }
    else if(command === 'genderrole'){
        client.commands.get('genderrole').execute(message, args, Discord, client);
    }
    else if(command === 'timerole'){
        client.commands.get('timerole').execute(message, args, Discord, client);
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

          

          if (member.roles.cache.has('472500301279133697')) { // if they already have the role
              member.roles.remove('472500301279133697'); // remove it
              return interaction.reply({
                  content: 'Successfully removed role!',
                  ephemeral: true
              });
          } else { // if they don't have the role
              member.roles.add('472500301279133697'); // add it
              return interaction.reply({
                  content: 'Successfully added role!',
                  ephemeral: true
              })
          }
      }
      else if (buttonID === '2') { 
        const member = interaction.member; // get member from the interaction - person who clicked the button

        

        if (member.roles.cache.has('763914397881466901')) { // if they already have the role
            member.roles.remove('763914397881466901'); // remove it
            return interaction.reply({
                content: 'Successfully removed role!',
                ephemeral: true
            });
        } else { // if they don't have the role
            member.roles.add('763914397881466901'); // add it
            return interaction.reply({
                content: 'Successfully added role!',
                ephemeral: true
            })
        }
    }
    else if (buttonID === '3') { 
      const member = interaction.member; // get member from the interaction - person who clicked the button

      

      if (member.roles.cache.has('593883972652498968')) { // if they already have the role
          member.roles.remove('593883972652498968'); // remove it
          return interaction.reply({
              content: 'Successfully removed role!',
              ephemeral: true
          });
      } else { // if they don't have the role
          member.roles.add('593883972652498968'); // add it
          return interaction.reply({
              content: 'Successfully added role!',
              ephemeral: true
          })
      }
  }
  else if (buttonID === '4') { 
    const member = interaction.member; // get member from the interaction - person who clicked the button

    

    if (member.roles.cache.has('603693326905901096')) { // if they already have the role
        member.roles.remove('603693326905901096'); // remove it
        return interaction.reply({
            content: 'Successfully removed role!',
            ephemeral: true
        });
    } else { // if they don't have the role
        member.roles.add('603693326905901096'); // add it
        return interaction.reply({
            content: 'Successfully added role!',
            ephemeral: true
        })
    }
}
else if (buttonID === '5') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button

  

  if (member.roles.cache.has('700804945699536916')) { // if they already have the role
      member.roles.remove('700804945699536916'); // remove it
      return interaction.reply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('700804945699536916'); // add it
      return interaction.reply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
}
else if (buttonID === '6') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button

  

  if (member.roles.cache.has('578353610388406312')) { // if they already have the role
      member.roles.remove('578353610388406312'); // remove it
      return interaction.reply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('578353610388406312'); // add it
      return interaction.reply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
}
else if (buttonID === '7') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button



  if (member.roles.cache.has('757061544671445012')) { // if they already have the role
      member.roles.remove('757061544671445012'); // remove it
      return interaction.reply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('757061544671445012'); // add it
      return interaction.reply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
}
else if (buttonID === '8') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button

 

  if (member.roles.cache.has('873233003705426001')) { // if they already have the role
      member.roles.remove('873233003705426001'); // remove it
      return interaction.reply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('873233003705426001'); // add it
      return interaction.reply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
}
else if (buttonID === '9') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button



  if (member.roles.cache.has('903010664564555796')) { // if they already have the role
      member.roles.remove('903010664564555796'); // remove it
      return interaction.reply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('903010664564555796'); // add it
      return interaction.reply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
}
else if (buttonID === '10') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button



  if (member.roles.cache.has('956587965704962098')) { // if they already have the role
      member.roles.remove('956587965704962098'); // remove it
      return interaction.reply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('956587965704962098'); // add it
      return interaction.reply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
}
else if (buttonID === '11') { 
  const member = interaction.member; // get member from the interaction - person who clicked the button



  if (member.roles.cache.has('1025577232212701305')) { // if they already have the role
      member.roles.remove('1025577232212701305'); // remove it
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
}
});




ee

client.login(process.env.TOKEN);