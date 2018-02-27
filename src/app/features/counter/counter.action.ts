import { Action } from '@ngrx/store';


export enum CounterActionType {
  INCREMNET = '[Counter] Increment',
  DECREMENT = '[Counter] DECREMENT',
  RESET = '[Counter] RESET'
}

export class Increment implements Action {
  private _type: string = CounterActionType.INCREMNET;

  get type() {
    return this._type;
  }
}

export class Decrement implements Action {
  readonly type: string = CounterActionType.DECREMENT;
}

export class Reset implements Action {
  readonly type: string = CounterActionType.RESET;
}

export type CounterActions = Increment | Decrement | Reset;
