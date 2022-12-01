import { Component, Input, OnInit } from '@angular/core';
import { Fila } from '../../Model/Entities/Implementations/Fila/Fila';
import { Carta } from '../../Model/Entities/Implementations/Carta/Carta';
import { JugadorService } from '../../Model/Services/jugador/jugador.service';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css']
})
export class FilaComponent implements OnInit {

  @Input() fila!: Fila;
  @Input() carta!: Carta;

  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
  }

  agafarFila(fila: Fila) {
    let cartesEscollides= fila.retornarCartesEscollides();

    if (cartesEscollides.length < 4) {
        cartesEscollides.push(this.carta);
    }
  }
  agafar(carta: Carta, fila: Fila) {
    let cartesEscollides = fila.retornarCartesEscollides();

    if (cartesEscollides.length < 1) {
        carta.girar();
        console.log(carta);
        console.log("Cartes escollides " + cartesEscollides.length);

        fila.afegirCarta(carta);
        this.jugadorService.getJugador().agafar(carta);
    }
    else  {

    }
  }
}
