import { ICarta } from "../../Interfaces/Carta/ICarta";

export class Carta implements ICarta {
    num!: number;
    pal!: string;
    img!: string;
    visible!: boolean;
    encertada!: boolean;
    constructor(num: number, pal: string, img: string, visible: boolean, encertada:boolean) {
        this.num = num;
        this.pal = pal;
        this.img = img;
        this.visible = visible;
        this.encertada = encertada;
    }
    girar(): void {
        this.visible = !this.visible;
    }
}