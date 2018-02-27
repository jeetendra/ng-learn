import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css'],
  providers: [StateService]
})
export class ChildCompComponent implements OnInit {
  current: number;
  constructor(private state: StateService) { }

  ngOnInit() {
    this.current = this.state.getCounter();
  }

  add() {
    this.state.setCounter(this.state.getCounter() + 1);
    this.current = this.state.getCounter();
  }

}
