import { TestBed } from '@angular/core/testing';

import { Imoveis } from './imoveis';

describe('Imoveis', () => {
  let service: Imoveis;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Imoveis);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
