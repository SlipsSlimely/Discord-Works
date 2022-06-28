const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const Discord = require('discord.js');

require('dotenv').config()
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = '$';
const channel1 = '872889598299230278'; //this is the testing channel
const channel2 = '546134726490980363'; //this is the spoiler images channel
const channel3 = '477207127216357386'; //this is the community content channel
publishcount1 = 0;
publishcount2 = 0;
publishcount3 = 0;
let current = new Date();
cTime11 = 0;
cTime12 = 0;
cTime21 = 0;
cTime22 = 0;
cTime31 = 0;
cTime32 = 0;
var mulldrifter = 7;
var baneslayer = 2;
var itdepends = 4;
var context = 0;
const fs = require('fs');
 
client.commands = new Discord.Collection();



const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.once('ready',()=>{
    console.log('Cube time!')
    client.user.setActivity("Drafting a 360 Uncube"); 
});


client.on('message', message =>{
    const { channel } = message

    if (publishcount1 === 11) {
        cTime12 = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
        if (cTime12 - cTime11 >= 1){
            publishcount1 === 0;
        }
        else{
            return;
        }
    }
    if (publishcount2 === 11) {
        cTime22 = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
        if (cTime22 - cTime21 >= 1){
            publishcount2 === 0;
        }
        else{
            return;
        }
    }
    if (publishcount3 === 11) {
        cTime32 = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
        if (cTime32 - cTime31 >= 1){
            publishcount3 === 0;
        }
        else{
            return;
        }
    }

    if (channel.type === 'news' && channel.id === '872889598299230278') {
        //add a 2nd time veriable to compare the first one to, when the two subtract to equal 1, reset the publishcount, may need to pull messages from any channel to make the timer consistent.
        publishcount1 = publishcount1 + 1;
        
        if(publishcount1 === 11){
            cTime11 = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
            console.log('The time testing channel hit 10 was: ' +cTime11);
            return;
        }
        else{
            console.log('publish count: ' + publishcount1);
            message.crosspost();
        }
        
    }
    if (channel.type === 'news' && channel.id === '546134726490980363') {
        //add a 2nd time veriable to compare the first one to, when the two subtract to equal 1, reset the publishcount, may need to pull messages from any channel to make the timer consistent.
        publishcount2 = publishcount2 + 1;
        
        if(publishcount2 === 11){
            cTime21 = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
            console.log('The time spoiler images channel hit 10 was: ' +cTime21);
            return;
        }
        else{
            console.log('publish count: ' + publishcount2);
            message.crosspost();
        }
        
    }
    if (channel.type === 'news' && channel.id === '477207127216357386') {
        //add a 2nd time veriable to compare the first one to, when the two subtract to equal 1, reset the publishcount, may need to pull messages from any channel to make the timer consistent.
        publishcount3 = publishcount3 + 1;
        
        if(publishcount3 === 11){
            cTime31 = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
            console.log('The time community content channel hit 10 was: ' +cTime31);
            return;
        }
        else{
            console.log('publish count: ' + publishcount3);
            message.crosspost();
        }
        
    }

    let mulldrifterbad = ['mulldrifter'];
    let foundInText1 = false;
    for (var i in mulldrifterbad) {
        if (message.content.toLowerCase().includes(mulldrifterbad[i].toLowerCase())) foundInText1 = true;
    }
        if (foundInText1) {
    
            var number1 = 2;
            var calloutnumber1 = Math.floor(Math.random()*(number1 - 1 + 1))+1;
            if(calloutnumber1 === 1)
            {
                message.channel.send("We don't talk about value around here");
                mulldrifter = mulldrifter + 1;
            }
            if(calloutnumber1 === 2)
            {
                message.channel.send("mulldrifter? I thought you said mulligan!");
                mulldrifter = mulldrifter + 1;
            }
    }
    
    let banesbad = ['baneslayer'];
    let foundInText2 = false;
    for (var i in banesbad) {
        if (message.content.toLowerCase().includes(banesbad[i].toLowerCase())) foundInText2 = true;
    }
    if (foundInText2) {
    
        var number2 = 2;
        var calloutnumber2 = Math.floor(Math.random()*(number2 - 1 + 1))+1;
        if(calloutnumber2 === 1)
        {
            message.channel.send("I'll have you know I enjoy watching my major mana investments eat removal");
            baneslayer = baneslayer + 1;
        }
        if(calloutnumber2 === 2)
        {
            message.channel.send("If I untap with this so help me god!");
            baneslayer = baneslayer + 1;
        }
    }
    
    let dependsbad = ['it depends'];
    let foundInText3 = false;
    for (var i in dependsbad) {
        if (message.content.toLowerCase().includes(dependsbad[i].toLowerCase())) foundInText3 = true;
    }
    if (foundInText3) {
    
        var number3 = 3;
        var calloutnumber3 = Math.floor(Math.random()*(number3 - 1 + 1))+1;
        if(calloutnumber3 === 1)
        {
            message.channel.send("Protip: You can shortcut any sentence containing 'it depends' with 'Yes.'");
            itdepends = itdepends + 1;
        }
        if(calloutnumber3 === 2)
        {
            message.channel.send("Protip: You can shortcut any sentence containing 'it depends' with 'No.'");
            itdepends = itdepends + 1;
        }
        if(calloutnumber3 === 3)
        {
            message.channel.send("Who depends?");
            itdepends = itdepends + 1;
        }
    }
    let contextbad = ['context'];
    let foundInText4 = false;
    for (var i in contextbad) {
        if (message.content.toLowerCase().includes(contextbad[i].toLowerCase())) foundInText4 = true;
    }
    if (foundInText4) {
    
        var number4 = 2;
        var calloutnumber4 = Math.floor(Math.random()*(number4 - 1 + 1))+1;
        if(calloutnumber4 === 1)
        {
            message.channel.send("One second, I need the context");
            context = context + 1;
        }
        if(calloutnumber4 === 2)
        {
            message.channel.send("context?");
            context = context + 1;
        }
      }
    
    
    let blacklisted = ['fuck', 'shit', 'ass' ];
    let foundInText = false;
    for (var i in blacklisted) {
        if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
        if (foundInText) {
    
            message.channel.send("no cussing! This is a wholesome magic server!");
        }
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
});





client.login(process.env.TOKEN)