import { Jackpot } from './../../models/jackpot';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jackpots',
  templateUrl: './jackpots.component.html',
  styleUrls: ['./jackpots.component.css']
})
export class JackpotsComponent implements OnInit {

  jackpots: any[];
  cards: any[];
  card: any;
  list: Jackpot[];

  constructor(private api: ApiService) {
    this.jackpots = []
    this.cards = []
    this.list = []
  }

  ngOnInit(): void {
    this.api.getAllCards$().subscribe(cards => this.cards = cards)
    this.api.getJackpots$().subscribe(jackpots => this.jackpots = jackpots)

    this.jackpots.map((jackpot, i) => {
      this.cards.find(card => {
        if (card.id === jackpot.game) {
          this.card = card
        }
      })
      this.list.push(new Jackpot(this.card.id, this.card.name, this.card.image, jackpot.amount))
      console.log('list', this.list)
    })
  }
}
