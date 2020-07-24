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

  constructor(
    private dataService: CalendarDataService,
    private service: CalendarService
  ){}

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

  onSelect(arg) { }

  onUnselect(arg) { }

  onEventRender(arg) {
    // this.service.logMsg('eventRender: ' + arg.event.title);

    if (arg.event.extendedProps.allDay && arg.view.type !== 'listWeek') {
      arg.el.querySelector('.fc-title').innerHTML = 'All Day - ' + arg.event.title;
    }
    if (arg.event.extendedProps.multiDay && !arg.event.extendedProps.allDay) {
      const startTime = arg.event.start.getHours().toString().padStart(2,0) + ':' + arg.event.start.getMinutes().toString().padStart(2,0);
      const endTime = arg.event.end.getHours().toString().padStart(2,0) + ':' + arg.event.end.getMinutes().toString().padStart(2,0);
      if (arg.view.type === 'dayGridMonth'){
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
        /*arg.el.classList.remove('fc-time-grid-event');
        arg.el.classList.add('fc-day-grid-event');
        arg.el.classList.add('fc-h-event');
        const elDiv = document.createElement('div');
        elDiv.className = 'fc-content';
        const spanEl = document.createElement('span');
        spanEl.className = 'fc-title jsf';
        spanEl.innerHTML = arg.event.title;
        elDiv.appendChild(spanEl);
        arg.el.replaceChild(elDiv, arg.el.getElementsByClassName('fc-content')[0]);*/

        //console.log(arg);
        //console.log(arg.view.el.getElementsByClassName('fc-event-container').length);
        //if (arg.isStart === true || arg.isEnd === true) {
          //arg.el.querySelector('.fc-time').remove();
        //} 
        //const elTime = arg.el.querySelector('.fc-time');
        //console.log('elTime ', elTime);
        //arg.el.querySelector('.fc-content').removeChild(elTime);
        //const elTitle = arg.el.querySelector('.fc-title');
        //console.log('elTitle', elTitle);
        //arg.el.querySelector('.fc-title').remove();
        /*let title = document.createElement('span');
        title.className = 'fc-title';
        title.innerHTML = arg.event.title;
        arg.el.querySelector('.fc-content').appendChild(title);*/
        /*const el:Element = document.createElement('a');
        el.className = 'fc-day-grid-event fc-h-event fc-event fc-start fc-end';
        let divEl = document.createElement('div');
        divEl.className = 'fc-content';
        let spanEl = document.createElement('span');
        spanEl.className = 'fc-title';
        spanEl.innerHTML = arg.event.title;
        divEl.appendChild(spanEl);
        el.appendChild(divEl);
        arg.el = el;
        console.log('new el', el);
        return el;*/
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