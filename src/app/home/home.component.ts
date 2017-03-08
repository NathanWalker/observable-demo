import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as userActions from '../core/actions/user.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  users$: Observable<any>;

  constructor(private store: Store<any>) {
    this.users$ = store.select('user');
  }

  public getUser() {
    this.store.dispatch(new userActions.FetchAction({ results: Math.floor(Math.random()*100)}));
  }

}



// <li *ngFor="let user of (users$ | async)?.allUsers">

// import { Store } from '@ngrx/store';
// import * as userActions from '../core/actions/user.action';

// private store: Store < any >,

// this.users$ = store.select('user');

// this.store.dispatch(new userActions.FetchAction({ results: 2 }));
