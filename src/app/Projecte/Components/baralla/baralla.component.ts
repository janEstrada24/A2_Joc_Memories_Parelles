import { Component, OnInit } from '@angular/core';
import { Baralla } from '../../Model/Entities/Implementations/Baralla/Baralla';
import { Fila } from '../../Model/Entities/Implementations/Fila/Fila';
import { BarallaService } from '../../Model/Services/baralla/baralla.service';

@Component({
  selector: 'app-baralla',
  templateUrl: './baralla.component.html',
  styleUrls: ['./baralla.component.css']
})
export class BarallaComponent implements OnInit {

  baralla: Baralla = new Baralla();

  constructor(private barallaService: BarallaService) { }

  ngOnInit(): void {
    this.baralla.generar();
    console.log(this.baralla);
  }
  
  agafarFila(fila: Fila) {
    let filesSeleccionades = this.baralla.obtenirFilesSeleccionades();
    filesSeleccionades.push(fila);
  }

  public getBaralla():Baralla {
    return this.barallaService.getBaralla();
  }
}
