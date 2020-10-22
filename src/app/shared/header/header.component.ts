import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UserModel } from '../../core/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: UserModel;

  constructor(private route: Router) {
    this.user = new UserModel(environment.user);
  }

  goToHome() {
    this.route.navigate(['/progress']);
  }

}
