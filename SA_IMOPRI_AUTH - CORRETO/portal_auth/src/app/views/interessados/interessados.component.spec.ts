import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteressadosComponent } from './interessados.component';

describe('InteressadosComponent', () => {
  let component: InteressadosComponent;
  let fixture: ComponentFixture<InteressadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteressadosComponent]
    });
    fixture = TestBed.createComponent(InteressadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
