import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnituresFilterComponent } from './furnitures-filter.component';

describe('FurnituresFilterComponent', () => {
  let component: FurnituresFilterComponent;
  let fixture: ComponentFixture<FurnituresFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnituresFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnituresFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
