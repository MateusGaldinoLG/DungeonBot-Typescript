import * as classes from "../embeds/classes";

interface ICommandClasses{
    artifice: command;
    barbaro: command;
    bardo: command;
    bruxo: command;
    clerigo: command;
    druida: command;
    feiticeiro: command;
    guerreiro: command;
    ladino: command;
    mago: command;
    monge: command;
    paladino: command;
    patrulheiro: command;
}

const ClasseObj = {
    artifice: (channel: channel) =>{channel.send(classes.artificeEmb)},
    barbaro: (channel: channel) =>{channel.send(classes.barbaroEmb)},
    bardo: (channel: channel) =>{channel.send(classes.bardoEmb)},
    bruxo: (channel: channel) =>{channel.send(classes.bruxoEmb)},
    clerigo: (channel: channel) =>{channel.send(classes.clerigoEmb)},
    druida: (channel: channel) =>{ channel.send(classes.druidaEmb)},
    feiticeiro: (channel: channel) =>{channel.send(classes.feiticeiroEmb)},
    guerreiro: (channel: channel) =>{channel.send(classes.guerreiroEmb)},
    ladino: (channel: channel) =>{channel.send(classes.ladinoEmb)},
    mago: (channel: channel) => {channel.send(classes.magoEmb)},
    monge: (channel: channel) =>{channel.send(classes.mongeEmb)},
    paladino: (channel: channel) =>{channel.send(classes.paladinoEmb)},
    patrulheiro: (channel: channel) =>{channel.send(classes.patrulheiroEmb)},
}

class CommandsClasses{
    Classes: ICommandClasses = ClasseObj;

    isClasse(entrada: string): boolean{
        if(Object.keys(this.Classes).includes(entrada)){
            return true
        } else{
            return false
        }
    }

    sendMessage(classe: string, channel: channel): void{
        let ClassKey = classe as keyof ICommandClasses;
        ClasseObj[ClassKey](channel);
    }
}

export {CommandsClasses};