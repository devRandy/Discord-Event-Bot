const fs = require('node:fs');
const path = require('node:path');
const { UserClient } = require('./database/clients/user-client');


class BotUtils {
    static getCommands() {
        const commands = [];
        const foldersPath = path.join(__dirname, 'commands');
        const commandFolders = fs.readdirSync(foldersPath);
        for (const folder of commandFolders) {
            const commandsPath = path.join(foldersPath, folder);
            const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const filePath = path.join(commandsPath, file);
                const command = require(filePath);
                if ('data' in command && 'execute' in command) {
                    commands.push(command);
                }else {
                    console.warn(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
                }
            }
        }
        return commands;
    }

    static async payAllUsers() {
        const userClient = new UserClient();
        const userList = await userClient.getAllUsers();
        if(userList) {
            console.log(userList);
        } else {
            console.log('Failed to get userlist');
        }
    }
}

module.exports = {
    BotUtils
}
