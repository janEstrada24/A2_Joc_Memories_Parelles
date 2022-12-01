import { IJugador } from "../../Interfaces/Jugador/IJugador";
import { Carta } from "../Carta/Carta";
import { Fila } from "../Fila/Fila";

export class Jugador implements IJugador {
    nom: string;
    cartes: Carta[] = new Array<Carta>;
    files: Fila[] = new Array<Fila>;

    constructor(nom: string) {
        this.nom = nom;
    }

    comptar(): number {
        let total:number = 0;
        this.cartes.forEach (
            carta => {total += carta.num}
            
        );
        return total;
    }
    
    agafar(carta: Carta): void {
        this.cartes.push(carta);
    }

    comptarFila(): number {
        let total:number = 0;
        this.files.forEach (
            fila => {total += fila.num}
        );
        return total;
    }
}