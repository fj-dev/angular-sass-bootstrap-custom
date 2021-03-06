import {Injectable} from '@angular/core';

export interface MyEvent {
  title: string;
  start: Date;
  end?: Date;
  className: string;
  isMultiDay?: boolean;
  isAllDay?: boolean;
}

@Injectable()
export class MockEvents {
  dt = new Date();
  
  getEventsData() {
    const events: Array<MyEvent> = [
      /** Short event **/
      {
        title: 'Jaxson - Quick tag-up meeting',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), 1, 6, 30),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), 1, 6, 45),
        className: 'short-event long-title'
      },
      /** Same day events with long titles  **/
      {
        title: 'Karen - Meeting with Marketing Team',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), 7, 9, 30),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), 7, 10, 30),
        className: 'reg-event'
      },
      {
        title: 'Karen - Team Quarterly Meeting',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), 7, 12, 30),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), 7, 13, 0),
        className: 'long-title'
      },
      /** Multi-day Event: 16 days **/
      {
        title: 'Jaxson, Alex - Conference/Expo in Europe',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), 9, 7, 0),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), 25, 16, 30),
        className: 'multi-day',
        isMultiDay: true
      },
      /** Single all day event **/
      {
        title: 'Team Building Activity w/o end time',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), 5, 0, 0),
        isAllDay: true,
        className: 'all-day',
      },
      {
        title: 'Team Building Activity w/ end time',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), 22, 0, 0),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), 22, 23, 59),
        isAllDay: true,
        className: 'all-day',
      },
      /** Multi-day all day event: 3 days **/
      {
        title: 'Karen - Out of the Office',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), 22, 0, 0),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), 25, 0, 0),
        isAllDay: true,
        isMultiDay: true,
        className: 'all-day',
      },
      /** Multi-day Event: 1.5 days **/
      {
        title: 'Jaxson - Out of state meeting with clients',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), 26, 9, 0),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), 27, 15, 0),
        className: 'multi-day',
        isMultiDay: true
      },
      /** Multi-day Event: 3 days **/
      {
        title: 'Alex, Dylan - West coast meeting with clients',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), 1, 6, 0),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), 3, 20, 0),
        className: 'multi-day',
        isMultiDay: true
      },
      /** Overlapping events **/
      {
        title: 'Karen - Meeting with clients',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), 28, 14, 0),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), 28, 15, 30),
        className: 'reg-event'
      },
      {
        title: 'Alex - Meeting with XYZ Corp',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), 28, 14, 30),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), 28, 15, 15),
        className: 'reg-event'
      },
      {
        title: 'Dylan - Meeting with clients',
        start: new Date(this.dt.getFullYear(), this.dt.getMonth(), 28, 14, 30),
        end: new Date(this.dt.getFullYear(), this.dt.getMonth(), 28, 16, 30),
        className: 'reg-event'
      },
    ];
    return events;
  }
}