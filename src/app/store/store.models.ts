import { Todo } from '../models/todo.model';
import { User, EMPTY_USER } from '../models/user.model';
import { RouterReducerState } from '@ngrx/router-store';

export interface IAppStore {
  toDoList: Array<Todo>;
  user: User;
  routerState: RouterReducerState;
}

/**
 * Initial state of store
 */
export const INITIAL_STATE: IAppStore = {
  toDoList: [],
  user: EMPTY_USER,
  routerState: undefined
};
