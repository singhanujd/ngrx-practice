import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class CounterService {

  constructor() { }

  loadCounter(){
    return of(100);
  }

}