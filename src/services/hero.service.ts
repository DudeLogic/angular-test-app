import { Injectable } from '@angular/core';
import { HEROES } from '../app/mock-heroes';
import { Hero } from '../interfaces/hero';
import { Observable, scheduled, of } from 'rxjs';
import { MessageService } from './messages.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import {} from '../heroes/heroes.component'

@Injectable({
  providedIn: 'root'
})
export class HeroService implements Resolve<Hero> {


  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero> {
    const id = route.paramMap.get('id');
    // tslint:disable-next-line: radix
    return this.getHero(parseInt(id));

  }
}
