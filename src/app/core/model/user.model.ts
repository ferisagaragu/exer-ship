export class UserModel {

  name: string;
  lastName: string;
  userName: string;
  email: string;
  photo: string;

  constructor(data: UserModel | any) {
    Object.assign(this, data);
  }

}
