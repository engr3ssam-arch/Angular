import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurshaseMain } from './purshase-main';

describe('PurshaseMain', () => {
  let component: PurshaseMain;
  let fixture: ComponentFixture<PurshaseMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurshaseMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurshaseMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
