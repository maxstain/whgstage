import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jackpots',
  templateUrl: './jackpots.component.html',
  styleUrls: ['./jackpots.component.css']
})
export class JackpotsComponent implements OnInit {

  jackpots!: any[]
  games!: any[]
  list!: any[]

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getJackpots$().subscribe(jackpots => this.jackpots = jackpots)
    this.api.getAllCards$().subscribe(games => this.games = games)

    for (let i = 0; i < this.jackpots.length; i++) {
      const jackpot = this.jackpots[i];
      for (let j = 0; j < this.games.length; j++) {
        const game = this.games[j];
        if (jackpot.game == game.id) {
          this.list.push({
            "id": jackpot.game,
            "name": game.name,
            "amount": jackpot.amount,
          })
        }
      }
    }
  }

}
