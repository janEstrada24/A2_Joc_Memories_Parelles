import { Component, OnInit, Input, Inject } from '@angular/core';
import { Carta } from '../../Model/Entities/Implementations/Carta/Carta';
import { BarallaService } from '../../Model/Services/baralla/baralla.service';
import { JugadorService } from '../../Model/Services/jugador/jugador.service';
import { Fila } from '../../Model/Entities/Implementations/Fila/Fila';
import { APP_BASE_HREF } from '@angular/common';
@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  
  @Input() fila!: Fila;
  @Input() carta!: Carta;
  ruta!: string;

  constructor(private jugadorService: JugadorService,
    @Inject(APP_BASE_HREF) private baseHref: string) {
  }

  ngOnInit(): void {
    this.ruta = this.baseHref;
  }
  
  agafar(carta: Carta) {
    if (this.jugadorService.getJugador().comptar() <= 4) {
      carta.girar();
      this.jugadorService.getJugador().agafar(carta);
    }

  }
}
