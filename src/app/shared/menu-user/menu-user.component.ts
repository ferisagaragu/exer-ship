import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../core/model/user.model';
import { NotificationModel } from '../../core/model/natification.model';
import { NotificationService } from '../../core/services/notification.service';
import { AuthenticationService } from '../../core/http/authentication.service';
import { SocketService } from '../../core/http/socket.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../../../environments/environment';
import { cleanSessionEnvironment } from '../../core/functions/global.function';
import { DialogNotificationComponent } from '../dialog-notification/dialog-notification.component';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss']
})
export class MenuUserComponent implements OnInit {

  user: UserModel;
  notifications: Array<NotificationModel>;

  constructor(
    private notificationService: NotificationService,
    private authenticationService: AuthenticationService,
    private socketService: SocketService,
    private route: Router,
    private dialog: MatDialog
  ) {
    this.user = new UserModel(environment.user);
    this.notifications = [];
  }

  ngOnInit(): void {
    this.notifySubscribe();
    this.getNotifications();
    this.openNotifications();
  }

  convertNotificationNumber(): string {
    return this.notifications.length > 100 ?
      '99+' : `${this.notifications.length}`;
  }
  
  singOut(): void {
    cleanSessionEnvironment();
    this.authenticationService.isSignIn.next(false);
    this.socketService.close();
    this.route.navigate(['/']);
  }

  openNotifications(): void {
    const dialogRef = this.dialog.open(DialogNotificationComponent, {
      height: '400px',
      width: '600px',
      disableClose: true,
      data: this.notifications
    });

    dialogRef.afterClosed().subscribe(notificationsUid => {
      if (notificationsUid.length !== 0) {
        this.setNotificationsSee(notificationsUid)
      }
    });
  }

  private notifySubscribe(): void {
    this.socketService.notify.subscribe((resp) => {
      if (resp) {
        this.notifications.push(resp);
      }
    });
  }

  private getNotifications(): void {
    this.notificationService.getNotifications().subscribe(resp => {
      this.notifications = resp;
    }, (error) => {
      console.log(error);
    });
  }

  private setNotificationsSee(notificationsUid: Array<string>): void {
    this.notificationService.setNotificationsSee(notificationsUid).subscribe(() => {
      this.getNotifications();
    }, (error) => {
      console.log(error);
    });
  }

}
