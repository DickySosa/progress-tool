import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasalMetabolicRateComponent } from './basal-metabolic-rate.component';

describe('BasalMetabolicRateComponent', () => {
  let component: BasalMetabolicRateComponent;
  let fixture: ComponentFixture<BasalMetabolicRateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasalMetabolicRateComponent]
    });
    fixture = TestBed.createComponent(BasalMetabolicRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
