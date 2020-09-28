export class UserModel {

  uid: string;
  name: string;
  lastName: string;
  userName: string;
  email: string;

  constructor(data: UserModel | any) {
    Object.assign(this, data);
  }

}
