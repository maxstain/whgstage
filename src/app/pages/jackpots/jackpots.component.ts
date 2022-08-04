import { async } from 'rxjs';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jackpots',
  templateUrl: './jackpots.component.html',
  styleUrls: ['./jackpots.component.css']
})
export class JackpotsComponent implements OnInit {

  jackpots: any[] = []
  games: any[] = []
  list: any[] = []

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getJackpots()
  }

  getJackpots() {
    this.api.getAllCards$().subscribe(games => this.games = games)
    this.api.getJackpots$().subscribe(jackpots => this.jackpots = jackpots)

    this.jackpots.map((e, i) => {
      this.list = this.games.find(element => {
        if (element.game === e.id) {
          this.list.push({
            "id": e.id,
            "name": element.name,
            "image": element.image,
            "amount": e.amount,
          })
        }
      })
    })
    console.log('jackpots', this.list)
  }
}
