import { Injectable } from '@angular/core';
import { Fila } from '../../Entities/Implementations/Fila/Fila';

@Injectable({
  providedIn: 'root'
})
export class FilaService {
  fila:Fila = new Fila();

  constructor() { }

  getFila():Fila {
    return this.fila;
  };
}
