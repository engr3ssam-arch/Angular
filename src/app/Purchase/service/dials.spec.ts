import { TestBed } from '@angular/core/testing';

import { Dials } from './dials';

describe('Dials', () => {
  let service: Dials;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dials);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
