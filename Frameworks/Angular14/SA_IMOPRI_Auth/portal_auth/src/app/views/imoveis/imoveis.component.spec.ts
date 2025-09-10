import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelComponent } from './imoveis.component';

describe('ImovelComponent', () => {
  let component: ImovelComponent;
  let fixture: ComponentFixture<ImovelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImovelComponent]
    });
    fixture = TestBed.createComponent(ImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
