const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('node:fs');

const commandRegister = (client) => {
    const commands = [
        new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
        new SlashCommandBuilder().setName('genderrole').setDescription('gender role setting embed'),
        new SlashCommandBuilder().setName('reactionrole').setDescription('cube role setting embed'),
        new SlashCommandBuilder().setName('timerole').setDescription('time zone role setting embed'),
    ]
        .map(command => command.toJSON());

    const rest = new REST({ version: '9' }).setToken('process.env.TOKEN');

    try {
        console.log('Started refreshing application (/) commands.');

        rest.put(
            Routes.applicationGuildCommands("854858385575641128", "263828508126609420"),
            { body: commands }
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
};
exports.commandRegister = commandRegister;