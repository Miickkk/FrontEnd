import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusInteresses } from './meus-interesses';

describe('MeusInteresses', () => {
  let component: MeusInteresses;
  let fixture: ComponentFixture<MeusInteresses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeusInteresses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeusInteresses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
