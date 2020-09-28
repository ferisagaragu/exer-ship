export class UserModel {

  name: string;
  userName: string;
  email: string;

  constructor(data: UserModel | any) {
    Object.assign(this, data);
  }

}
