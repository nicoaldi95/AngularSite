import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingEjercicioFinal } from './data-binding-ejercicio-final';

describe('DataBindingEjercicioFinal', () => {
  let component: DataBindingEjercicioFinal;
  let fixture: ComponentFixture<DataBindingEjercicioFinal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindingEjercicioFinal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingEjercicioFinal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
