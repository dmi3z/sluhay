import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { BandsComponent } from './components/bands/bands.component';
import { BandItemComponent } from './components/band-item/band-item.component';
import { HttpClientModule } from '@angular/common/http';
import { BandLogoComponent } from './components/band-logo/band-logo.component';
import { SupportPersonComponent } from './components/support-person/support-person.component';
import { SupportCompanyComponent } from './components/support-company/support-company.component';
import { ModalPopupComponent } from './components/modal-popup/modal-popup.component';
import { BannerComponent } from './components/banner/banner.component';
import { SupportPersonGroupComponent } from './components/support-person-group/support-person-group.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { SupportCompanyGroupComponent } from './components/support-company-group/support-company-group.component';
import { RouterModule } from '@angular/router';
import { BandPopupComponent } from './components/band-popup/band-popup.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StopPropagationDirective } from './directives/stop-propagation.directice';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentCardComponent,
    BandsComponent,
    BandItemComponent,
    BandLogoComponent,
    SupportPersonComponent,
    SupportCompanyComponent,
    ModalPopupComponent,
    BannerComponent,
    SupportPersonGroupComponent,
    SubscriptionComponent,
    SupportCompanyGroupComponent,
    BandPopupComponent,
    StopPropagationDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
