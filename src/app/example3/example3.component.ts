import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css']
})
export class Example3Component {

  users$: Observable<any>;
  cancel$: Subject<any> = new Subject();
  btnText: string = 'Terminate';
  done: boolean;

  constructor(private http: Http) {
    this.users$ = Observable
      .interval(1000)
      .takeUntil(this.cancel$)
      .switchMap(_ => this._fetchUser());
  }

  public cancelAsync() {
    this.cancel().then(() => {
      this.btnText = 'TERMINATED!';
      this.done = true;
    });
  }

  public cancel() {
    return new Promise((resolve, reject) => {
      this.btnText = 'Terminating...';
      setTimeout(() => {
        this.cancel$.next();
        resolve();
      }, 2000);
    });
  }

  private _fetchUser() {
    return this.http.get('https://randomuser.me/api/?results=20').map(r => r.json().results);
  }

}
