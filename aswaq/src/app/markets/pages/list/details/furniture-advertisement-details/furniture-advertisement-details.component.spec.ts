import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureAdvertisementDetailsComponent } from './furniture-advertisement-details.component';

describe('FurnitureAdvertisementDetailsComponent', () => {
  let component: FurnitureAdvertisementDetailsComponent;
  let fixture: ComponentFixture<FurnitureAdvertisementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnitureAdvertisementDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureAdvertisementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
