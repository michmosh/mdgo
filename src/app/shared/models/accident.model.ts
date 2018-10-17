export class Accident{
    EventTime: Date;
    MDA: string;
    gps: object;
    latitude: number;
    longitude: number;
    injuries: Array<object>;
    isTreated: boolean;
    kinematic: string;
    mechanism: string;
}