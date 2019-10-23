export class ButtonClickLog{
    id: string;
    time: string;

    constructor(buttonId: string, time: string){
        this.id = buttonId;
        this.time = time;
    }
}