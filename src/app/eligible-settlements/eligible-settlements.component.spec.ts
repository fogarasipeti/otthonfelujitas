import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleSettlementsComponent } from './eligible-settlements.component';

describe('EligibleSettlementsComponent', () => {
  let component: EligibleSettlementsComponent;
  let fixture: ComponentFixture<EligibleSettlementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EligibleSettlementsComponent]
    });
    fixture = TestBed.createComponent(EligibleSettlementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
