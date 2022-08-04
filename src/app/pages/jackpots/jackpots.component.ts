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
    this.getJackpots$().subscribe(jackpots => this.jackpots = jackpots)

    this.jackpots.forEach(jackpot => {
      this.cards.find(card => {
        if (card.id == jackpot.game) {
          this.list.push({
            "id": jackpot.game,
            "name": card.name,
            "image": card.image,
            "amount": jackpot.amount,
          })
        }
        console.log('list', this.list)
      })
    })
  }

  getJackpots$() {
    return of(this.getJackpots())
  }

  private getJackpots() {
    this.httpClient.get('http://stage.whgstage.com/front-end-test/jackpots.php').subscribe((result: any) => {
      this.jackpots = result;
      console.log("Jackpots: ", result)
    })
    return this.cards.map((jackpots) => jackpots)
  }
}
