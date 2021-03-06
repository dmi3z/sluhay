import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './modules/main/main.component';
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
import { FormsModalComponent } from './components/forms-modal/forms-modal.component';
import { ThanksComponent } from './modules/thanks/thanks.component';
import { SpasiboPopupComponent } from './components/spasibo-popup/spasibo-popup.component';
import { PlayerComponent } from './components/player/player.component';
import { BannerPlayerComponent } from './components/banner-player/banner-player.component';
import { SoundRangeComponent } from './components/sound-range/sound-range.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { BandItemHorizontalComponent } from './components/band-item-horizontal/band-item-horizontal.component';
import { BandsGenrePipe } from './pipes/bands-genre.pipe';
import { CutPipe } from './pipes/cut.pipe';
import { ProgressPipe } from './pipes/progress.pipe';
import { RotationComponent } from './modules/rotation/rotation.component';
import { RewardComponent } from './modules/reward/reward.component';
import { BannerStubComponent } from './components/banner-stub/banner-stub.component';
import { InvitationCardComponent } from './modules/rotation/components/invitation-card/invitation-card.component';
import { RequirementsCardComponent } from './modules/rotation/components/requirements-card/requirements-card.component';
import { QuoteComponent } from './components/quote/quote.component';
import { RewardAboutCardComponent } from './modules/reward/components/reward-about-card/reward-about-card.component';
import { RewardDescriptionCardComponent } from './modules/reward/components/reward-description-card/reward-description-card.component';
import { TypesOfCoefficientsComponent } from './modules/reward/components/types-of-coefficients/types-of-coefficients.component';
import { CoefficientsCalculationComponent } from './modules/reward/components/coefficients-calculation/coefficients-calculation.component';
import { RewardObtainingRulesComponent } from './modules/reward/components/reward-obtaining-rules/reward-obtaining-rules.component';

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
    StopPropagationDirective,
    FormsModalComponent,
    ThanksComponent,
    MainComponent,
    SpasiboPopupComponent,
    PlayerComponent,
    BannerPlayerComponent,
    SoundRangeComponent,
    BandItemHorizontalComponent,
    BandsGenrePipe,
    CutPipe,
    ProgressPipe,
    RotationComponent,
    RewardComponent,
    BannerStubComponent,
    InvitationCardComponent,
    RequirementsCardComponent,
    QuoteComponent,
    RewardAboutCardComponent,
    RewardDescriptionCardComponent,
    TypesOfCoefficientsComponent,
    CoefficientsCalculationComponent,
    MenuComponent,
    RewardObtainingRulesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSliderModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full',
      },
      {
        path: 'main',
        component: MainComponent,
      },
      {
        path: 'spasibo_za_podpisku',
        component: ThanksComponent,
      },
      {
        path: 'reward',
        component: RewardComponent,
      },
      {
        path: 'rotation',
        component: RotationComponent,
      },
    ]),
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
