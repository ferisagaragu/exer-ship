import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/http/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isSignIn: boolean = false;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.authenticationService.isSignIn.subscribe((resp) => {
      this.isSignIn = resp;
    });
  }

}
