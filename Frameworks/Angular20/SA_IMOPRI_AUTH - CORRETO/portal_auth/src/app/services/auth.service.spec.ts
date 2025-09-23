import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

// TESTES DO SERVIÇO DE AUTENTICAÇÃO
describe('AuthService', () => {
  let service: AuthService;

  // CONFIGURA O TESTE
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  // TESTA SE O SERVIÇO FOI CRIADO
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
