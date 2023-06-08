import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComidasComponent } from './listar-comidas.component';

describe('ListarComidasComponent', () => {
  let component: ListarComidasComponent;
  let fixture: ComponentFixture<ListarComidasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarComidasComponent]
    });
    fixture = TestBed.createComponent(ListarComidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
