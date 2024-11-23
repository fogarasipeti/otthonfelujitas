import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorsComponent } from './calculators.component';

describe('CalculatorsComponent', () => {
  let component: CalculatorsComponent;
  let fixture: ComponentFixture<CalculatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorsComponent]
    });
    fixture = TestBed.createComponent(CalculatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
