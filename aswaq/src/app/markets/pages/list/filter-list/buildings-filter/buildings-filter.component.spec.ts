import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsFilterComponent } from './buildings-filter.component';

describe('BuildingsFilterComponent', () => {
  let component: BuildingsFilterComponent;
  let fixture: ComponentFixture<BuildingsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
