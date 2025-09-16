import { TestBed } from '@angular/core/testing';

import { Addresses } from './src/addresses';

describe('Addresses', () => {
  let service: Addresses;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Addresses);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
