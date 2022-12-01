import { Carta } from "../../Implementations/Carta/Carta";
import { Fila } from "../../Implementations/Fila/Fila";

export interface IJugador {
    nom: string;
    
    agafar(carta: Carta): void;
    comptar(): number;
}