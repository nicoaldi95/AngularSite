import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBinding } from "./data-binding/data-binding";
import { Interpolacion } from "./interpolacion/interpolacion";
import { PropertyBinding } from "./property-binding/property-binding";
import { EventBinding } from "./event-binding/event-binding";
import { TwoWayBinding } from "./two-way-binding/two-way-binding";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Interpolacion, PropertyBinding, EventBinding, TwoWayBinding, DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TestWSL');
}
