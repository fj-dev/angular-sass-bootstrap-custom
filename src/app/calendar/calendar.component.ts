import {Component, ViewChild, OnInit, AfterViewInit, AfterContentInit} from '@angular/core';
import {FullCalendarComponent} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

import {MockEvents} from './mock-events';

@Component({
  selector: 'main-calendar',
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
    const api = this.calendarComponent.getApi();
    let h = document.body.clientHeight - document.getElementsByClassName('navbar')[0].clientHeight;
    h = h - (parseInt(getComputedStyle(document.getElementsByClassName('calendar-container')[0]).marginTop, 10) * 2);
    api.setOption('height', h);
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
    if (arg.view.type === 'timeGridWeek') {
      //let x = arg.view.el.getElementsByClassName('fc-title').length;
      /*if (x < 1) {
        console.log(arg);
      }*/
      //console.log(arg.view.el.getElementsByClassName('fc-title'));
      console.log(arg.event.title);
    }
    // this.logMsg('eventRender: ' + arg.event.title);
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
        arg.el.classList.remove('fc-time-grid-event');
        arg.el.classList.add('fc-day-grid-event');
        arg.el.classList.add('fc-h-event');
        const elDiv = document.createElement('div');
        elDiv.className = 'fc-content';
        const spanEl = document.createElement('span');
        spanEl.className = 'fc-title jsf';
        spanEl.innerHTML = arg.event.title;
        elDiv.appendChild(spanEl);
        arg.el.replaceChild(elDiv, arg.el.getElementsByClassName('fc-content')[0]);
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
    if (arg.event.extendedProps.multiDay && !arg.event.extendedProps.allDay && arg.view.type === 'timeGridWeek') {
      //console.log(arg.el);
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