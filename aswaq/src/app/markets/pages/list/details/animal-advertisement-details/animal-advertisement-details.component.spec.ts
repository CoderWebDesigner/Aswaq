import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalAdvertisementDetailsComponent } from './animal-advertisement-details.component';

describe('AnimalAdvertisementDetailsComponent', () => {
  let component: AnimalAdvertisementDetailsComponent;
  let fixture: ComponentFixture<AnimalAdvertisementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalAdvertisementDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalAdvertisementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
