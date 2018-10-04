import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class RegistroService {

  constructor(private http: HttpClient) { }
  //https://github.com/JoanMarin/DojoTDD-1/blob/master/app.js
  //https://cors-anywhere.herokuapp.com/
  //https://github.com/luis8alopez/BankBackend/blob/master/app.js
  guardarRegistro(persona: Persona): Observable<any>{
    const url = "https://interamerican-bankbackend.herokuapp.com/register";
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': '',
      
    });
    return this.http.post(url,persona,{headers: header});
  }
}
