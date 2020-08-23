import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  findAllUsers() {
    return this.http.get('https://exer-ship.firebaseio.com/users.json')
      .pipe(map((resp: any) => this.convertUser(resp)));
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