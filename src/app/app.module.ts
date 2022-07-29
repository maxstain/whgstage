import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { TopGamesComponent } from './pages/top-games/top-games.component';
import { NewGamesComponent } from './pages/new-games/new-games.component';
import { SlotsComponent } from './pages/slots/slots.component';
import { JackpotsComponent } from './pages/jackpots/jackpots.component';
import { LiveComponent } from './pages/live/live.component';
import { BlackjackComponent } from './pages/blackjack/blackjack.component';
import { RouletteComponent } from './pages/roulette/roulette.component';
import { TableComponent } from './pages/table/table.component';
import { PokerComponent } from './pages/poker/poker.component';
import { BallComponent } from './pages/ball/ball.component';
import { VirtualComponent } from './pages/virtual/virtual.component';
import { FunComponent } from './pages/fun/fun.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    TopGamesComponent,
    NewGamesComponent,
    SlotsComponent,
    JackpotsComponent,
    LiveComponent,
    BlackjackComponent,
    RouletteComponent,
    TableComponent,
    PokerComponent,
    BallComponent,
    VirtualComponent,
    FunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
