import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards!: any[]

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllCards$().subscribe(cards => this.cards = cards)
  }

}
