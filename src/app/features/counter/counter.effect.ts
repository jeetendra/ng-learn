import {Injectable} from '@angular/core';
import { tap, exhaustMap, takeUntil, takeWhile } from 'rxjs/operators';
import { Actions, Effect, ofType, OnRunEffects, EffectNotification } from '@ngrx/effects';
import { CounterActions, CounterActionType,  } from './counter.action';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {defer} from 'rxjs/observable/defer';

@Injectable()
export class CounterEffect /*implements OnRunEffects*/ {

  constructor(private actions$: Actions) {}

  // @Effect({ dispatch: false }) counterActions = this.actions$.pipe(
  //   ofType<CounterActions>(CounterActionType.INCREMNET, CounterActionType.DECREMENT),
  //   tap(action => console.log(action))
  // );

  // @Effect({ dispatch: false }) init$: Observable<any>= defer(() => of(null))
  // .pipe(
  //   tap(() => console.log('init$'))
  // );

  // ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>): Observable<EffectNotification> {
  //   return this.actions$.pipe(
  //     ofType(CounterActionType.INCREMNET, CounterActionType.DECREMENT),
  //     exhaustMap(
  //       () => resolvedEffects$.pipe(
  //        takeUntil(this.actions$.pipe(ofType(CounterActionType.RESET)))
  //       )
  //     ));
  // }

}


