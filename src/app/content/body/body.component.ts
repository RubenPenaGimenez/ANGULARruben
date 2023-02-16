import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent {
  
  titulo = 'ANGULARruben';
  resources = "Recursos";
  nextSTEPS = "Avanzando en Angular";
  tablaRickOwens = "";
  tituloClase = "TITULO CON CLASE";

  disenadores = [
    { nombre: 'Rick Saturnino "Owens"', edad: 60, marca: '"Rick Owens"', patrimonio: '4 Millones de USA $' },
    { nombre: 'Brian Donnelly', edad: 48 , marca: '"Kaws"', patrimonio: '2 Millones de USA $' },
    { nombre: 'Virgil Abloh', edad: 41, marca: '"Off-White"', patrimonio: '100 Millones de USA $' },
    { nombre: 'Yoon Ahn', edad: 46, marca: '"Ambush"', patrimonio: '5 Millones de USA$' }
  ];

  disenador1 = this.disenadores[0];

  deportistas: string[] = ["Lebron James","Usain Bolt","James Hardem","Lionel Messi","Diego Armando Maradona"];

  classCambiado = false;
  miClase:string = 'text-danger';

  cambiarColor() {
    this.classCambiado = !this.classCambiado;  
  }

  cambioDeClase() {
    if(this.miClase === 'text-danger') {
      this.miClase = 'text-warning';
    } else {
      this.miClase = 'text-danger';
    }
  }

  unBooleano:boolean=false;
  changeClassBoolean() {
    this.unBooleano= !this.unBooleano;
  }

  miObjetoDeClase = {
    'btn': false,
    'btn-primary':false,
    'btn-danger':true,
    'card':true,
    'card-body bg bg-danger':true
  }
  
  miObjetoDeEstilos = {
    'color': 'orange',
    'font-weight' : 'bolder',
    'font-size' : '42px',
    'font-family' : 'Monda'
  }
  
}



