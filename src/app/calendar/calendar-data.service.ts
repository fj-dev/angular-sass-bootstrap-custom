import {Injectable} from '@angular/core';

import {MyEvent, MockEvents} from './mock-events';

@Injectable()
export class CalendarDataService {
  constructor(private mockEvents: MockEvents){}
  getEvents() {
    return this.mockEvents.getData();
  }

  get calendarEvents() {
    return this.parseEventsData(this.mockEvents.getEventsData());
  }
  parseEventsData(evts) {
    let newEvents = evts.slice();
    newEvents
  }
  parseMultiDayEvent(start, end, title) {

  }

}