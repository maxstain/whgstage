import { HttpClient } from '@angular/common/http';
import { async, of } from 'rxjs';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jackpots',
  templateUrl: './jackpots.component.html',
  styleUrls: ['./jackpots.component.css']
})
export class JackpotsComponent implements OnInit {

  jackpots: any[] = []
  cards: any[] = []
  list: any[] = []

  constructor(private api: ApiService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.addJackpots()
  }

  addJackpots() {
    this.api.getAllCards$().subscribe(cards => this.cards = cards)
    this.api.getJackpots$().subscribe(jackpots => this.jackpots = jackpots)

    this.jackpots.forEach(jackpot => {
      this.cards.find((card) => {
        console.log('list', card)
        if (card.id === jackpot.game) {
          this.list.push({
            "id": jackpot.game,
            "name": card.name,
            "image": card.image,
            "amount": jackpot.amount,
          })
        }
      })
    })
  }
}
