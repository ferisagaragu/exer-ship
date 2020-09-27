import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export class BaseHttpService {

  private _baseUrl: string;
  private _userUid: string;
  private _token: string;

  constructor(public http: HttpClient) {
    this._baseUrl = environment.baseUrl;
    this._userUid = sessionStorage.getItem('userUid');
    this._token = sessionStorage.getItem('token');
  }

  get baseUrl(): string {
    return this._baseUrl;
  }

  set baseUrl(url: string) {
    this._baseUrl = url;
  }

  get userUid(): string {
    return this._userUid;
  }

  set userUid(userUid: string) {
    this._userUid = userUid;
  }

  get token(): string {
    return this._token;
  }

  set token(token: string) {
    this._token = token;
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  }

}
