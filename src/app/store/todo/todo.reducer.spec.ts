import * as reducer from './todo.reducer';
import * as actions from './todo.action';
import { INITIAL_STATE } from '../store.models';
import { Todo } from '../../models/todo.model';
import { TodoStateEnum } from '../../enum/todo-state.enum';

describe('TodoReducer', () => {
  const todoList = new Array<Todo>();
  todoList.push({
    id: '1',
    state: TodoStateEnum.done,
    title: '',
    description: '',
    date: new Date('2011-01-10T10:20:30Z')
  });
  todoList.push({
    id: '2',
    state: TodoStateEnum.inProgress,
    title: '',
    description: '',
    date: new Date('2014-01-10T10:20:30Z')
  });
  todoList.push({
    id: '3',
    state: TodoStateEnum.toDo,
    title: '',
    description: '',
    date: new Date('2011-01-10T10:20:30Z')
  });

  it('should return an empty todo list ', () => {
    const action = new actions.GetTodos();
    const state = reducer.todosReducer(INITIAL_STATE, action);

    expect(state.length).toEqual(0);
  });

  it('should return the mock todo list', () => {
    const action = new actions.GetTodosSuccess(todoList);
    const state = reducer.todosReducer(INITIAL_STATE, action);
    expect(state.length).toEqual(3);
  });

  it('should return the update todo', () => {
    const action = new actions.GetTodosSuccess(todoList);
    let state = reducer.todosReducer(INITIAL_STATE, action);
    const actionUpdate = new actions.UpdateTodo({
      id: '2',
      state: TodoStateEnum.inProgress,
      title: '',
      description: 'new desc',
      date: new Date('2014-01-10T10:20:30Z')
    });
    state = reducer.todosReducer(state, actionUpdate);
    expect(state[1].description).toEqual('new desc');
  });

  it('should return the delete the todo', () => {
    const action = new actions.GetTodosSuccess(todoList);
    let state = reducer.todosReducer(INITIAL_STATE, action);
    const actionDelete = new actions.DeleteTodo({
      id: '2',
      state: TodoStateEnum.inProgress,
      title: '',
      description: 'new desc',
      date: new Date('2014-01-10T10:20:30Z')
    });
    state = reducer.todosReducer(state, actionDelete);
    expect(state.length).toEqual(2);
  });
});
