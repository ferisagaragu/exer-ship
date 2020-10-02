export class ResponseModel {

  timestamp: string;
  status: number;
  message: string;
  messageDevelop: string;
  data: any;

  constructor(data: ResponseModel | any) {
    Object.assign(this, data);
  }

}
