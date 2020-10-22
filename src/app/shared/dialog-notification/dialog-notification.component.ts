import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationModel } from '../../core/model/natification.model';

@Component({
  selector: 'app-dialog-notification',
  templateUrl: './dialog-notification.component.html',
  styleUrls: ['./dialog-notification.component.scss']
})
export class DialogNotificationComponent {

  selectNotifications: Array<string>;

  constructor(
    private dialogRef: MatDialogRef<DialogNotificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<NotificationModel>
  ) {
    this.selectNotifications = [];
  }

  onSetSeeNotification(evt, uid: string) {
    if (evt.checked) {
      this.selectNotifications.push(uid);
    } else {
      this.selectNotifications.splice(
        this.selectNotifications.indexOf(uid),
        1
      );
    }
  }

  onClose() {
    this.dialogRef.close(this.selectNotifications);
  }

}
