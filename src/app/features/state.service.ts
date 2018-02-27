import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
  counter = 0;
  constructor() { }

  getCounter(): number {
    return this.counter;
  }

  setCounter(val: number) {
    this.counter = val;
  }

}
