import { TestBed } from '@angular/core/testing';

import { InteressadosService } from './interessados.service';

// TESTES DO SERVIÇO DE INTERESSADOS
describe('InteressadosService', () => {
  let service: InteressadosService;

  // CONFIGURA O TESTE
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteressadosService);
  });

  // TESTA SE O SERVIÇO FOI CRIADO
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
