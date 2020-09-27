export class DayModel {

  uid: string;
	date: Date;
	exercise: boolean;
	diet: boolean;
  
  constructor(data: DayModel | any) {
    Object.assign(this, data);
  }

}