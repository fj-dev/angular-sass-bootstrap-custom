import {Injectable} from '@angular/core';

import {MyEvent, MockEvents} from './mock-events';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CalendarDataService {
  private _currView = '';
  set currView(val) {
    this._currView = val;
  }
  get currView() {
    return this._currView;
  }

  constructor(private mockEvents: MockEvents){}
  getEvents() {
    const newEvents = [];
    this.mockEvents.getEventsData().forEach((evt) => {
      let newEvent;
      if (evt.isAllDay === true) {
        if (!evt.isMultiDay) {
          newEvent = this.parseAllDayEvent(evt);
        } else {
          newEvent = this.parseAllDayMultiDayEvent(evt);
        }
      } else {
        if (!evt.isMultiDay) {
          newEvent = this.parseEvent(evt);
        } else {
          if (this.currView === 'timeGridWeek') {
            newEvent = this.transformMultiDayEvent(evt);
          } else {
            newEvent = this.parseMultiDayEvent(evt);
          }
        }
      }
      newEvents.push(newEvent);
    });
    return newEvents;
  }

  get calendarEvents() {
    return this.parseEventsData(this.mockEvents.getEventsData());
  }
  parseEventsData(evts) {
    const newEvents = [];
    evts.forEach((evt) => {
      let newEvent;
      if (evt.isAllDay === true) {
        if (!evt.isMultiDay) {
          newEvent = this.parseAllDayEvent(evt);
        } else {
          newEvent = this.parseAllDayMultiDayEvent(evt);
        }
      } else {
        if (!evt.isMultiDay) {
          newEvent = this.parseEvent(evt);
        } else {
          if (this.currView === 'timeGridWeek') {
            newEvent = this.transformMultiDayEvent(evt);
          } else {
            newEvent = this.parseMultiDayEvent(evt);
          }
        }
      }
      newEvents.push(newEvent);
    });
    return newEvents;
  }
  parseAllDayEvent(evt: MyEvent) {
    return {
      title: evt.title,
      start: evt.start,
      end: evt.end ? evt.end : null,
      className: evt.className,
      allDay: true,
      extendedProps: {allDay: true}
    };
  }
  parseAllDayMultiDayEvent(evt: MyEvent) {
    return {
      title: evt.title,
      start: evt.start,
      end: new Date(evt.end.getFullYear(), evt.end.getMonth(), evt.end.getDate() + 1),
      className: evt.className,
      allDay: true,
      extendedProps: {multiDay: true, allDay: true}
    };
  }
  parseEvent(evt: MyEvent) {
    return {
      title: evt.title,
      start: evt.start,
      end: evt.end ? evt.end : null,
      className: evt.className
    };
  }
  parseMultiDayEvent(evt: MyEvent) {
    return {
      title: evt.title,
      start: evt.start,
      end: evt.end,
      className: evt.className,
      extendedProps: {multiDay: true}
    };
  }
  transformMultiDayEvent(evt: MyEvent) {
    return {
      title: evt.title,
      start: evt.start,
      end: new Date(evt.end.getFullYear(), evt.end.getMonth(), evt.end.getDate() + 1),
      className: evt.className,
      allDay: true,
      extendedProps: {
        multiDay: true,
        allDay: false,
        startDate: (evt.start.getMonth() + 1).toString() + '/' + evt.start.getDate().toString(),
        startTime: evt.start.getHours().toString().padStart(2,0) + ':' + evt.start.getMinutes().toString().padStart(2,0),
        endDate: (evt.end.getMonth() + 1).toString() + '/' + evt.end.getDate().toString(),
        endTime: evt.end.getHours().toString().padStart(2,0) + ':' + evt.end.getMinutes().toString().padStart(2,0)
      }
    }
  }
}