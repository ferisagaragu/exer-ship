// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:5000',
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
