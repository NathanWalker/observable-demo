import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component {

  public usersSubject$: Subject<any> = new Subject();
  public usersBehaviorSubject$: BehaviorSubject<Array<any>> = new BehaviorSubject([
    { name: { first: 'Zack', last: 'Chapple' } },
    { name: { first: 'Mark', last: 'Pieszak' } },
    { name: { first: 'Patrick', last: 'Stapleton' } },
    { name: { first: 'Garland', last: 'Riley' } }
  ]);

  constructor(private http: Http) { }

  public getUser() {
    this.http.get('https://randomuser.me/api/?results=2')
      .map(r => r.json().results)
      .subscribe((res) => {

        // Subject
        this.usersSubject$.next(res);

        // BehaviorSubject
        this.usersBehaviorSubject$.next([...this.usersBehaviorSubject$.getValue(), ...res]);

      });
  }

}

