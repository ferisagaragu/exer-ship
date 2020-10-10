import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { AuthenticationService } from '../http/authentication.service';
import { environment } from '../../../environments/environment';
import { cleanSessionEnvironment, setTokenSessionEnvironment } from '../functions/global.function';

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
      if (
        (new Date() < environment.expirationDate) &&
        environment.token &&
        environment.user &&
        environment.expiration
      ) {
        this.authenticationService.validateToken().subscribe(
          (resp) => {
            observer.next(true);
          }, (resp) => {
            this.returnAuthentication(observer);
          }
        );
      } else {
        if (environment.refreshToken && environment.user) {
          this.authenticationService.refreshToken(environment.refreshToken).subscribe(
            (resp) => {
              setTokenSessionEnvironment(resp.data);
              observer.next(true);
            }, () => {
              this.returnAuthentication(observer);
            }
          );
        } else {
          this.returnAuthentication(observer);
        }
      }
    });
  }

  returnAuthentication(observer: Subscriber<boolean>): void {
    cleanSessionEnvironment();
    observer.next(false);
    this.router.navigate(['/']);
  }

}
