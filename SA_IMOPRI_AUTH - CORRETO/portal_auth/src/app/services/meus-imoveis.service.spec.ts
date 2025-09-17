import { TestBed } from '@angular/core/testing';

import { MeusImoveisService } from './meus-imoveis.service';

describe('MeusImoveisService', () => {
  let service: MeusImoveisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeusImoveisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
