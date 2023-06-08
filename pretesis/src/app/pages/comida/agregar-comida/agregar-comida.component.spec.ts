import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarComidaComponent } from './agregar-comida.component';

describe('AgregarComidaComponent', () => {
  let component: AgregarComidaComponent;
  let fixture: ComponentFixture<AgregarComidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarComidaComponent]
    });
    fixture = TestBed.createComponent(AgregarComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
