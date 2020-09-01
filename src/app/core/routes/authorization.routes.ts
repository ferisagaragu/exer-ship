export const AUTHORIZATION_ROUTING: Array<any> = [
  {
    path: 'authorization',
    loadChildren: () => import('../../modules/authorization/authorization.module').then(m => m.AuthorizationModule)
  }
];
