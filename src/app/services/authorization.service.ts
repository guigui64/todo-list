import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from '../store/store.models';
import { Role, RoleModule, RoleAction } from '../models/role.model';

// TODO: use Http for getting DB ?
const DB = {
  premium: {
    authorizedRoles: [
      { module: RoleModule.APP, action: RoleAction.ADD },
      { module: RoleModule.TODO_LIST, action: RoleAction.CHANGE_STATE },
      { module: RoleModule.TODO_LIST, action: RoleAction.VIEW_ALL },
      { module: RoleModule.TODO_DETAIL, action: RoleAction.CHANGE_STATE },
      { module: RoleModule.TODO_DETAIL, action: RoleAction.REMOVE },
      { module: RoleModule.TODO_DETAIL, action: RoleAction.EDIT }
    ]
  },
  free: {
    authorizedRoles: [
      { module: RoleModule.APP, action: RoleAction.ADD },
      { module: RoleModule.TODO_DETAIL, action: RoleAction.REMOVE },
      { module: RoleModule.TODO_DETAIL, action: RoleAction.EDIT }
    ]
  }
};

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private _username = '';

  constructor(private store: Store<IAppStore>) {
    this.store.select('user', 'name').subscribe(name => {
      this._username = name;
    });
  }

  hasRight(requestedRight: string): Promise<boolean> {
    const { _username } = this;
    if (_username) {
      const authorized =
        DB[_username] &&
        DB[_username].authorizedRoles.some(
          (authRole: Role) => JSON.stringify(authRole) === requestedRight
        );
      return Promise.resolve(authorized);
    }
    return Promise.resolve(false);
  }
}
