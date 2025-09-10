import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InteressadosComponent } from './interessados.component';
import { InteressadosService } from '../services/interessados.service';
import { Interesses } from '../models/interesses.model';
import { of, throwError } from 'rxjs';

describe('InteressadosComponent', () => {
  let component: InteressadosComponent;
  let fixture: ComponentFixture<InteressadosComponent>;
  let service: InteressadosService;

  const mockInteressados: Interesses[] = [
    new Interesses(1, 'João', 'joao@email.com', '123456789', 'Tenho interesse', 101),
    new Interesses(2, 'Maria', 'maria@email.com', '987654321', 'Quero saber mais', 102)
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteressadosComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ InteressadosService ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteressadosComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(InteressadosService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar interessados ao inicializar', () => {
    spyOn(service, 'getInteresses').and.returnValue(of(mockInteressados));

    component.ngOnInit();

    expect(component.interessados.length).toBe(2);
    expect(component.interessados).toEqual(mockInteressados);
  });

  it('deve mostrar erro se falhar ao carregar interessados', () => {
    spyOn(service, 'getInteresses').and.returnValue(throwError(() => new Error('Erro')));

    component.ngOnInit();

    expect(component.erro).toBe('Erro ao carregar interessados.');
  });

  it('deve remover interessado com sucesso', () => {
    spyOn(service, 'deleteInteresse').and.returnValue(of(void 0));
    component.interessados = [...mockInteressados];

    component.removerInteressado(mockInteressados[0]);

    expect(component.interessados.length).toBe(1);
    expect(component.sucesso).toBe('Interessado removido com sucesso!');
  });

  it('deve mostrar erro se falhar ao remover interessado', () => {
    spyOn(service, 'deleteInteresse').and.returnValue(throwError(() => new Error('Erro')));
    component.interessados = [...mockInteressados];

    component.removerInteressado(mockInteressados[0]);

    expect(component.erro).toBe('Erro ao remover interessado.');
  });
});
