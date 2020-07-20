import {Injectable} from '@angular/core';

@Injectable()
export class MockEvents {
  dt = new Date();
  
  getData() {
    return [
      {
        title: '1-hour Event',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), this.dt.getDate(), 9, 30),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), this.dt.getDate(), 10, 30),
        className: 'reg-event'
      },
      {
        title: 'Long Event Title',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), this.dt.getDate(), 12, 30),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), this.dt.getDate(), 13, 0),
        className: 'long-title'
      },
      {
        title: 'Multi-Day Event',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), this.dt.getDate()-11, 7, 0),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), this.dt.getDate()-7, 16, 30),
        className: 'multi-day'
      },
      {
        title: 'All Day Event',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), this.dt.getDate()+3, 0, 0),
        allDay: true,
        className: 'all-day'
      },
      {
        title: 'Multi-Day All Day Event',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), this.dt.getDate()+7, 0, 0),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), this.dt.getDate()+9, 0, 0),
        allDay: true,
        className: 'multi-day all-day'
      },
    ];
  }
}