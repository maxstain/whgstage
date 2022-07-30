import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private cards = [
    {
      categories: [
        "top",
        "slots",
        "new"
      ],
      name: "The Wish Master",
      image: "//stage.whgstage.com/scontent/images/games/NETHEWISHMASTER.jpg",
      id: "NETHEWISHMASTER"
    },
    {
      categories: [
        "top",
        "slots",
        "new"
      ],
      name: "Aliens",
      image: "//stage.whgstage.com/scontent/images/games/NEALIENS.jpg",
      id: "NEALIENS"
    },
    {
      categories: [
        "top",
        "slots",
        "new"
      ],
      name: "Starburst",
      image: "//stage.whgstage.com/scontent/images/games/NESTARBURST.jpg",
      id: "NESTARBURST"
    },
  ]

  constructor() { }

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
    return this.cards.map((cards) => cards)
  }
}
