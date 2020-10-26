import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { NotificationModel } from '../model/notification.model';
import { NotificationTypeEnum } from '../enums/notification-type.enum';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  private toast: any;

  constructor(private toastrService: ToastrService) {
    this.toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
  }

  successAlert(message: string): Promise<SweetAlertResult> {
    return Swal.fire({
      title: 'Yeeii!!',
      text: message,
      icon: 'success'
    });
  }

  errorAlert(message: string): Promise<SweetAlertResult> {
    return Swal.fire({
      title: 'Ohh no!!',
      text: message,
      icon: 'error'
    });
  }

  notify(notification: NotificationModel): void {
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
