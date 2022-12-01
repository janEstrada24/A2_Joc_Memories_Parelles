import { Carta } from "../Model/Entities/Implementations/Carta/Carta";

export class Fabrica {
    static generarCarta(num: number, pal:string, imatge:string, visible: boolean, encertada:boolean): Carta {
        return new Carta(num, pal, imatge, visible, encertada);
    }
}