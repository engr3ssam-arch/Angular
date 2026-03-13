import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDial } from './choose-dial';

describe('ChooseDial', () => {
  let component: ChooseDial;
  let fixture: ComponentFixture<ChooseDial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseDial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseDial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
