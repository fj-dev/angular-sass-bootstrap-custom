import { Injectable } from '@angular/core';

export interface IMyEmployee {
  id: string | number;
  name: string;
  age: number;
  department: string;
  sub_department?: string;
  job_title: string;
}

@Injectable()
export class MockEmployees {
  
  getData(): Array<IMyEmployee> {
    const employees = [
      {
        id: 'GPDoe001',
        name: 'Georgia Peach Doe',
        age: 24,
        department: 'IT Engineering',
        sub_department: 'Application',
        job_title: 'Developer',
      },
      {
        id: 'CTGho002',
        name: 'Casper T. Ghost',
        age: 32,
        department: 'IT Engineering',
        sub_department: 'Application',
        job_title: 'Developer',
      },
      {
        id: 'JDoe003',
        name: 'John Doe Jr.',
        age: 45,
        department: 'IT Engineering',
        job_title: 'Program Manager',
      },
      {
        id: 'JSTOrm004',
        name: 'Jackson S.T. Orm',
        age: 36,
        department: 'IT Engineering',
        sub_department: 'System',
        job_title: 'Architecht',
      },
      {
        id: 'LMQuee005',
        name: 'Lightning Mick Queen',
        age: 35,
        department: 'IT Engineering',
        sub_department: 'System',
        job_title: 'Administrator',
      },
      {
        id: 'DADuc006',
        name: 'Dawn Auld Duck',
        age: 28,
        department: 'HR',
        job_title: 'Representative',
      },
      {
        id: 'JDoe007',
        name: 'Jane Doe',
        age: 38,
        department: 'IT Engineering',
        sub_department: 'Application',
        job_title: 'Developer',
      },
    ];
    return employees;
  }
}