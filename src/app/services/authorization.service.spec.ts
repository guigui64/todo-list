import { TestBed, async } from '@angular/core/testing';

import { AuthorizationService } from './authorization.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TestStore } from '../test-store.test';
import { IAppStore } from '../store/store.models';
import { Store } from '@ngrx/store';

describe('AuthorizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: Store, useClass: TestStore }]
    });
  });

  it('should be created', () => {
    const service: AuthorizationService = TestBed.get(AuthorizationService);
    expect(service).toBeTruthy();
  });
});
