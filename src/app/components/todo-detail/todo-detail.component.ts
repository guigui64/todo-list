import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IAppStore } from '../../store/store.models';
import { Todo } from '../../models/todo.model';
import * as TodoActions from '../../store/todo/todo.action';
import { Observable } from 'rxjs';
import * as selectors from '../../store/todo/todo.selectors';
import { RouterService } from '../../services/router.service';
import { TodoStateEnum } from '../../enum/todo-state.enum';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  id: string;
  todo: Observable<Todo>;
  editMode: boolean;
  todoStateEnum = TodoStateEnum;

  constructor(
    private route: ActivatedRoute,
    private store: Store<IAppStore>,
    private routerService: RouterService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.store.subscribe(state => {
      if (state.toDoList) {
        this.todo = this.store.pipe(select(selectors.getItemById(this.id)));
      }
    });
    this.editMode = false;
  }

  /**
   * Go back to list screen
   */
  goBack() {
    this.routerService.goTo('');
  }

  /**
   * Put on switch mode for dezcription
   */
  switchEditModeOn() {
    this.editMode = true;
  }

  /**
   * Update todo in store
   */
  editTodo(todo) {
    this.store.dispatch(new TodoActions.UpdateTodo(todo));
    this.editMode = false;
  }

  /**
   * Delete todo from store and go back to list screen
   */
  deleteTodo(todo) {
    this.store.dispatch(new TodoActions.DeleteTodo(todo));
    this.goBack();
  }
}
