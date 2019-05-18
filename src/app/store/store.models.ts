import { Todo } from '../models/todo.model';

export interface IAppStore {
  toDoList: Array<Todo>;
}

/**
 * Initial state of store
 */
export const INITIAL_STATE: IAppStore = {
  toDoList: []
};
