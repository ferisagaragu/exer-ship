import { NotificationTypeEnum } from '../enums/notification-type.enum';

export class NotificationModel {

  uid: string;
  title: string;
  message: string;
  type: string;
  see: NotificationTypeEnum;

  constructor(data: NotificationModel | any) {
    Object.assign(this, data);
  }

}
