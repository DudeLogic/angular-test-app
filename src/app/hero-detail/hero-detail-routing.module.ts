import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HeroDetailComponent} from './hero-detail.component';
import { HeroService } from '../../services/hero.service';

const routes: Routes = [
  {
    path: '',
    component: HeroDetailComponent,
    // prevent loading of page until resolve is complete
    resolve : {
      hero: HeroService
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
],
  exports: [RouterModule],
})

export class HeroDetailRoutingModule {}
