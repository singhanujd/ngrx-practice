import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";
import {Actions,createEffect, ofType} from '@ngrx/effects';
import { loadCounter, loadCounterSuccess } from "./counter.actions";
import { catchError, map, switchMap, mergeMap } from "rxjs/operators";
import { EMPTY, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterEffects{
  constructor(
    private actions$: Actions,
    private counterService: CounterService
  ){ }

  loadCounter$ = createEffect(() => this.actions$.pipe(
    ofType(loadCounter),
    mergeMap(() => this.counterService.loadCounter().pipe(
      map(count => loadCounterSuccess({count})),
      catchError(() => EMPTY)
      )
    )
  ));
}
