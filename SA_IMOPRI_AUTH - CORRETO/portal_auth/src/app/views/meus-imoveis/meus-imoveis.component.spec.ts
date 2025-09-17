import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeusImoveisComponent } from './meus-imoveis.component';

describe('MeusImoveisComponent', () => {
  let component: MeusImoveisComponent;
  let fixture: ComponentFixture<MeusImoveisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeusImoveisComponent]
    });
    fixture = TestBed.createComponent(MeusImoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
