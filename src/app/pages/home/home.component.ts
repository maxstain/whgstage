import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: any[] = []

  constructor(private api: ApiService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    // this.api.getAllCards$().subscribe(cards => this.cards = cards)
    this.getAllCards$().subscribe(cards => this.cards = cards)
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
