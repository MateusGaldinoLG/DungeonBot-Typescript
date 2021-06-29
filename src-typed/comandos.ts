import {Message} from "discord.js";
import { CommandsClasses } from "./Commands/CommandsClasses";
import { CommandsGerais } from "./Commands/CommandsGerais";

import {CommandsRacas} from "./Commands/CommandsRaças"
import {magiaCommand} from "./magias/magiasCommand";

const raças = new CommandsRacas();
const classes = new CommandsClasses();
const comandosGerais = new CommandsGerais();

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
        } else if(classes.isClasse(command)){
            classes.sendMessage(command, channel);
        } else if(comandosGerais.isGeral(command)){
            comandosGerais.sendMessage(command, channel)
        }
    }

    if (content === "§caçador"){
        msg.reply('caçador não é a tradução oficial de "ranger", tente §patrulheiro ')
    }

    if(content.startsWith("§magia ")){
        let joinedTokens = tokens.join('-');
        magiaCommand(msg, joinedTokens);
    }
}

export {ComandosHandle};