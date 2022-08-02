import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jackpot',
  templateUrl: './jackpot.component.html',
  styleUrls: ['./jackpot.component.css']
})
export class JackpotComponent implements OnInit {

  @Input() jackpot: any;

  constructor() { }

  ngOnInit(): void {
  }

}
