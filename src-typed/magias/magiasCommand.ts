import axios from "axios";
import { Message } from "discord.js";
import { magiasMessage } from "./magiasMessage";



export function magiaCommand(msg: Message, tokens: string){
    tokens = tokens.toLowerCase();
    if(tokens === ''){
        msg.channel.send('Para pesquisar uma magia é necessário digitar seu nome, para ver detalhes gerais sobre magias digite §magias (com s)')
    }
    else{
        pesquisarMagia(msg, tokens).then((response) => {
            if(response !== null){
                msg.channel.send(magiasMessage(response.data))
            }
        });
    }
}

async function pesquisarMagia(msg: Message, nomeMagia: string){
    try{
        const response = await axios.get(`https://www.dnd5eapi.co/api/spells/${nomeMagia}`);
        return response;
    }catch(error){
        let status = error.response.status;
        retornarErro(msg, status)
        return null;
    }
}

function retornarErro(msg: Message, status: number){
    if(status == 404){
        msg.reply('O nome de magia digitado não foi encontrado, tente novamente de outra forma');
    } else{
        msg.reply('Ocorreu um erro, tente novamente mais tarde');
    }
}
