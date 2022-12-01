import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaComponent } from './Projecte/Components/carta/carta.component';
import { FilaComponent } from './Projecte/Components/fila/fila.component';
import { BarallaComponent } from './Projecte/Components/baralla/baralla.component';
import { JugadorComponent } from './Projecte/Components/jugador/jugador.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaComponent,
    FilaComponent,
    BarallaComponent,
    JugadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
