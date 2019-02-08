import {IAppStore} from '../store.models';
import {createSelector} from '@ngrx/store';

export const getItems = (state: IAppStore) => state.toDoList;

/**
 * Selector of Todo by ID
 */
export const getItemById = (id: string) => createSelector(
  getItems,
  todos => todos.find((todo) => {
    return todo.id === id;
  })
);
