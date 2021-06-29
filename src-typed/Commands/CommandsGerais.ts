import { acoesEmb } from "../embeds/acoesEmb"
import { classeEmb, helpEmb, olaEmb, racaEmb } from "../embeds/comandosEmb"
import { otimizacaoEmb } from "../embeds/magiaEmb"
import { mecanicasEmb } from "../embeds/mecanicasEmb"


interface ICommandsGerais{
    olá: command;
    ola: command;
    classe: command;
    raça: command;
    raças: command;
    magias: command;
    mecanicas: command;
    ações: command;
    help: command;
}

const comandosGerais: ICommandsGerais = {
    ola: (channel: channel) => {channel.send(olaEmb)}, 
    olá: (channel: channel) => {channel.send(olaEmb)},
    classe: (channel: channel) => {channel.send(classeEmb)},
    raça: (channel: channel) => {channel.send(racaEmb)}, 
    raças: (channel: channel) => {channel.send(racaEmb)},
    magias: (channel: channel) =>{channel.send(otimizacaoEmb)},
    mecanicas: (channel: channel) => {channel.send(mecanicasEmb)},
    ações: (channel: channel) => {channel.send(acoesEmb)},
    help: (channel: channel) => {channel.send(helpEmb)}
}

// class GenericCommand<T>{
//     readonly command: T;
//     constructor(raça: T){
//         this.command = raça;
//     }
//     sendMessage(comando: string, channel: channel): void{
//         let ComandoKey = comando as keyof T;
//     }

// }

class CommandsGerais{
    gerais:ICommandsGerais = comandosGerais;

    isGeral(entrada: string): boolean{
        if(Object.keys(this.gerais).includes(entrada)){
            return true
        } else{
            return false
        }
    }

    sendMessage(raça: string, channel: channel): void{
        let GeraisKey = raça as keyof ICommandsGerais;
        comandosGerais[GeraisKey](channel);
    }
}

export {CommandsGerais};