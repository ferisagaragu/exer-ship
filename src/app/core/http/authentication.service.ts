import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { UserModel } from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  logIn(user: any): Observable<UserModel> {
    return this.http.post('http://localhost:5000/auth/sign-in', user)
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
