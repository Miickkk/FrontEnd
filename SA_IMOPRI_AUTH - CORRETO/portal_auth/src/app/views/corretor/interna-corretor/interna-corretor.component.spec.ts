import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaCorretorComponent } from './interna-corretor.component';

describe('InternaCorretorComponent', () => {
  let component: InternaCorretorComponent;
  let fixture: ComponentFixture<InternaCorretorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternaCorretorComponent]
    });
    fixture = TestBed.createComponent(InternaCorretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
