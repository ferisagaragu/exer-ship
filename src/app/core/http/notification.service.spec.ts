import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../shared/shared.module';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, SharedModule ]
    });
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be connect function', () => {
    expect(service.connect()).toBe(undefined);
  });

});
