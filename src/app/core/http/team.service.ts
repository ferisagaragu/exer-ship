import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseHttpService } from './base-http.service';
import { map } from 'rxjs/operators';
import { TeamModel } from '../model/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService extends BaseHttpService {

  constructor(public http: HttpClient) { 
    super(http);
  }

  findByUserUid(): Observable<TeamModel> {
    return this.http.get(`${this.baseUrl}/teams/by-user-uid/${this.userUid}`, {
      headers: this.headers
    }).pipe(map((resp: any) => new TeamModel(resp.data)));
  }

}
