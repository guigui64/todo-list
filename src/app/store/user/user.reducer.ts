import * as UserActions from './user.action';
import { User, EMPTY_USER } from 'src/app/models/user.model';

type Action = UserActions.AllActions;

export function userReducer(state: User = EMPTY_USER, action: Action): User {
  switch (action.type) {
    case UserActions.SET_NAME:
      return action.payload;
    default:
      return state;
  }
}
