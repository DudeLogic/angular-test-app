import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailRoutingModule } from './hero-detail-routing.module';
import { HeroDetailComponent } from './hero-detail.component';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
    imports: [
      CommonModule,
      HeroDetailRoutingModule,
      FormsModule,
      TranslateModule.forChild({ extend: true})
    ],
    declarations: [HeroDetailComponent]
})

export class HeroeDetailModule {}
