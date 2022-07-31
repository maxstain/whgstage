import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {

  cards!: any[]

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllCards$().subscribe(cards => this.cards = cards)
    this.api.getCard$("slots").subscribe(cards => this.cards = cards)
  }

}
