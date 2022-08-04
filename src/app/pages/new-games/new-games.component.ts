import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.component.html',
  styleUrls: ['./new-games.component.css']
})
export class NewGamesComponent implements OnInit {

  cards: any[] = []

  constructor(private api: ApiService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllCards$().subscribe(cards => this.cards = cards)
    this.getCard$("new").subscribe(cards => this.cards = cards)
  }

  getCard$(catId: string) {
    return of(this.getCards(catId))
  }

  private getCards(catId: string) {
    return this.cards.filter(({ categories }) => categories.includes(catId)).map((cards) => cards)
  }

  getAllCards$() {
    return of(this.getAllCards())
  }

  private getAllCards() {
    this.httpClient.get('http://stage.whgstage.com/front-end-test/games.php').subscribe((result: any) => {
      this.cards = result;
    })
    return this.cards.map((cards) => cards)
  }

}
