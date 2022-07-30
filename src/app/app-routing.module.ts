import { HomeComponent } from './pages/home/home.component';
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
  { path: 'top-games', component: TopGamesComponent },
  { path: 'new-games', component: NewGamesComponent },
  { path: 'ball', component: BallComponent },
  { path: 'blackjack', component: BlackjackComponent },
  { path: 'fun', component: FunComponent },
  { path: 'jackpots', component: JackpotsComponent },
  { path: 'live', component: LiveComponent },
  { path: 'poker', component: PokerComponent },
  { path: 'roulette', component: RouletteComponent },
  { path: 'slots', component: SlotsComponent },
  { path: 'table', component: TableComponent },
  { path: 'virtual', component: VirtualComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
