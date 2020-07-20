import {Component, ViewChild} from '@angular/core';
import {FullCalendarComponent} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

import {MockEvents} from './mock-events';

@Component({
  selector: 'my-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [MockEvents]
})
export class CalendarComponent {
  @ViewChild('calendar', {static: false}) calendarComponent: FullCalendarComponent;

  constructor(private mockEvents: MockEvents){}

  calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin];
  calendarEvents = this.mockEvents.getData();

  onViewSkeletonRender(arg) {
    // this.logMsg('viewSkeletonRender', arg);
    this.logMsg('viewSkeletonRender: ' + arg.view.type);
  }

  onViewSkeletonDestroy(arg) {
    this.logMsg('viewSkeletonDestroy: ' + arg.view.type);
  }

  onDateClick(arg) {
    // this.logMsg('dateClick', arg);
  }

  onDatesRender(arg) {
    this.logMsg('datesRender: ' + arg.view.type);
  }

  onDatesDestroy(arg) {
    this.logMsg('datesDestroy: ' + arg.view.type);
  }

  onSelect(arg) {

  }

  onUnselect(arg) {

  }

  onEventRender(arg) {

  }

  onEventPositioned(arg) {

  }

  onEventDestroy(arg) {

  }

  logMsg(msg, obj?) {
    if (!obj){
      console.log(msg);
    } else {
      console.log(msg, obj);
    }
  }
}