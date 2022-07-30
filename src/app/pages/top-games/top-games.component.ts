import { Observable, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.css']
})
export class TopGamesComponent implements OnInit {

  cards!: Observable<any[]>

  constructor(private api: ApiService, private route: ActivatedRoute) { }



  ngOnInit(): void {
    const catId$ = this.route.params.pipe(
      map(params => params['catId'])
    );

    this.cards = this.api.getCard$(catId$);
  }

}
