// angular
import { Injectable } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

// module
import { UserService } from '../services/user.service';
import * as userActions  from '../actions/user.action';

@Injectable()
export class UserEffects {

  @Effect() init$: Observable<Action> = this.actions$
    .ofType(userActions.ActionTypes.INIT)
    .startWith(new userActions.InitAction())
    .map(() => new userActions.FetchAction({results: 20}))

  @Effect() fetch$: Observable<Action> = this.actions$
    .ofType(userActions.ActionTypes.FETCH)
    .switchMap((action) => this.userService.fetchUsers(action.payload))
    .map((results) => new userActions.UpdateAction(results))
    .catch((err) => Observable.of(new userActions.FetchFailedAction(err)));

  @Effect() fetch2$: Observable<Action> = this.actions$
    .ofType(userActions.ActionTypes.FETCH_MORE)
    .switchMap((action) => this.userService.fetchUsers(action.payload))
    .map((results) => new userActions.UpdateMoreAction(results));

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private userService: UserService
  ) { }
}
