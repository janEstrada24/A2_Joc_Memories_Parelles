import { Component, OnInit, Input } from '@angular/core';
import { Carta } from '../../Model/Entities/Implementations/Carta/Carta';
import { BarallaService } from '../../Model/Services/baralla/baralla.service';
import { JugadorService } from '../../Model/Services/jugador/jugador.service';
import { Fila } from '../../Model/Entities/Implementations/Fila/Fila';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  
  @Input() fila!: Fila;
  @Input() carta!: Carta;

  constructor(private jugadorService: JugadorService) {

  }

  ngOnInit(): void {
  }
  
  agafar(carta: Carta) {
    if (this.jugadorService.getJugador().comptar() <= 4) {
      carta.girar();
      this.jugadorService.getJugador().agafar(carta);
    }

  }
}
