import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementAgreementComponent } from './advertisement-agreement.component';

describe('AdvertisementAgreementComponent', () => {
  let component: AdvertisementAgreementComponent;
  let fixture: ComponentFixture<AdvertisementAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
