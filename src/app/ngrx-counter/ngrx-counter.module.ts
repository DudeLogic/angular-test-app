import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { counterReducer } from './counter.reducer';
import {TranslateModule} from '@ngx-translate/core';
import {NgrxCounterRoutingModule} from './ngrx-counter-routing.module';
import {NgrxCounterComponent} from './ngrx-counter.component';

@NgModule({
  imports: [
    CommonModule,
    NgrxCounterRoutingModule,
    StoreModule.forFeature('A counter', {count: counterReducer}),
    TranslateModule.forChild({extend: true})
  ],
  declarations: [NgrxCounterComponent]
})

export class NgrxCounterModule {}
