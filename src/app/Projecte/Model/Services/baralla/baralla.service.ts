import { Injectable } from '@angular/core';
import { Baralla } from '../../Entities/Implementations/Baralla/Baralla';

@Injectable({
  providedIn: 'root'
})
export class BarallaService {

  baralla:Baralla = new Baralla();

  constructor() { }
  
  getBaralla():Baralla {
    return this.baralla;
  };
}
