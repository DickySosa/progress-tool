import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFatPercentageComponent } from './body-fat-percentage.component';

describe('BodyFatPercentageComponent', () => {
  let component: BodyFatPercentageComponent;
  let fixture: ComponentFixture<BodyFatPercentageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyFatPercentageComponent]
    });
    fixture = TestBed.createComponent(BodyFatPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
