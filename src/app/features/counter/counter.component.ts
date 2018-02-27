import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as Counter from './counter.action';
import { AppState } from './counter.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.counter = this.store.select('counter');
  }

  increment() {
    this.store.dispatch(new Counter.Increment());
  }

  decrement() {
    this.store.dispatch(new Counter.Decrement());
  }

  reset() {
    this.store.dispatch(new Counter.Reset());
  }

}
