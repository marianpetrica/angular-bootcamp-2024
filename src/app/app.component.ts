import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {OneComponent} from './one/one.component';
import {TwoComponent} from './two/two.component';
import {ThreeComponent} from './three/three.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OneComponent, TwoComponent, ThreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
