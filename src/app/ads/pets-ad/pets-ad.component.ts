import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from 'src/app/models/ad.component';

@Component({
  selector: 'app-pets-ad',
  templateUrl: './pets-ad.component.html',
  styleUrls: ['./pets-ad.component.scss']
})
export class PetsAdComponent implements OnInit, AdComponent {
 
  name?: string;

  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
