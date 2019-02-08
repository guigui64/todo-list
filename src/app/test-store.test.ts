import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Store only used for karma tests
 */
export class TestStore<T> {
  private state: BehaviorSubject<T> = new BehaviorSubject(undefined);

  setState(data: T) {
    this.state.next(data);
  }

  select(selector?: any): Observable<T> {
    return this.state.asObservable();
  }

  dispatch(action: any) {}

  subscribe(next: any, complete: any) {}
}
