import { ActionReducerMap } from '@ngrx/store';
import { IAppStore } from './store.models';
import { todosReducer } from './todo/todo.reducer';
import { userReducer } from './user/user.reducer';

export const reducers: ActionReducerMap<IAppStore> = {
  toDoList: todosReducer,
  user: userReducer
};
