import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {delay, dematerialize, materialize, mergeMap} from 'rxjs/operators';
import mockJson from '../mock.json';

/**
 * Mocked backend
 */
@Injectable()
export class MockedBackendInterceptor implements HttpInterceptor {

  constructor() {
  }

  /**
   * Intercept GET Todo API REST call
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(null).pipe(mergeMap(() => {
      if (request.url.endsWith('/todos') && request.method === 'GET') {
        return of(new HttpResponse({status: 200, body: mockJson.todos}));
      }
      return next.handle(request);
    }))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}

export let mockedBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: MockedBackendInterceptor,
  multi: true
};
