import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private cards!: any[]

  constructor(private httpClient: HttpClient) { }

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
