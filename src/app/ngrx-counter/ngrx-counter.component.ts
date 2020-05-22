import { Component, OnInit } from '@angular/core';
import { increment, decrement, reset } from './counter.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ngrx-counter',
  templateUrl: './ngrx-counter.component.html',
  styleUrls: ['./ngrx-counter.component.css']
})
export class NgrxCounterComponent implements OnInit {

  count$: Observable<number>;
  count: number = 0;
  nano = 'Nani';
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
    this.count$.subscribe((value) => {
      console.log('In subscribe');
      if (value) {
        console.log('Value', value)
        this.nano = value.toString(); }
      }
    );
    setTimeout(() => {this.nano = 'WTF'; }, 3500);
   }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
  ngOnInit(): void {
  }

}
