import {Message} from "discord.js";

import {CommandsRacas} from "./Commands/CommandsRaças"
import {magiaCommand} from "./magias/magiasCommand";

const raças = new CommandsRacas();

async function ComandosHandle(msg: Message){
    let author = msg.author;
    let content = msg.content;
    let channel = msg.channel;

    if(author.bot) return;

    let tokens = content.split(" ");
    let command = tokens.shift();

    if(command?.charAt(0) === "§"){
        command = command.substring(1);
        command = command.replace('-','');

        if(raças.isRaça(command)){
            raças.sendMessage(command, channel);
        }

    }

    if(content.startsWith("§magia ")){
        let joinedTokens = tokens.join('-');
        magiaCommand(msg, joinedTokens);
    }
}

export {ComandosHandle};