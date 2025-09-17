import { TestBed } from '@angular/core/testing';

import { InteressadosService } from './interessados.service';

describe('InteressadosService', () => {
  let service: InteressadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteressadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
