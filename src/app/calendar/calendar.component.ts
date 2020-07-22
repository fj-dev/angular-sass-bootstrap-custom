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
      /*let elA = document.createElement('a');
      elA.className = arg.el.className;
      let elDiv = document.createElement('div');
      elDiv.className = 'fc-content';*/
      if (arg.isStart === true) {
        /*let start = document.createElement('span');
        start.className = 'fc-time start-event-time';
        start.innerHTML = startTime;
        elDiv.appendChild(start);*/
        arg.el.querySelector('.fc-time').innerHTML = startTime;
        //arg.el.querySelector('.fc-time').classList.add('start-time');
      } else {
        arg.el.querySelector('.fc-title').innerHTML = '';
      }
      
      /*let title = document.createElement('span');
      title.className = 'fc-title';
      title.innerHTML = arg.event.title;
      elDiv.appendChild(title);*/
      if (arg.isEnd === true) {
        let end = document.createElement('span');
        //end.className = 'fc-time end-time';
        end.className = 'fc-time';
        end.innerHTML = endTime;
        arg.el.querySelector('.fc-content').appendChild(end);
        //elDiv.appendChild(end);
      }
      //elA.appendChild(elDiv);
      //arg.el = elA;
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