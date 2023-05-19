import { Component, OnInit } from '@angular/core';
import { Card } from './entity/Card';
import {cards} from './tasks/cards';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'my-first-project ANGULAR';
  public arrayCards: Array<Card>=[];

  ngOnInit(): void {
    this.arrayCards =  cards;
    console.log(this.arrayCards)
  }

}
