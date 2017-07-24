export interface IEmployee {
  id: number;
  name: string;
  function: string;
}

export class Employee implements IEmployee {
  id: number;
  name: string;
  function: string;

  constructor(obj?: IEmployee) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
