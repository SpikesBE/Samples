import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Adal4HTTPService } from 'adal-angular4';

import { environment } from '../../../environments/environment';
import { Employee, IEmployee } from './models';

@Injectable()
export class EmployeeService {

    constructor(
    private http: Adal4HTTPService
  ) { }

  public getEmployees(): Observable<Array<IEmployee>> {
    return this.http.get(`${environment.apiUrl}Employee`)
      .map(response => {
        const tmp = <IEmployee[]>response.json();
        return tmp.map(e => new Employee(e));
      });
  }
}
