import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class RegistroService {

  constructor(private http: HttpClient) { }

  guardarRegistro(persona: Persona): Observable<any>{
    const url = "";
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    return this.http.post(url,persona,{headers: header});
  }
}
