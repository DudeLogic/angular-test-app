import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  { path: 'dashboard',
    component: DashboardComponent
  },
  { path: 'detail/:id',
    loadChildren: () => import('./hero-detail/hero-detail.module').then(m => m.HeroeDetailModule)
  },
  {
    path: 'ngrx-counter',
    loadChildren: () => import ('./ngrx-counter/ngrx-counter.module').then(m => m.NgrxCounterModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
