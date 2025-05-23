import { TestBed } from '@angular/core/testing';

import { CurriculoService } from '../src/app/services/curriculo.service';

describe('CuriculoService', () => {
  let service: CurriculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurriculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
