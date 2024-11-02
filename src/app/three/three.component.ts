import { Component } from '@angular/core';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrl: './three.component.css'
})
export class ThreeComponent {

  constructor(private messageService: MessageService) {
  }

  sendMessage() {
    this.messageService.sendMessage("Something :D");
  }
}
