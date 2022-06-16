import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementLocationComponent } from './advertisement-location.component';

describe('AdvertisementLocationComponent', () => {
  let component: AdvertisementLocationComponent;
  let fixture: ComponentFixture<AdvertisementLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
