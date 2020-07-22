import {Component, ViewChild, OnInit, AfterViewInit, AfterContentInit} from '@angular/core';
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
export class CalendarComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ViewChild('calendar', {static: false}) calendarComponent: FullCalendarComponent;

  calHeader = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  };
  timeFormat = {
    hour: '2-digit',
    minute: '2-digit',
    meridiem: false,
    hour12: false
  };
  slotFormat = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    omitZeroMinute: false,
    meridiem: false
  };

  calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin];
  calendarEvents = this.mockEvents.getData();

  constructor(private mockEvents: MockEvents){}

  ngOnInit() {
    // this.logMsg('...onInit...');
  }
  ngAfterContentInit() {
    // this.logMsg('...afterContentInit...');
  }
  ngAfterViewInit() {
    // this.logMsg('...afterViewInit...');
  }
  
  onViewSkeletonRender(arg) {
    // this.logMsg('viewSkeletonRender', arg);
    // this.logMsg('viewSkeletonRender: ' + arg.view.type);
  }

  onViewSkeletonDestroy(arg) {
    // this.logMsg('viewSkeletonDestroy: ' + arg.view.type);
  }

  onDateClick(arg) {
    // this.logMsg('dateClick', arg);
  }

  onDatesRender(arg) {
    // this.logMsg('datesRender: ' + arg.view.type);
  }

  onDatesDestroy(arg) {
    // this.logMsg('datesDestroy: ' + arg.view.type);
  }

  onSelect(arg) { }

  onUnselect(arg) { }

  onEventRender(arg) {
    // this.logMsg('eventRender: ' + arg.event.title);
    if (arg.view.type === 'dayGridMonth' && arg.event.extendedProps.multiDay && !arg.event.extendedProps.allDay) {
      const startTime = arg.event.start.getHours().toString().padStart(2,0) + ':' + arg.event.start.getMinutes().toString().padStart(2,0);
      const endTime = arg.event.end.getHours().toString().padStart(2,0) + ':' + arg.event.end.getMinutes().toString().padStart(2,0);

      if (arg.isStart === true) {
        arg.el.querySelector('.fc-time').innerHTML = startTime;
      } else {
        arg.el.querySelector('.fc-title').innerHTML = '';
      }
      
      if (arg.isEnd === true) {
        let end = document.createElement('span');
        end.className = 'fc-time';
        end.innerHTML = endTime;
        arg.el.querySelector('.fc-content').appendChild(end);
      }
    }
  }

  onEventPositioned(arg) {
    if (arg.event.extendedProps.multiDay && !arg.event.extendedProps.allDay) {
      ///this.logMsg('eventPositioned', arg.el);
    } // this.logMsg('eventPositioned: ' + arg.event.title);
  }

  onEventDestroy(arg) {
    // this.logMsg('eventDestroy: ' + arg.event.title);
  }

  logMsg(msg, obj?) {
    if (!obj){
      console.log(msg);
    } else {
      console.log(msg, obj);
    }
  }
}