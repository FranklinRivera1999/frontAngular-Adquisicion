import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../services/event.service';
import {Evento} from '../../interfaces/evento' ;

@Component({
  selector: 'app-eventodet',
  templateUrl: './eventodet.component.html',
  styleUrls: ['./eventodet.component.css']
})
export class EventodetComponent implements OnInit {

  evento:Evento;
  id: string;

  constructor(private activeRoute: ActivatedRoute, 
    private router: Router, 
    private eventoService: EventService) { }

  ngOnInit() {

    this.activeRoute.params.subscribe(params =>{
      this.id = params['id'];
      this.eventoService.getEvento(this.id)
      .subscribe(
        res => {
          this.evento=res;
        },
        err => console.log(err)
      )
    })
  }

}
