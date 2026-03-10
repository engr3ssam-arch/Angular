import { TestBed } from '@angular/core/testing';

import { HttpClient} from '@angular/common/http';

describe('HttpclientService', () => {
  let service: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
