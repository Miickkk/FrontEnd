import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InteressesComponent } from './interesses.component';
import { By } from '@angular/platform-browser';

describe('InteressesComponent', () => {
  let component: InteressesComponent;
  let fixture: ComponentFixture<InteressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InteressesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(InteressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct number of imóveis interessados', () => {
    const cards = fixture.debugElement.queryAll(By.css('.card'));
    expect(cards.length).toBe(component.imoveisInteressados.length);
  });

  it('should display imóvel titles correctly', () => {
    const titles = fixture.debugElement.queryAll(By.css('.card-title'));
    expect(titles[0].nativeElement.textContent).toContain('Casa Térrea com Quintal Amplo');
    expect(titles[1].nativeElement.textContent).toContain('Cobertura de Luxo Frente Mar');
    expect(titles[2].nativeElement.textContent).toContain('Kitnet Compacta e Funcional');
  });

  it('should display "Ver Imóvel" button in each card', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.btn-ver'));
    buttons.forEach(btn => {
      expect(btn.nativeElement.textContent).toContain('Ver Imóvel');
    });
  });
});
