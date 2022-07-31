import { ApiService } from './../../services/api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.css']
})
export class TopGamesComponent implements OnInit {

  cards!: any[]

  constructor(private api: ApiService) { }



  ngOnInit(): void {
    this.api.getAllCards$().subscribe(cards => this.cards = cards)
    this.api.getCard$("top").subscribe(cards => this.cards = cards)
  }

}
