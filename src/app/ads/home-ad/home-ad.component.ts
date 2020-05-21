import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from 'src/app/models/ad.component';

@Component({
  selector: 'app-home-ad',
  templateUrl: './home-ad.component.html',
  styleUrls: ['./home-ad.component.scss']
})
export class HomeAdComponent implements OnInit, AdComponent {
  
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
