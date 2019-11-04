import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Evento} from '../interfaces/evento';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  URI='http://localhost:5000/api/evento';
  constructor(private http: HttpClient) { }

  getEventos(){
    return this.http.get<Evento[]>(this.URI);
  }

  getEvento(id: string){
    return this.http.get<Evento>(this.URI+ '/'+id);
  }
}
