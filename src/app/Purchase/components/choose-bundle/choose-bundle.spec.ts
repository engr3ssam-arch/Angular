import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBundle } from './choose-bundle';

describe('ChooseBundle', () => {
  let component: ChooseBundle;
  let fixture: ComponentFixture<ChooseBundle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseBundle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseBundle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
