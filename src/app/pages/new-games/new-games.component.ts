import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.component.html',
  styleUrls: ['./new-games.component.css']
})
export class NewGamesComponent implements OnInit {

  cards!: any[]

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllCards$().subscribe(cards => this.cards = cards)
    this.api.getCard$("new").subscribe(cards => this.cards = cards)
  }

}
