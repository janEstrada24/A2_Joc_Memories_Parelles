import { ICarta } from "../Carta/ICarta";
import { IFila } from "../Fila/IFila";

export interface IBaralla<T extends IFila<ICarta>> {
    baralla: Array<T>;
}