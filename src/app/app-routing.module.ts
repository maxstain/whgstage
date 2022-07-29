import { VirtualComponent } from './pages/virtual/virtual.component';
import { TableComponent } from './pages/table/table.component';
import { SlotsComponent } from './pages/slots/slots.component';
import { RouletteComponent } from './pages/roulette/roulette.component';
import { PokerComponent } from './pages/poker/poker.component';
import { NewGamesComponent } from './pages/new-games/new-games.component';
import { LiveComponent } from './pages/live/live.component';
import { JackpotsComponent } from './pages/jackpots/jackpots.component';
import { FunComponent } from './pages/fun/fun.component';
import { BlackjackComponent } from './pages/blackjack/blackjack.component';
import { BallComponent } from './pages/ball/ball.component';
import { TopGamesComponent } from './pages/top-games/top-games.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'top-games-component', component: TopGamesComponent },
  { path: 'new-games-component', component: NewGamesComponent },
  { path: 'ball-component', component: BallComponent },
  { path: 'blackjack-component', component: BlackjackComponent },
  { path: 'fun-component', component: FunComponent },
  { path: 'jackpots-component', component: JackpotsComponent },
  { path: 'live-component', component: LiveComponent },
  { path: 'poker-component', component: PokerComponent },
  { path: 'roulette-component', component: RouletteComponent },
  { path: 'slots-component', component: SlotsComponent },
  { path: 'table-component', component: TableComponent },
  { path: 'virtual-component', component: VirtualComponent },
  { path: '**', component: TopGamesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
