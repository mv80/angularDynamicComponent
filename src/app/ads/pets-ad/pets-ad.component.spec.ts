import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsAdComponent } from './pets-ad.component';

describe('PetsAdComponent', () => {
  let component: PetsAdComponent;
  let fixture: ComponentFixture<PetsAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
