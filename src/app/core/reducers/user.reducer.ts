import { Action } from '@ngrx/store';
import { IUserState, initialUserState } from '../states/index';
import { ActionTypes } from '../actions/user.action';

export default function reducer(
    state: IUserState = initialUserState,
    action: Action
): IUserState {
  switch (action.type) {
    case ActionTypes.UPDATE:
      return Object.assign({}, state, {
        allUsers: action.payload
      });

    case ActionTypes.UPDATE_MORE:
      return Object.assign({}, state, {
        moreUsers: action.payload
      });

    default:
      return state;
  }
}
