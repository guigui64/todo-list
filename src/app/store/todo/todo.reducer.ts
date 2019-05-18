import { Todo } from '../../models/todo.model';
import * as TodoActions from './todo.action';
import { TodoStateEnum } from '../../enum/todo-state.enum';

export type Action = TodoActions.AllActions;

/**
 * Reducer that handle all TodoActions
 */
export function todosReducer(state, action: Action): Array<Todo> {
  switch (action.type) {
    case TodoActions.GET_TODOS: {
      return [];
    }
    case TodoActions.GET_TODOS_SUCCESS: {
      return [...action.payload];
    }
    case TodoActions.ADD_TODO: {
      const newTodosArray = new Array<Todo>({
        id: String(state.length + 1),
        description: action.payload.description,
        title: action.payload.title,
        date: new Date(),
        state: TodoStateEnum.toDo
      });
      return state.concat(newTodosArray);
    }
    case TodoActions.DELETE_TODO: {
      return state.filter(todo => {
        return todo.id !== action.payload.id;
      });
    }
    case TodoActions.UPDATE_TODO: {
      return state.map(todo => {
        return todo.id !== action.payload.id
          ? todo
          : Object.assign({}, todo, {
              description: action.payload.description,
              date: new Date()
            });
      });
    }
    default: {
      return state;
    }
  }
}
