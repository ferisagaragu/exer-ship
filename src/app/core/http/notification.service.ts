import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpService } from './base-http.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NotificationModel } from '../model/notification.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { SweetAlertService } from '../services/sweet-alert.service';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends HttpService {

  private notificationRef: any;
  public notify: BehaviorSubject<NotificationModel>;

  constructor(
    public http: HttpClient,
    private sweetAlertService: SweetAlertService
  ) {
    super(http);

    firebase.initializeApp({
      apiKey: "AIzaSyAvdz3PrHg5zi_DUv227bk1Ri5NYxfu7KQ",
      authDomain: "exer-ship.firebaseapp.com",
      databaseURL: "https://exer-ship.firebaseio.com",
      projectId: "exer-ship",
      storageBucket: "exer-ship.appspot.com",
      messagingSenderId: "228669872374",
      appId: "1:228669872374:web:4f49c0a050e558bcd034d7",
      measurementId: "G-E9SL2TH9C9"
    });
    this.notify = new BehaviorSubject<NotificationModel>(null);
  }

  connect(): void {
    this.subscribeOnNotification();
  }

  close(): void {
    this.notificationRef.off();
  }

  getNotifications() {
    return this.http.get(
      `${environment.baseUrl}/notifications`,
      { headers: this.headers }
    ).pipe(
      map((resp: any) => resp.data.map((item) => new NotificationModel(item)))
    );
  }

  setNotificationSee(notificationUid: string): Observable<NotificationModel> {
    return this.http.patch(
      `${environment.baseUrl}/notifications/set-see/${notificationUid}`,
      { },
      { headers: this.headers }
    ).pipe(
      map((resp: any) => new NotificationModel(resp.data))
    );
  }

  private subscribeOnNotification(): void {
    this.notificationRef = firebase.database().ref(`/notifications/${environment.user.uid}`);
    this.notificationRef.on('child_added', snapshot => {
      const notification = new NotificationModel(snapshot.val());
      this.sweetAlertService.notify(notification);
      this.notify.next(notification);
    });
  }

}
