import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AsyncPipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {TwoComponent} from '../two/two.component';
import {MessageService} from '../../services/message.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgClass,
    NgForOf,
    TwoComponent,
    AsyncPipe
  ],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {

  title = "One Component :)"
  isDisabled = false;
  writtenText: string = '';
  containerClasses: string[] = ['container'];
  names: string[] = ["Ana", "Marian"];
  componentTwoName: string = "From Component One";

  constructor(private _messageService: MessageService) {
    this._messageService.subjectValues.subscribe(message =>{
      console.log(`Received message : ${message}`)
    })
  }

  toggleDisable() {
    console.log("I have been pressed")
    this.isDisabled = !this.isDisabled;
    if (this.isDisabled) {
      this.containerClasses.push("background-red")
    } else {
      let index = this.containerClasses.indexOf("background-red");
      this.containerClasses.splice(index, 1);
    }

  }

  handleMessageFromTwo(message: string) {
    console.log(`Received from two : ${message}`)
  }
}
