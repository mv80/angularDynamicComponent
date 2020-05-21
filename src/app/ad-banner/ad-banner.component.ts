import { Component, OnInit, OnDestroy, Input, ViewChild, ComponentFactoryResolver, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { AdDirective } from '../ad.directive';
import { AdItem } from '../models/adItem';
import { AdComponent } from '../models/ad.component';
import {PetsAdComponent} from '../ads/pets-ad/pets-ad.component';
import {JobAdComponent} from '../ads/job-ad/job-ad.component';
import { HomeAdComponent} from '../ads/home-ad/home-ad.component';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements  AfterViewInit{
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.adHostDirective.forEach((child, index) => {
        this.loadAll(child,index);
      }) 
    }, 0)
   
  }
@Input() ads : AdItem[];

@ViewChildren(AdDirective) adHostDirective : QueryList<AdDirective>

  constructor(private  componentFactoryResolver:  ComponentFactoryResolver) { }

  loadAll(child, index){
    console.log(index);
    const ad :AdItem = this.ads[index];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ad.component);
    const viewcontainerRef = child.viewContainerRef;
    viewcontainerRef.clear();
     const componenntRef = viewcontainerRef.createComponent(componentFactory);
     (<AdComponent>componenntRef.instance ).data = ad.data;
  }


}
