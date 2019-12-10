import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private eventoService: EventService,  private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  loginUsuario(email: HTMLInputElement, contraseña: HTMLInputElement): boolean{
    this.eventoService
      .createPhoto(email.value, contraseña.value)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/eventos'])
        },
        err => {
                console.log(err);
                this.toastr.error('Oops, something went wrong getting the logged in status');
        }
      );
    return false
  }

}
