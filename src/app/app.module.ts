import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EventComponent } from './components/event/event.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { EventodetComponent } from './components/eventodet/eventodet.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { BodyComponent } from './components/body/body.component';
import { BarraComponent } from './components/barra/barra.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EventComponent,
    TicketComponent,
    EventodetComponent,
    PerfilComponent,
    BodyComponent,
    BarraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
