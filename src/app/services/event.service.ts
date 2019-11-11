import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Evento} from '../interfaces/evento';
import {Usuario} from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  URI = 'http://localhost:5000/api/evento';
  URI2 = 'http://localhost:5000/';
  constructor(private http: HttpClient) { }

  getEventos(){
    return this.http.get<Evento[]>(this.URI);
  }

  getEvento(id: string){
    return this.http.get<Evento>(this.URI+ '/'+id);
  }

  createPhoto(username: string, password: string) {
    const fd = new FormData();
    fd.append('username', username);
    fd.append('password', password);
    return this.http.post(this.URI2 + 'login', fd);
  }
}
