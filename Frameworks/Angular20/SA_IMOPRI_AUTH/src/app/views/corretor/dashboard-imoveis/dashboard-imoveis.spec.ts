import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardImoveis } from './dashboard-imoveis';

describe('DashboardImoveis', () => {
  let component: DashboardImoveis;
  let fixture: ComponentFixture<DashboardImoveis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardImoveis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardImoveis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
