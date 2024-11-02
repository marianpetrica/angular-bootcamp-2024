import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _subject = new BehaviorSubject('');
  subjectValues = this._subject.asObservable();

  constructor() {
  }

  sendMessage(text: string) {
    this._subject.next(text);
  }
}
