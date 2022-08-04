import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, async } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private cards!: any[]
  private jackpots!: any[]

  constructor(private httpClient: HttpClient) {
  }

  getCard$(catId: string) {
    return of(this.getCards(catId))
  }

  private getCards(catId: string) {
    return this.cards.filter(({ categories }) => categories.includes(catId)).map((cards) => cards)
  }

  getAllCards$(list: any[]) {
    return of(this.getAllCards(list))
  }

  private getAllCards(list: any[]) {
    this.httpClient.get('http://stage.whgstage.com/front-end-test/games.php').subscribe((result: any) => {
      list = result;
    })
    return this.cards.map((cards) => cards)
  }

  getJackpots$(list: any[]) {
    return of(this.getJackpots(list))
  }

  private getJackpots(list: any[]) {
    this.httpClient.get('http://stage.whgstage.com/front-end-test/jackpots.php').subscribe((result: any) => {
      list = result;
    })
    return this.cards.map((jackpots) => jackpots)
  }
}
