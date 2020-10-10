import { UserModel } from '../model/user.model';
import { environment } from '../../../environments/environment';

export const setSessionEnvironment = (session: any, user: UserModel): void => {
  sessionStorage.setItem('expiration', session.expiration);
  sessionStorage.setItem('expirationDate', session.expirationDate);
  sessionStorage.setItem('refreshToken', session.refreshToken);
  sessionStorage.setItem('token', session.token);
  sessionStorage.setItem('user', JSON.stringify(user));

  environment.expiration = session.expiration;
  environment.expirationDate = new Date(session.expirationDate);
  environment.refreshToken = session.refreshToken;
  environment.token = session.token;
  environment.user = user;
}

export const setTokenSessionEnvironment = (session): void => {
  sessionStorage.setItem('expiration', session.expiration);
  sessionStorage.setItem('expirationDate', session.expirationDate);
  sessionStorage.setItem('token', session.token);

  environment.expiration = session.expiration;
  environment.expirationDate = new Date(session.expirationDate);
  environment.token = session.token;
}

export const cleanSessionEnvironment = (): void => {
  sessionStorage.removeItem('expiration');
  sessionStorage.removeItem('expirationDate');
  sessionStorage.removeItem('refreshToken');
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');

  environment.expiration = null;
  environment.expirationDate = new Date();
  environment.refreshToken = null;
  environment.token = null;
  environment.user = null;
}
