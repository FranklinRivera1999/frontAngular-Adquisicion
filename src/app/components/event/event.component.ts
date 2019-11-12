import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {


  eventos = [];

  constructor(private eventoService: EventService, private router: Router) { }

  ngOnInit() {
    this.eventoService.getEventos()
      .subscribe(
        res=> {
          console.log(res);
          this.eventos = res;
        },
        err =>  console.log(err)
      )
  }

  selectedEvento(id: string){
    this.router.navigate(['/evento', id]); 
  }

}
