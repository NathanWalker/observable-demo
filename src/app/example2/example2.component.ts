import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as userActions from '../core/actions/user.action';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component {

  users$: Observable<any>;

  constructor(private store: Store<any>) {
    this.users$ = store.select('user');
   }


  public getUser() {
    this.store.dispatch(new userActions.FetchMoreAction({ results: Math.floor(Math.random()*1000)}));
  }

}

