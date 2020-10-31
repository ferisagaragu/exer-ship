import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../model/user.model';
import { environment } from '../../../environments/environment';
import { ResponseModel } from '../model/response.model';
import { refreshToken, setSessionEnvironment } from '../functions/global.function';
import { HttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends HttpService {

  public isSignIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(public http: HttpClient) {
    super(http);
  }

  validateToken(): Observable<boolean> {
    return this.http.get(
      `${environment.baseUrl}/auth/validate-token`,
      { headers: this.headers }
    ).pipe(
      map((resp: any) => resp.data.validToken)
    );
  }

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

  singIn(user: UserModel): Observable<UserModel> {
    return this.http.post(`${environment.baseUrl}/auth/sign-in`, user)
      .pipe(map(resp => this.convertUser(resp)));
  }

  refreshToken(token: string): Observable<any> {
    return this.http.post(`${environment.baseUrl}/auth/refresh-token`, {
      refreshToken: token
    });
  }

  private convertUser(resp): UserModel {
    const { uid, name, lastName, userName, email, photo, session } = resp.data;
    const user = new UserModel({
      uid,
      name,
      lastName,
      userName,
      email,
      photo
    });

    setSessionEnvironment(session, user);
    refreshToken(true);
    return user;
  }

}
