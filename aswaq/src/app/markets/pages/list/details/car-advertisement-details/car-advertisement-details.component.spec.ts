import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAdvertisementDetailsComponent } from './car-advertisement-details.component';

describe('CarAdvertisementDetailsComponent', () => {
  let component: CarAdvertisementDetailsComponent;
  let fixture: ComponentFixture<CarAdvertisementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAdvertisementDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAdvertisementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
