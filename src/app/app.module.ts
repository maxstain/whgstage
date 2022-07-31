import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
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
import { BodyComponent } from './components/body/body.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { JackpotComponent } from './components/jackpot/jackpot.component';

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
    FunComponent,
    CardComponent,
    HomeComponent,
    JackpotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
