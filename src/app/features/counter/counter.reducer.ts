
import { CounterActionType, CounterActions } from './counter.action';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  counter: number;
}

export function counterReducer(state: number = 0, action: CounterActions) {
  switch (action.type) {

    case CounterActionType.INCREMNET:
    return state + 1;

    case CounterActionType.DECREMENT:
    return state - 1;

    case CounterActionType.RESET:
    return 0;
  }

  return state;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer
};
