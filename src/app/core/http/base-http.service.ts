import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export class HttpService {

  private _token: string;

  constructor(public http: HttpClient) {
    this._token = environment.token;
  }

  get token(): string {
    return this._token;
  }

  set token(token: string) {
    this._token = token;
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${environment.token}`);
  }

}
