import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  httpRequest$: BehaviorSubject<any> = new BehaviorSubject(5);
  // httpRequest$: Subject<any> = new Subject();
  users$: Observable<any>;

  constructor(private http: Http) {
    this.users$ = this.httpRequest$
      .switchMap(_ => this._fetchUser());
  }

  public getUser() {
    this.httpRequest$.next(1);
  }

  private _fetchUser() {
    return this.http.get('https://randomuser.me/api/?results=20')
      .map(r => r.json().results);
  }

}
