import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {MyEvent, MockEvents} from './mock-events';
import {
  parseAllDayEvent,
  parseAllDayMultiDayEvent,
  parseEvent,
  parseMultiDayEvent,
  transformMultiDayEvent
} from './calendar-utils';

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
          newEvent = parseAllDayEvent(evt);
        } else {
          newEvent = parseAllDayMultiDayEvent(evt);
        }
      } else {
        if (!evt.isMultiDay) {
          newEvent = parseEvent(evt);
        } else {
          if (this.currView === 'timeGridWeek' || this.currView === 'timeGridDay') {
            newEvent = transformMultiDayEvent(evt);
          } else {
            newEvent = parseMultiDayEvent(evt);
          }
        }
      }
      newEvents.push(newEvent);
    });
    return newEvents;
  }
}