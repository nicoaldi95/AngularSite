import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  imports: [
    CommonModule
  ],
  templateUrl: './ng-if.html',
  styleUrl: './ng-if.css',
})
export class NgIf {
  mostrar = false;

  toggle() {
    this.mostrar = !this.mostrar;
  }

  logueado(){
    this.mostrar = !this.mostrar;
  }

}
