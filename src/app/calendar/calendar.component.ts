import {Component, ViewChild, OnInit, AfterViewInit, AfterContentInit} from '@angular/core';
import {FullCalendarComponent} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

import {MockEvents} from './mock-events';
import {CalendarDataService} from './calendar-data.service';
import {CalendarService} from './calendar.service';
import {CALENDAR_CONFIG} from './calendar.config';

@Component({
  selector: 'main-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [MockEvents, CalendarDataService, CalendarService]
})
export class CalendarComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ViewChild('calendar', {static: false}) calendarComponent: FullCalendarComponent;
  config = CALENDAR_CONFIG;
  calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin];
  calendarEvents = this.dataService.getEvents();
  custButtons = {
    myMonthView: {
      text: 'month',
      click: ()=>this.onViewChange('dayGridMonth')
    },
    myWeekView: {
      text: 'week',
      click: ()=>this.onViewChange('timeGridWeek')
    },
    myDayView: {
      text: 'day',
      click: ()=>this.onViewChange('timeGridDay')
    },
    myListView: {
      text: 'list',
      click: ()=>this.onViewChange('listWeek')
    }
  };

  constructor(
    private dataService: CalendarDataService,
    private service: CalendarService
  ){ }

  ngOnInit() {
    // this.service.logMsg('...onInit...');
  }
  ngAfterContentInit() {
    // this.service.logMsg('...afterContentInit...');
  }
  ngAfterViewInit() {
    // this.service.logMsg('...afterViewInit...');
  }
  
  onViewSkeletonRender(arg) {
    const api = this.calendarComponent.getApi();
    api.setOption('height', this.service.calcHeight());
    // this.service.logMsg('viewSkeletonRender: ' + arg.view.type);
  }

  onViewSkeletonDestroy(arg) {
    // this.service.logMsg('viewSkeletonDestroy: ' + arg.view.type);
  }

  onDateClick(arg) {
    // this.service.logMsg('dateClick', arg);
  }

  onDatesRender(arg) {
    // this.service.logMsg('datesRender: ' + arg.view.type);
  }

  onDatesDestroy(arg) {
    // this.service.logMsg('datesDestroy: ' + arg.view.type);
  }

  onViewChange(newView) {
    if(this.calendarComponent) {
      this.dataService.currView = newView;
      const api = this.calendarComponent.getApi();
      this.calendarEvents = this.dataService.getEvents();
      api.changeView(newView);
    }
  }

  onSelect(arg) { }

  onUnselect(arg) { }

  onEventRender(arg) {
    // this.service.logMsg('eventRender: ' + arg.event.title);

    if (arg.event.extendedProps.allDay && arg.view.type !== 'listWeek') {
      arg.el.querySelector('.fc-title').innerHTML = 'All Day - ' + arg.event.title;
    }
    if (arg.event.extendedProps.multiDay && !arg.event.extendedProps.allDay) {
      if (arg.view.type === 'dayGridMonth') {
        const startTime = arg.event.start.getHours().toString().padStart(2,0) + ':' + arg.event.start.getMinutes().toString().padStart(2,0);
        const endTime = arg.event.end.getHours().toString().padStart(2,0) + ':' + arg.event.end.getMinutes().toString().padStart(2,0);
        if (arg.isStart === true) {
          arg.el.querySelector('.fc-time').innerHTML = startTime;
          arg.el.querySelector('.fc-time').classList.add('event-time-start');
        } else {
          arg.el.querySelector('.fc-title').style.margin = 'auto';
        }
      
        if (arg.isEnd === true) {
          let end = document.createElement('span');
          end.className = 'fc-time event-time-end';
          end.innerHTML = endTime;
          arg.el.querySelector('.fc-content').appendChild(end);
        } else {
          arg.el.querySelector('.fc-title').style.margin = 'auto';
        }
      }
      if (arg.view.type === 'timeGridWeek') {
        if (arg.isStart === true && arg.isEnd === true){
          arg.el.querySelector('.fc-title').style.margin = 'auto';
        } else {
          const divEl = document.createElement('div');
          divEl.className = 'fc-content';

          const startEl = document.createElement('span');
          startEl.className = 'fc-time event-time-start';
          
          const endEl = document.createElement('span');
          endEl.className = 'fc-time event-time-end';
          endEl.innerHTML = arg.event.extendedProps.endDate;

          if (arg.isStart === true) {
            startEl.innerHTML = arg.event.extendedProps.startDate + ' ' + arg.event.extendedProps.startTime;
          } else {
            startEl.innerHTML = arg.event.extendedProps.startDate;
          }
          divEl.appendChild(startEl);

          const titleEl = document.createElement('span');
          titleEl.className = 'fc-title';
          titleEl.innerHTML = arg.event.title;
          divEl.appendChild(titleEl);

          if (arg.isEnd === true) {
            endEl.innerHTML = arg.event.extendedProps.endDate + ' ' + arg.event.extendedProps.endTime;
          } else {
            endEl.innerHTML = arg.event.extendedProps.endDate;
          }
          divEl.appendChild(endEl);

          arg.el.removeChild(arg.el.querySelector('.fc-content'));
          arg.el.appendChild(divEl);
        }
      }
    }
    
  }

  onEventPositioned(arg) {
    // this.service.logMsg('eventPositioned: ' + arg.event.title);
  }

  onEventDestroy(arg) {
    // this.service.logMsg('eventDestroy: ' + arg.event.title);
  }
}