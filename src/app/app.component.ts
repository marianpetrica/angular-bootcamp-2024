import {Component, Signal} from '@angular/core';
import {NumberService} from './services/number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  number: Signal<number>;

  constructor(private numberService : NumberService) {
    this.number = this.numberService.value;

  }
}
