import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleMassIndexComponent } from './muscle-mass-index.component';

describe('MuscleMassIndexComponent', () => {
  let component: MuscleMassIndexComponent;
  let fixture: ComponentFixture<MuscleMassIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuscleMassIndexComponent]
    });
    fixture = TestBed.createComponent(MuscleMassIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
