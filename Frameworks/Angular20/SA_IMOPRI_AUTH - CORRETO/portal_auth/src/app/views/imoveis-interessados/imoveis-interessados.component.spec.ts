import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImoveisInteressadosComponent } from './imoveis-interessados.component';

describe('ImoveisInteressadosComponent', () => {
  let component: ImoveisInteressadosComponent;
  let fixture: ComponentFixture<ImoveisInteressadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImoveisInteressadosComponent]
    });
    fixture = TestBed.createComponent(ImoveisInteressadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
