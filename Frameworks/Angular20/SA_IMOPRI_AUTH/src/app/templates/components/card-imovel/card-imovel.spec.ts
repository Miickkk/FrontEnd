import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImovel } from './card-imovel';

describe('CardImovel', () => {
  let component: CardImovel;
  let fixture: ComponentFixture<CardImovel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardImovel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardImovel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
