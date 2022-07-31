import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jackpots',
  templateUrl: './jackpots.component.html',
  styleUrls: ['./jackpots.component.css']
})
export class JackpotsComponent implements OnInit {

  jackpots!: any[]

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getJackpots$()
  }

}
