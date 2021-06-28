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
