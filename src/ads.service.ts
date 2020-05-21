import { Injectable } from '@angular/core';
import { PetsAdComponent } from './app/ads/pets-ad/pets-ad.component';
import { JobAdComponent } from './app/ads/job-ad/job-ad.component';
import { HomeAdComponent } from './app/ads/home-ad/home-ad.component';
import { AdItem } from './app/models/adItem';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor() { }
  getAds(){
    return [
   
     new AdItem(PetsAdComponent, {name: 'fish for sale', bio: 'Brave as they come'}),

      new AdItem(JobAdComponent, {name: 'need a nurse', bio: 'Smart as they come'}),

      new AdItem(PetsAdComponent,   {name: 'pets for salse',
      bio: 'come today'}), 
      new AdItem(HomeAdComponent,   {headline: 'Nice flat for rent!',
      body: 'come for open house today!'}), 
    ];
  }
}
