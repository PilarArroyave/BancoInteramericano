import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { HttpClient } from 'selenium-webdriver/http';
import { RegistroService } from './registro.service';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  persona: Persona;
  constructor(private registroServicio: RegistroService) { 
    this.persona = new Persona()
  }

  ngOnInit() {

  }

  guardarResgistro(){
    this.registroServicio.guardarRegistro(this.persona).subscribe(respuesta =>{
      console.log(respuesta);
    })
  }
  


}
