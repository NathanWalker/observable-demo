import { Action } from '@ngrx/store';

const CATEGORY: string = 'USER';

interface IUserActions {
  INIT: string;
  FETCH: string;
  FETCH_MORE: string;
  FETCH_FAILED: string;
  UPDATE: string;
  UPDATE_MORE: string;
}

export const ActionTypes: IUserActions = {
  INIT:   `${CATEGORY} INIT`,
  FETCH: `${CATEGORY} FETCH`,
  FETCH_MORE: `${CATEGORY} FETCH_MORE`,
  FETCH_FAILED: `${CATEGORY} FETCH_FAILED`,
  UPDATE: `${CATEGORY} UPDATE`,
  UPDATE_MORE: `${CATEGORY} UPDATE_MORE`
};

interface IRequestOptions {
  results?: number;
}

export class InitAction implements Action {
  type = ActionTypes.INIT;
  payload: string = null;
}

export class FetchAction implements Action {
  type = ActionTypes.FETCH;

  constructor(public payload?: IRequestOptions) { }
}

export class FetchMoreAction implements Action {
  type = ActionTypes.FETCH_MORE;

  constructor(public payload?: IRequestOptions) { }
}

export class FetchFailedAction implements Action {
  type = ActionTypes.FETCH_FAILED;

  constructor(public payload?: any) { }
}

export class UpdateAction implements Action {
  type = ActionTypes.UPDATE;

  constructor(public payload: Array<any>) { }
}

export class UpdateMoreAction implements Action {
  type = ActionTypes.UPDATE_MORE;

  constructor(public payload: Array<any>) { }
}

