import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

// TESTES DO COMPONENTE RODAPÉ
describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

// CONFIGURA O TESTE
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TESTA SE O COMPONENTE FOI CRIADO
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
