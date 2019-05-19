# TodoList

My implementation of an authorization and rights feature.

## User in Store

I added a field to the App Store for the **user** (only its name for this simple implementation) and the action `SetName`.

A **login** component (dialog) added under the title allows the user to log and updates the state.

## Authorization Service

I created an Angular **service** for the components to ask for the authorizations according to requested rights.
It is linked to the user in the store.

I created a fake DB that gives the following rights to the users:

- 'free' user:
  - **Add** a todo task
  - **Edit** a todo task
  - **Remove** a todo task
- 'premium' user:
  - All 'free' permissions, plus:
  - **View all tasks** (not only 'to-do' ones)
  - **Change the tasks state** (in both views)

## `requestedRight` field

I created a `Role` type that is composed of 2 enums: `module` and `action`.
I then use `JSON.stringify()` to get the string from a specific role.

## Suplementary features

I added the following features:

- Hide the add button when in the detail view (using `@ngrx/router-store`)
- Login dialog
- Redux DevTools instrumentation with `@ngrx/store-devtools`

## Room for improvements

Some improvements can be imagined:

- Tests
- Use ngrx effects for getting the rights
- Use an `HttpClient` to get the user rights
- Saving the user to local storage
