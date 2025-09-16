import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCorretor } from './header-corretor';

describe('HeaderCorretor', () => {
  let component: HeaderCorretor;
  let fixture: ComponentFixture<HeaderCorretor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCorretor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCorretor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
