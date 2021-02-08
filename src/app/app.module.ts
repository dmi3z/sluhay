import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { BandsComponent } from './components/bands/bands.component';
import { BandItemComponent } from './components/band-item/band-item.component';
import { HttpClientModule } from '@angular/common/http';
import { BandLogoComponent } from './components/band-logo/band-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentCardComponent,
    BandsComponent,
    BandItemComponent,
    BandLogoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
