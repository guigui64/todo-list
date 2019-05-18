import { Action } from '@ngrx/store';
import { Todo } from '../../models/todo.model';

export const ADD_TODO = '[todo] ADD_TODO';
export const GET_TODOS = '[todo] GET_TODO';
export const GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS';
export const GET_TODOS_ERROR = '[Todo] GET_TODOS_ERROR';
export const UPDATE_TODO = '[todo] UPDATE_TODO';
export const DELETE_TODO = '[todo] DELETE_TODO';

/**
 * Add Todo action
 */
export class AddTodo implements Action {
  readonly type = ADD_TODO;

  constructor(public payload: Todo) {}
}

/**
 * Get Todos action
 */
export class GetTodos implements Action {
  readonly type = GET_TODOS;
}

/**
 * Get Todos success action
 */
export class GetTodosSuccess implements Action {
  readonly type = GET_TODOS_SUCCESS;

  constructor(public payload: Todo[]) {}
}

/**
 * Get Todos error action
 */
export class GetTodosError implements Action {
  readonly type = GET_TODOS_ERROR;
}

/**
 * Update Todo action
 */
export class UpdateTodo implements Action {
  readonly type = UPDATE_TODO;

  constructor(public payload: Todo) {}
}

/**
 * Delete Todo action
 */
export class DeleteTodo implements Action {
  readonly type = DELETE_TODO;

  constructor(public payload: Todo) {}
}

/**
 * declare all actions.
 */
export type AllActions =
  | AddTodo
  | UpdateTodo
  | GetTodos
  | GetTodosError
  | GetTodosSuccess
  | DeleteTodo;
