import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  private number = signal(0);
  public value = this.number.asReadonly();

  constructor() {
  }

  emitNumber(num: number) {
    this.number.set(num);
  }

}
