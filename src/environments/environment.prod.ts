export const environment = {
  production: true,
  baseUrl: 'http://10.244.209.25:5001',
  expiration: (() => sessionStorage.getItem('expiration'))(),
  expirationDate: (
    () => sessionStorage.getItem('expirationDate') ?
      new Date(sessionStorage.getItem('expirationDate')) :
      new Date('1995-10-07T00:00:00.000+00:00')
  )(),
  user: (() => sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null)(),
  refreshToken: (() => sessionStorage.getItem('refreshToken'))(),
  token: (() => sessionStorage.getItem('token'))()
};
