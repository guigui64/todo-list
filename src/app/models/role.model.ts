export interface Role {
  module: RoleModule;
  action: RoleAction;
}

// TODO: *any* module ?
export enum RoleModule {
  APP,
  TODO_LIST,
  TODO_DETAIL
}

export enum RoleAction {
  ADD,
  REMOVE,
  EDIT,
  VIEW_ALL,
  CHANGE_STATE
}
