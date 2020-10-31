import { Component } from '@angular/core';
import { UserModel } from '../../core/model/user.model';
import { NotificationService } from '../../core/http/notification.service';
import { AuthenticationService } from '../../core/http/authentication.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { cleanSessionEnvironment } from '../../core/functions/global.function';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss']
})
export class MenuUserComponent {

  user: UserModel;

  constructor(
    private notificationService: NotificationService,
    private authenticationService: AuthenticationService,
    private route: Router
  ) {
    this.user = new UserModel(environment.user);
  }

  singOut(): void {
    cleanSessionEnvironment();
    this.authenticationService.isSignIn.next(false);
    this.notificationService.close();
    this.route.navigate(['/']);
  }

}
