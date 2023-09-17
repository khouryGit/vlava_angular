import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeatureComponent } from './feature/feature.component';
import { ExploreComponent } from './explore/explore.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { FaqComponent } from './faq/faq.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    ExploreComponent,
    TeamMemberComponent,
    FaqComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
