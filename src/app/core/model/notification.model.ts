import { NotificationTypeEnum } from '../enums/notification-type.enum';

export class NotificationModel {

  uid: string;
  title: string;
  message: string;
  type: string;
  see: NotificationTypeEnum;
  createDate: string;
  go: string;

  constructor(data: NotificationModel | any) {
    Object.assign(this, data);
  }

}
