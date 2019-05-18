import { Todo } from '../models/todo.model';
import { User, EMPTY_USER } from '../models/user.model';

export interface IAppStore {
  toDoList: Array<Todo>;
  user: User;
}

/**
 * Initial state of store
 */
export const INITIAL_STATE: IAppStore = {
  toDoList: [],
  user: EMPTY_USER
};
