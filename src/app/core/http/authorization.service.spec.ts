import { AuthenticationService } from './authentication.service';
import { defer, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AuthenticationService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be validateToken 200 OK', () => {
    const respData = {
      data: {
        validToken: true
      }
    }

    httpClientSpy.get.and.returnValue(defer(() => Promise.resolve(respData)));

    service.validateToken().subscribe(
      resp => expect(resp).toEqual(true),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should be validateToken 401 OK', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 401 error',
      status: 401,
      statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(defer(() => Promise.reject(errorResponse)));

    service.validateToken().subscribe(
      resp => fail('expected an error'),
      error => { console.log(error); expect(error.status).toEqual(401); }
    );
  });

});
