import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.component.html',
  styleUrls: ['./new-games.component.css']
})
export class NewGamesComponent implements OnInit {

  cards!: Observable<any[]>

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const catId$ = this.route.params.pipe(
      map(params => params['catId'])
    );

    this.cards = this.api.getCard$(catId$);
  }

}
