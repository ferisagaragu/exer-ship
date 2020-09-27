import { UserModel } from './user.model';

export class TeamModel {

  uid: string;
  name: string;
  users: Array<UserModel>;
  
  constructor(data: TeamModel | any) {
    Object.assign(this, data);
  }

}