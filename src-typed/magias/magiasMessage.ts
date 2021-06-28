import Discord from "discord.js";
import validateMessage from "./formatAPI";

interface classe{
    name: string;
    url: string;
}

interface school{
    name: string;
    url: string;
}

interface apiObject{
    name: string;
    desc: Array<string>;
    school: school;
    casting_time: string;
    range: string;
    components: Array<string>;
    higher_level: string | undefined;
    material: string | undefined;
    level: number | string;
    classes: Array<classe> | string;
    concentration: boolean;
    duration: string;
}

class MagiaEmbed extends Discord.MessageEmbed{
    constructor(content: apiObject){
        super();
        this.title = content.name;
        this.description = `${content.level} ${content.school.name}`;
        this.fields=[
            {
                name: "Details",
                value:`Casting time: ${content.casting_time} \nRange : ${content.range} \nComponents: ${content.components} ${content.material}\nDuration: ${content.duration} \nClasses: ${content.classes}`,
                inline: false
            },
            {
                name: "Description", 
                value:`${content.desc.join("\n")} \n${content.higher_level}`, inline: false
            }
        ]

    }
}

function magiasMessage(detailObj: apiObject){
    validateMessage(detailObj);
    // const magiaMessage = new MagiaEmbed(detailObj);
    // return magiaMessage;
    return new MagiaEmbed(detailObj);

}

export {magiasMessage};