import {createAction,props} from '@ngrx/store';

export const loadCounter = createAction('[Counter Component] Load Counter');
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const loadCounterSuccess = createAction('[Counter Component] Count Load Success',props<{count : number}>())
