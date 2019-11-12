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
          this.evento = res;
          console.log('INICIO COMPONENTE DETALLE EVENTO');
          console.log(this.evento)
        },
        err => console.log(err)
      )
    });
  }

 pay(amount) {    
    var eventoServicio = this.eventoService;
    
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_O4VSUNTYJYgm3Ppgz50KHaBB',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token);
      

            
        eventoServicio.pagar(token).subscribe(
            res=> {
                console.log(res);
              },
              err =>  console.log(err)
        );        
      }
    });
 
    handler.open({
      name: 'Compra entrada',
      description: 'Ingrese su tarjeta para realizar la compra',
      amount: amount * 100
    });
    


  }
}
