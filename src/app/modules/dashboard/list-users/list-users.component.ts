import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../core/http/users.service';
import { UserModel } from '../../../core/model/user.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  usersList: Array<UserModel>;
  enableDay: number;

  constructor(private userService: UsersService) { 
    this.enableDay = new Date().getDay();
  }

  ngOnInit(): void {
    this.userService.findAllUsers().subscribe((resp) => {
      this.usersList = resp;
    });
  }

}
