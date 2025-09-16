//IMPORTAÇÕES NECESSÁRIAS
import { TestBed } from '@angular/core/testing';

import { CurriculoService } from './curriculo.service';


//TESTE DO SERVIÇO CURRICULO
describe('CuriculoService', () => {
  let service: CurriculoService;


  //CONFIGURAÇÃO DO TESTE
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurriculoService);
  });


  //VERIFICAÇÃO SE O SERVIÇO FOI CRIADO COM SUCESSO
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
