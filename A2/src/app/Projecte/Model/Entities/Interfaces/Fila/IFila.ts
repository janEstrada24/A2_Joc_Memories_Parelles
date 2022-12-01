import { ICarta } from "../Carta/ICarta";

export interface IFila<T extends ICarta> {
    num: number;
    fila: Array<T>;
    cartesEscollides: Array<T>;
}