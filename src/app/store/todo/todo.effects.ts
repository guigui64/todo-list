import * as TodoActions from './todo.action';
import { Todo } from '../../models/todo.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  /**
   * Watch GET_TODOS action to perform API REST call
   */
  @Effect()
  GetTodos$: Observable<Action> = this.actions$
    .pipe(ofType(TodoActions.GET_TODOS))
    .pipe(
      mergeMap(action =>
        this.http.get('http://localhost:3000/todos').map((data: Response) => {
          return new TodoActions.GetTodosSuccess((data as unknown) as Todo[]);
        })
      )
    );
}
