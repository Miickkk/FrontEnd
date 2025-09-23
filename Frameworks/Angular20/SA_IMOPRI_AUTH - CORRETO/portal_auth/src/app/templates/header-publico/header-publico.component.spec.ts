import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPublicoComponent } from './header-publico.component';

describe('HeaderPublicoComponent', () => {
  let component: HeaderPublicoComponent;
  let fixture: ComponentFixture<HeaderPublicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderPublicoComponent]
    });
    fixture = TestBed.createComponent(HeaderPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
