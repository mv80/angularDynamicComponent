import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from 'src/app/models/ad.component';

@Component({
  selector: 'app-job-ad',
  templateUrl: './job-ad.component.html',
  styleUrls: ['./job-ad.component.scss']
})
export class JobAdComponent implements OnInit, AdComponent {
  
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
