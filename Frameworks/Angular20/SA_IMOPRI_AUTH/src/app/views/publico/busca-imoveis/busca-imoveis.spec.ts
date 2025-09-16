import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaImoveis } from './busca-imoveis';

describe('BuscaImoveis', () => {
  let component: BuscaImoveis;
  let fixture: ComponentFixture<BuscaImoveis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscaImoveis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaImoveis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
