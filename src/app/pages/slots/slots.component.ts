import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {

  cards!: Observable<any[]>

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const catId$ = this.route.params.pipe(
      map(params => params['catId'])
    );

    this.cards = this.api.getCard$(catId$);
  }

}
