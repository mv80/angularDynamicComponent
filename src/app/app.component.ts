import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/ads.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
   
    this.ads = this.adsService.getAds();
  }
  constructor(private adsService: AdsService){

  }
  title = 'dynamicComponent';
  ads =[];
}
