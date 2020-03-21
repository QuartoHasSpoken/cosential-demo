import {Injectable} from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  data =  [
    {
      name: 'Dubai Megatower',
      clientCompany: 'Al Radaideh Group',
      completionDate: '12/06/2023',
      height: 1266
    },
    {
      name: 'Cesar Chavez Condominium',
      clientCompany: 'Keep It Weird Construction',
      completionDate: '10/04/2021',
      height: 300
    },
    {
      name: 'Coworking Space',
      clientCompany: 'TheyWork',
      completionDate: '06/19/2022',
      height: 247
    },
    {
      name: 'BailedOut Bank Tower',
      clientCompany: 'BailedOut Bank',
      completionDate: '07/09/2025',
      height: 456
    },
    {
      name: 'NYC FinTech Building',
      clientCompany: 'Gold Man"s Slacks',
      completionDate: '03/15/2021',
      height: 413
    },
    {
      name: 'InsuroCorp Mixed Use Complex',
      clientCompany: 'InsuroCorp',
      completionDate: '07/06/2023',
      height: 333
    },
    {
      name: 'Secret Government Project',
      clientCompany: 'rZamo Conglomo',
      completionDate: '09/05/2022',
      height: 567
    },
    {
      name: 'Tallest Building Record Setter',
      clientCompany: 'Cosential',
      completionDate: '01/18/2021',
      height: 1431
    }
  ];

  constructor() {}

  getProjects() {
    return of(this.data);
  }

}
