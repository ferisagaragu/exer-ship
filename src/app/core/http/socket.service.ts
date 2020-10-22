import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NotificationModel } from '../model/natification.model';
import { NotificationTypeEnum } from '../enums/notification-type.enum';
declare var SockJS;
declare var Stomp;

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private sockJS: any;
  private stompClient: any;
  private stompClients: Array<any>;
  private stompConnection: BehaviorSubject<any>;
  public notify: BehaviorSubject<any>;

  constructor(
    private toastrService: ToastrService
  ) {
    this.stompClients = [];
    this.stompConnection = new BehaviorSubject(null);
    this.notify = new BehaviorSubject(null);
  }

  connect(): void {
    this.sockJS = new SockJS(environment.baseWs)
    this.stompClient = Stomp.over(this.sockJS);

    this.subscribeNotificationSocket();
  }

  close(): void {
    if (this.sockJS) {
      this.stompClients.forEach((client) => {
        client.unsubscribe();
        client = null;
      });

      this.sockJS.close();
      this.stompClients = [];
    }
  }

  private subscribeNotificationSocket(): void {
    this.stompClient.connect({'Authorization': `Bearer ${environment.token}`}, () => {
      const notifySocket = this.stompClient.subscribe(`/notify/${environment.user.uid}`, notificationResp => {
        if (notificationResp.body) {
          const notification = new NotificationModel(JSON.parse(notificationResp.body));
          this.showToast(notification);
          this.notify.next(notification);
        }
      });

      this.stompConnection.next(notifySocket);
    });

    this.stompConnection.subscribe((stompClient) => {
      if (stompClient) {
        this.stompClients.push(stompClient);
      }
    });
  }

  private showToast(notification: NotificationModel): void {
    switch (notification.type) {
      case NotificationTypeEnum.SUCCESS:
        this.toastrService.success(notification.message, notification.title);
      break;

      case NotificationTypeEnum.ERROR:
        this.toastrService.error(notification.message, notification.title);
      break;

      case NotificationTypeEnum.WARNING:
        this.toastrService.warning(notification.message, notification.title);
      break;

      case NotificationTypeEnum.INFO:
        this.toastrService.info(notification.message, notification.title);
      break;
    }

  }

}
