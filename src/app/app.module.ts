import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { JobAdComponent } from './ads/job-ad/job-ad.component';
import { HomeAdComponent } from './ads/home-ad/home-ad.component';
import { PetsAdComponent } from './ads/pets-ad/pets-ad.component';

@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    AdBannerComponent,
    JobAdComponent,
    HomeAdComponent,
    PetsAdComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents : [JobAdComponent,HomeAdComponent,PetsAdComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
