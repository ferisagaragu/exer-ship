import { UserModel } from '../model/user.model';
import { environment } from '../../../environments/environment';
import * as crypto from 'crypto-js';
import axios from 'axios';

const password = 'eXer-sh&p/@_';

export const setSessionEnvironment = (session: any, user: UserModel): void => {
  sessionStorage.setItem('access_data', encrypt({ ...session, user }));
  setSession();
}

export const setTokenSessionEnvironment = (session): void => {
  const dataAccess = getDataAccess();

  if (dataAccess) {
    dataAccess.session = session.expiration;
    dataAccess.expirationDate = new Date(session.expirationDate);
    dataAccess.token = session.token;

    sessionStorage.setItem('access_data', encrypt(dataAccess));
    setSession();
  }
}

export const cleanSessionEnvironment = (): void => {
  sessionStorage.removeItem('access_data');

  environment.expiration = null;
  environment.expirationDate = null;
  environment.refreshToken = null;
  environment.token = null;
  environment.user = null;
}

export const getDataAccess = (): any => {
  try {
    const dataAccess = decrypt(sessionStorage.getItem('access_data'));

    if (
      dataAccess.hasOwnProperty('expiration') &&
      dataAccess.hasOwnProperty('expirationDate') &&
      dataAccess.hasOwnProperty('refreshToken') &&
      dataAccess.hasOwnProperty('token') &&
      dataAccess.hasOwnProperty('user')
    ) {
      environment.expiration = dataAccess.expiration;
      environment.expirationDate = new Date(dataAccess.expirationDate);
      environment.refreshToken = dataAccess.refreshToken;
      environment.token = dataAccess.token;
      environment.user = dataAccess.user;
      return dataAccess;
    } else {
      sessionStorage.removeItem('access_data');
      return null;
    }
  } catch (e) {
    sessionStorage.removeItem('access_data');
    return null;
  }
}

const setSession = (): void => {
  const dataAccess = getDataAccess();

  if (dataAccess) {
    environment.expiration = dataAccess.expiration;
    environment.expirationDate = new Date(dataAccess.expirationDate);
    environment.refreshToken = dataAccess.refreshToken;
    environment.token = dataAccess.token;
    environment.user = dataAccess.user;
  }
}

export const refreshToken = (calculateExpire: boolean = false) => {
  let seconds = 1000;

  if (calculateExpire) {
    seconds = parseInt(
      ((environment.expirationDate.getTime() - new Date().getTime()) / 1000000)
        .toString().replace('.', ''));
  }

  setInterval(() => {
    axios.post(`${environment.baseUrl}/auth/refresh-token`, {
      refreshToken: environment.refreshToken
    }).then(({ data }) => {
      setTokenSessionEnvironment(data.data);
    }).catch(() => {
      cleanSessionEnvironment();
      window.location.href = '/';
    });
  }, seconds);
}

const encrypt = (data): string => {
  if (data) {
    return crypto.AES.encrypt(
      JSON.stringify(data),
      password
    ).toString();
  }
  return '';
}

const decrypt = (data): any => {
  if (data) {
    const bytes = crypto.AES.decrypt(
      data,
      password
    );

    return JSON.parse(bytes.toString(crypto.enc.Utf8));
  }

  return JSON.parse('{}');
}
