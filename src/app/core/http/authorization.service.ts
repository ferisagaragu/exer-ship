import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { UserModel } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  logIn(user: any): Observable<any> {
    return this.http.post('http://localhost:5000/auth/sign-in', user)
  }


  findAllUsers() {
    return this.http.get('https://exer-ship.firebaseio.com/users.json')
      .pipe(map((resp: any) => this.convertUser(resp)));
  }

  saveProgress(data: any) {
    const id = data.id;
    delete data.id;
    return this.http.put(
      `https://exer-ship.firebaseio.com/users/${id}.json`, {
        ...data
      }
    )
  }

  private convertUser(user: any): Array<UserModel> {
    const out = [];

    for (const key in user) {
      if (Object.prototype.hasOwnProperty.call(user, key)) {
        const element = user[key];
        out.push({
          id: key,
          ...element
        });
      }
    }
        
    return out;
  }

}