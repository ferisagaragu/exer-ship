import { Component, OnInit } from '@angular/core';
import { NotificationModel } from '../../core/model/notification.model';
import { NotificationService } from '../../core/http/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bell-notification',
  templateUrl: './bell-notification.component.html',
  styleUrls: ['./bell-notification.component.scss']
})
export class BellNotificationComponent implements OnInit {

  notifications: Array<NotificationModel>;
  show: boolean;
  back: boolean;
  selectedNotification: string;
  errorNotification: string;
  message: string;

  constructor(
    private notificationService: NotificationService,
    private router: Router
  ) {
    this.notifications = [];
    this.show = false;
    this.back = false;
    this.selectedNotification = null;
  }

  ngOnInit(): void {
    this.notifySubscribe();
  }

  convertNotificationNumber(): string | any {
    return this.notifications.length > 100 ?
      '99+' : this.notifications.length == 0 ?
        null : this.notifications.length;
  }

  close() {
    this.back = true;
    setTimeout(() => {
      this.show = false;
      this.back = false;
    }, 900)
  }

  getNotification(timeOut: boolean, notificationUid?: string): void {
    this.notificationService.getNotifications().subscribe((resp) => {
      if (timeOut) {
        this.selectedNotification = notificationUid;

        setTimeout(() => {
          this.selectedNotification = null;
          this.errorNotification = null;
          this.message = null;
          this.notifications = resp;
        }, 600);
      } else {
        this.notifications = resp;
      }
    }, (error) => { });
  }

  setNotificationSee(notificationUid: string): void {
    this.notificationService.setNotificationSee(notificationUid).subscribe(resp => {
      this.getNotification(true, resp.uid);
    }, ({ error }) => {
      this.errorNotification = notificationUid;
      this.message = error.message;
    });
  }

  goTo(notificationUid: string, go: string) {
    this.close();
    this.router.navigate([go]);
    this.setNotificationSee(notificationUid);
  }

  private notifySubscribe(): void {
    this.notificationService.notify.subscribe(resp => {
      if (resp) {
        this.getNotification(false);
      }
    });
  }

}
