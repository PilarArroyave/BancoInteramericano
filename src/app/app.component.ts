import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Banco Interamericano';

  countries = [
              {
                "name": "Argentina",
                "code": "ar"
              },
              {
                "name": "Bolivia",
                "code": "bo"
              },
              {
                "name": "Brasil",
                "code": "br"
              },
              {
                "name": "Chile",
                "code": "cl"
              },
              {
                "name": "Colombia",
                "code": "co"
              },
              {
                "name": "Costa Rica",
                "code": "cr"
              },
              {
                "name": "Cuba",
                "code": "cu"
              },
              {
                "name": "Ecuador",
                "code": "ec"
              },
              {
                "name": "El Salvador",
                "code": "sv"
              },
              {
                "name": "Guatemala",
                "code": "gt"
              },
              {
                "name": "Haití",
                "code": "ht"
              },
              {
                "name": "Honduras",
                "code": "hn"
              },
              {
                "name": "México",
                "code": "mx"
              },
              {
                "name": "Nicaragua",
                "code": "ni"
              },
              {
                "name": "Panamá",
                "code": "pa"
              },
              {
                "name": "Paraguay",
                "code":  "py"
              },
              {
                "name": "Perú",
                "code": "pe"
              },
              {
                "name": "República Dominicana",
                "code": "do"
              },
              {
                "name": "Uruguay",
                "code": "uy"
              },
              {
                "name": "Venezuela",
                "code":  "ve"
              }
  ];
}