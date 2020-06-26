import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {counterReducer} from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { CounterService } from './counter.service';
import { CounterEffects } from './counter.effects';

@NgModule({
  imports:      [
   BrowserModule,
   FormsModule,
   StoreModule.forRoot({count: counterReducer}),
   EffectsModule.forRoot([CounterEffects])
  ],
  declarations: [ AppComponent, HelloComponent, MyCounterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CounterService]
})
export class AppModule { }
