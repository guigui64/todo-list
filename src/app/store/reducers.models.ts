import {ActionReducerMap} from '@ngrx/store';
import {IAppStore} from './store.models';
import {todosReducer} from './todo/todo.reducer';

export const reducers: ActionReducerMap<IAppStore> = {
  toDoList: todosReducer
};
