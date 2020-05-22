import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NgrxCounterComponent} from './ngrx-counter.component';

const routes: Routes = [
  { path: '', component: NgrxCounterComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
],
  exports: [RouterModule],
})

export class NgrxCounterRoutingModule {}

