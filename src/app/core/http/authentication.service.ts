import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserModel } from "../model/user.model";
import { environment } from '../../../environments/environment';
import { ResponseModel } from '../model/response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  canActivateAccount(userUid: string): Observable<boolean> {
    return this.http.get(`${environment.baseUrl}/auth/can-activate-account/${userUid}`)
      .pipe(
        map((resp: any) => resp.data.canActivate),
        catchError(_ => [false])
      );
  }

  canChangePassword(userUid: string): Observable<boolean> {
    return this.http.get(`${environment.baseUrl}/auth/can-change-password/${userUid}`)
      .pipe(
        map((resp: any) => resp.data.canChangePassword),
        catchError(_ => [false])
      );
  }

  activateAccount(form: any): Observable<ResponseModel> {
    return this.http.post(`${environment.baseUrl}/auth/activate-account`, form)
      .pipe(map(resp => new ResponseModel(resp)));
  }

  changePassword(form: any): Observable<ResponseModel> {
    return this.http.post(`${environment.baseUrl}/auth/change-password`, form)
      .pipe(map(resp => new ResponseModel(resp)));
  }

  recoverPassword(form: any): Observable<ResponseModel> {
    return this.http.post(`${environment.baseUrl}/auth/recover-password`, form)
      .pipe(map(resp => new ResponseModel(resp)));
  }

  singUp(user: UserModel): Observable<ResponseModel> {
    return this.http.post(`${environment.baseUrl}/auth/sign-up`, user)
      .pipe(map(resp => new ResponseModel(resp)));
  }


  //parte de autenticacion pendiente
  logIn(user: any): Observable<UserModel> {
    return this.http.post(`${environment.baseUrl}/auth/sign-in`, user)
      .pipe(map(resp => this.convertUser(resp)))
  }

  private convertUser(resp: any): any {
    sessionStorage.setItem('user_data', JSON.stringify(resp.data));
    sessionStorage.setItem('token', resp.data.session.token);
    this.refreshToken(resp.data.session.expiration);
    return new UserModel(resp.data);
  }

  private refreshToken(time: number): void {
    setInterval(() => {
      console.log('se actualiza el token');
    }, time - 60);
  }

}
