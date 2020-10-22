import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpService } from '../http/base-http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NotificationModel } from '../model/natification.model';
import { Observable } from 'rxjs';
import { ResponseModel } from '../model/response.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends HttpService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getNotifications(): Observable<Array<NotificationModel>> {
    return this.http.get(
      `${environment.baseUrl}/notifications`,
      { headers: this.headers }
    ).pipe(
      map((resp: any) => resp.data.map((data) => new NotificationModel(data)))
    );
  }

  setNotificationsSee(notificationsUid: Array<string>): Observable<ResponseModel> {
    return this.http.patch(
      `${environment.baseUrl}/notifications`,
      notificationsUid,
      { headers: this.headers }
    ).pipe(
      map((resp: any) => new ResponseModel(resp))
    );
  }

}
