import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {

  @Input() name = '';

  @Output() messageEmitter:EventEmitter<string> = new EventEmitter();

  sendMessageToOne() {
    this.messageEmitter.emit("Hello from Two!");
  }
}
