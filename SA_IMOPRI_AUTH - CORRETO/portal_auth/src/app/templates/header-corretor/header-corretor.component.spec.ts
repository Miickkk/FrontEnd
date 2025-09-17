import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCorretorComponent } from './header-corretor.component';

describe('HeaderCorretorComponent', () => {
  let component: HeaderCorretorComponent;
  let fixture: ComponentFixture<HeaderCorretorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderCorretorComponent]
    });
    fixture = TestBed.createComponent(HeaderCorretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});