import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-ejercicio-final',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './data-binding-ejercicio-final.html',
  styleUrl: './data-binding-ejercicio-final.css',
})
export class DataBindingEjercicioFinal {
  nombre = '';
  mostrar = false;

  saludar() {
    this.mostrar = true;
  }
}
