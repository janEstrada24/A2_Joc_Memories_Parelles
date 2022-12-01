import { Fila } from "../Fila/Fila";
import { IFila } from "../../Interfaces/Fila/IFila";
import { ICarta } from "../../Interfaces/Carta/ICarta";
import { IBaralla } from "../../Interfaces/Baralla/IBaralla";

export class Baralla implements IBaralla<IFila<ICarta>> {

    baralla: Array<Fila>;
    filesSeleccionades: Array<Fila>;

    constructor() {
        this.baralla = new Array<Fila>;
        this.filesSeleccionades = new Array<Fila>;
    }

    generar(): void {
        for (let i = 0; i < 4; i++) {
            let fila = new Fila();

            fila.generarFila();
            this.baralla.push(fila);
        }
    }
    
    getBaralla():Array<Fila> {
        return this.baralla;
    }

    obtenirFilesSeleccionades() {
        return this.filesSeleccionades;
    }
}