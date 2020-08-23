export class UserModel {

  name: string;
  color: string;
  progress: number;

  constructor(data: UserModel | any) {
    Object.assign(this, data);
  }

}