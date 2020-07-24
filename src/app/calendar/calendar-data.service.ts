import {Injectable} from '@angular/core';

import {MyEvent, MockEvents} from './mock-events';

@Injectable()
export class CalendarDataService {
  constructor(private mockEvents: MockEvents){}
  getEvents() {
    return this.mockEvents.getData();
  }


}