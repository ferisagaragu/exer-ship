import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { AuthenticationService } from '../http/authentication.service';
import { environment } from '../../../environments/environment';
import { cleanSessionEnvironment, getDataAccess, refreshToken, setTokenSessionEnvironment } from '../functions/global.function';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return new Observable<boolean>(observer => {
      const accessData = getDataAccess();

      if (!accessData) {
        this.returnAuthenticationFalse(observer);
        return;
      }

      if (new Date() < environment.expirationDate) {
        this.authenticationService.validateToken().subscribe(
          () => {
            this.returnAuthenticationTrue(observer, true);
          }, () => {
            this.returnAuthenticationFalse(observer);
          }
        );
      } else {
        this.authenticationService.refreshToken(environment.refreshToken).subscribe(
          (resp) => {
            setTokenSessionEnvironment(resp.data);
            this.returnAuthenticationTrue(observer, false);
          }, () => {
            this.returnAuthenticationFalse(observer);
          }
        );
      }
    });
  }

  returnAuthenticationTrue(
    observer: Subscriber<boolean>,
    calculateExpire: boolean
  ): void {
    observer.next(true);
    refreshToken(calculateExpire);
  }

  returnAuthenticationFalse(observer: Subscriber<boolean>): void {
    cleanSessionEnvironment();
    observer.next(false);
    this.router.navigate(['/']);
  }

}
