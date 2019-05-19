import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppStore } from '../../store/store.models';
import { RouterService } from '../../services/router.service';
import { TodoStateEnum } from '../../enum/todo-state.enum';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { RoleModule, RoleAction } from 'src/app/models/role.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Observable<Array<Todo>>;
  todoStateEnum = TodoStateEnum;
  authorizedToSeeAll: Promise<boolean>;
  authorizedToChangeStates: Promise<boolean>;

  constructor(
    private store: Store<IAppStore>,
    private routerService: RouterService,
    private authService: AuthorizationService
  ) {}

  ngOnInit() {
    this.todos = this.store.select(state =>
      state.toDoList.filter(todo => todo.state === TodoStateEnum.toDo)
    );
    this.store.select('user').subscribe(_ => {
      this.authorizedToChangeStates = this.authService.hasRight(
        JSON.stringify({
          module: RoleModule.TODO_LIST,
          action: RoleAction.CHANGE_STATE
        })
      );
      this.authorizedToSeeAll = this.authService.hasRight(
        JSON.stringify({
          module: RoleModule.TODO_LIST,
          action: RoleAction.VIEW_ALL
        })
      );
      this.authorizedToSeeAll.then(auth => {
        if (auth) {
          this.todos = this.store.select(state => state.toDoList);
        } else {
          this.todos = this.store.select(state =>
            state.toDoList.filter(todo => todo.state === TodoStateEnum.toDo)
          );
        }
      });
    });
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
    return todosArray.sort(function(todoA, todoB) {
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
