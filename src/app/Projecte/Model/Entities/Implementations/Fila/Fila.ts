import { Fabrica } from "src/app/Projecte/Utils/fabrica";
import { PAL } from "src/app/Projecte/Utils/pals";
import { IFila } from "../../Interfaces/Fila/IFila";
import { ICarta } from "../../Interfaces/Carta/ICarta";
import { Carta } from "../Carta/Carta";

export class Fila implements IFila<ICarta> {

    fila: Array<ICarta>;
    num!: number;
    cartesEscollides: Array<ICarta>;
    filesEscollides: Array<Fila>;

    constructor() {
        this.fila = new Array<ICarta>;
        this.cartesEscollides = new Array<ICarta>;
        this.filesEscollides = new Array<Fila>;
    }

    getFila(): Array<ICarta> {
        return this.fila;
    }

    retornarCartesEscollides(): Array<ICarta> {
        return this.cartesEscollides;
    }

    afegirCarta(carta: Carta) {
        this.cartesEscollides.push(carta);
    }

    generarFila(): void {
        for (let j = 0; j < PAL.length; j++) {
            this.fila.push(Fabrica.generarCarta(j, PAL[j].pal, PAL[j].imatge, false, false));
        }
    }
    
}