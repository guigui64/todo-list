import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppStore } from './store/store.models';
import * as TodoActions from './store/todo/todo.action';
import * as UserActions from './store/user/user.action';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { MatDialog } from '@angular/material';
import { AuthorizationService } from './services/authorization.service';
import { LoginComponent } from './components/login/login.component';
import { RoleModule, RoleAction } from './models/role.model';
import { EMPTY_USER } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayAddButton = true;
  authorizedToAdd: Promise<boolean>;
  loggedIn = false;

  constructor(
    private store: Store<IAppStore>,
    private dialog: MatDialog,
    private authService: AuthorizationService
  ) {}

  ngOnInit() {
    this.store.dispatch(new TodoActions.GetTodos());
    this.store.select('user', 'name').subscribe(name => {
      this.loggedIn = name !== '';
      this.authorizedToAdd = this.authService.hasRight(
        JSON.stringify({
          module: RoleModule.APP,
          action: RoleAction.ADD
        })
      );
    });
    this.store
      .select('routerState', 'state', 'url')
      .subscribe(url => (this.displayAddButton = url === '/'));
  }

  /**
   * Open "Add new task" dialog
   */
  openCreateDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onAddTodo(result);
      }
    });
  }

  /**
   * Open "Login" dialog
   */
  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new UserActions.SetName({ name: result }));
      }
    });
  }

  logOut(): void {
    this.store.dispatch(new UserActions.SetName(EMPTY_USER));
  }

  /**
   * Add new task to store
   */
  onAddTodo(newTodo) {
    this.store.dispatch(new TodoActions.AddTodo(newTodo));
  }
}
