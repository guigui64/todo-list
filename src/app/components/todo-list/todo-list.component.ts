import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/todo.model';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {IAppStore} from '../../store/store.models';
import {MatDialog} from '@angular/material';
import {RouterService} from '../../services/router.service';
import {TodoStateEnum} from '../../enum/todo-state.enum';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Observable<Array<Todo>>;

  todoStateEnum = TodoStateEnum;

  constructor(private store: Store<IAppStore>, private dialog: MatDialog, private routerService: RouterService) {
    this.todos = this.store.select(state => state.toDoList);
  }

  ngOnInit() {
  }

  /**
   * Go to Detail Todo screen
   */
  seeDetail(id: string) {
    this.routerService.goTo('/todo', id);
  }

  /**
   * Sort Todo array according to Todo's date and Todo's state
   */
  sortTodos(todosArray: Todo[]) {
    return todosArray.sort(function (todoA, todoB) {
      if (todoA.state !== todoB.state) {
        if (todoA.state !== 'done' && todoB.state !== TodoStateEnum.done) {
          return new Date(todoA.date) < new Date(todoB.date) ? 1 : -1;
        } else {
          return todoA.state === TodoStateEnum.done ? 1 : -1;
        }
      } else {
        return new Date(todoA.date) < new Date(todoB.date) ? 1 : -1;
      }
    });
  }
}
