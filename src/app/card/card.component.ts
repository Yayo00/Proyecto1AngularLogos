import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  texto="Click";
  inactivo=false;
  textoRandom=""

  //esta es la entrada que recibirá todos los datos
  @Input() dataEntrada:any;

  mostrarTexto(){
    this.texto="Me diste click";
  }

}
