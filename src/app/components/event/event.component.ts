import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {


  eventos= [];

  constructor(private eventoService: EventService) { }

  ngOnInit() {
    this.eventoService.getEventos()
      .subscribe(
        res=> {
          this.eventos = res
        },
        err =>  console.log(err)
      )
  }

  selectedEvento(id: string){
    console.log(id)
  }

}
