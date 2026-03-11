import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseStepper } from './purchase-stepper';

describe('PurchaseStepper', () => {
  let component: PurchaseStepper;
  let fixture: ComponentFixture<PurchaseStepper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseStepper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseStepper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
