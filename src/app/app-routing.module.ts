import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventComponent } from './components/event/event.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { EventodetComponent } from './components/eventodet/eventodet.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import {BodyComponent} from './components/body/body.component'

const routes: Routes = [
  {
    path: 'eventos',
    component: EventComponent
  },
  {
    path: 'ticket',
    component: TicketComponent
  },
  {
    path: 'evento/:id',
    component: EventodetComponent
  },
  {
    path: '',
    component: BodyComponent
  },
  {
    path:'perfil',
    component: PerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
