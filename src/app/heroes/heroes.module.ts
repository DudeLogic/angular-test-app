import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroesComponent} from './heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
      CommonModule,
      HeroesRoutingModule,
      HttpClientModule,
      TranslateModule.forChild({
        // extend: true // use if extending from parent component
        // here just for example just implementing translation all again
       loader: {provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
      })
    ],
    declarations: [HeroesComponent]
})

export class HeroesModule {}
