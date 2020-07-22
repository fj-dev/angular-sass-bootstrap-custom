import {Injectable} from '@angular/core';

@Injectable()
export class MockEvents {
  dt = new Date();
  
  getData() {
    return [
      {
        title: 'Quick 15 min Event',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), 1, 6, 30),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), 1, 6, 45),
        className: 'short-event'
      },
      {
        title: '1-hour Event',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), 14, 9, 30),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), 14, 10, 30),
        className: 'reg-event'
      },
      {
        title: 'Long Event Title',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), 14, 12, 30),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), 14, 13, 0),
        className: 'long-title'
      },
      {
        title: 'Multi-Day Event #1',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), 9, 7, 0),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), 12, 16, 30),
        className: 'multi-day',
        extendedProps: {multiDay: true}
      },
      {
        title: 'All Day - Event #1',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), 5, 0, 0),
        allDay: true,
        className: 'all-day',
        extendedProps: {allDay: true}
      },
      {
        title: 'All Day - Event #2',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), 22, 0, 0),
        allDay: true,
        className: 'all-day',
        extendedProps: {allDay: true}
      },
      {
        title: 'All Day - Multi-Day Event #2',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), 22, 0, 0),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), 24, 0, 0),
        allDay: true,
        className: 'all-day',
        extendedProps: {multiDay: true, allDay: true}
      },
      {
        title: 'All Day - Multi-Day Event #3',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), 26, 0, 0),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), 27, 23, 59),
        allDay: true,
        className: 'all-day',
        extendedProps: {multiDay: true, allDay: true}
      },
    ];
  }
}