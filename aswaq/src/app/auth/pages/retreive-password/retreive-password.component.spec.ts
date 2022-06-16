import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetreivePasswordComponent } from './retreive-password.component';

describe('RetreivePasswordComponent', () => {
  let component: RetreivePasswordComponent;
  let fixture: ComponentFixture<RetreivePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetreivePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetreivePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
