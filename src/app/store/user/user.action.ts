import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const SET_NAME = '[User] SET_NAME';

export class SetName implements Action {
  readonly type = SET_NAME;

  constructor(public payload: User) {}
}

export type AllActions = SetName;
