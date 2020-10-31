import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUserComponent } from './menu-user.component';
import { NotificationService } from '../../core/http/notification.service';
import { AuthenticationService } from '../../core/http/authentication.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../shared.module';
import * as firebase from "firebase/app";
import createSpy = jasmine.createSpy;
import { environment } from '../../../environments/environment';

describe('MenuUserComponent', () => {
  let component: MenuUserComponent;
  let fixture: ComponentFixture<MenuUserComponent>;
  let notificationServiceMock: NotificationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule, SharedModule ],
      declarations: [ MenuUserComponent ],
      providers: [
        AuthenticationService
      ]
    })
    .compileComponents();

    notificationServiceMock = TestBed.inject(NotificationService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(spyOn(firebase, 'initializeApp'));
    expect(component).toBeTruthy();
  });

  it('should singOut', () => {
    environment.user.uid = 'false';
    notificationServiceMock.connect();
    createSpy(NotificationService['notificationRef']).and.returnValue({
      off: () => {}
    })

    expect(component.singOut()).toBeNaN();
  });

});
