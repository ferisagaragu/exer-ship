import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { UserModel } from "../model/user.model";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  logIn(user: any): Observable<UserModel> {
    return this.http.post(`${environment.baseUrl}/auth/sign-in`, user)
      .pipe(map(resp => this.convertUser(resp)))
  }

  canActivate(userUid: string) {
    return this.http.get(`${environment.baseUrl}/auth/can-activate/${userUid}`)
  }

  singUp(user: UserModel): Observable<any> {
    return this.http.post(`${environment.baseUrl}/auth/sign-up`, user)
  }

  activateAccount(form: any) {
    return this.http.post(`${environment.baseUrl}/auth/activate-account`, form)
  }

  recoverPasswordEmail(form: any) {
    return this.http.post(`${environment.baseUrl}/auth/recover-password-email`, form)
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
