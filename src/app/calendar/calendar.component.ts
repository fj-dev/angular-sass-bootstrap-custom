import {Component, ViewChild, OnInit, AfterViewInit, AfterContentInit} from '@angular/core';

import { CalendarOptions, formatDate, FullCalendarComponent } from '@fullcalendar/angular';

import {MockEvents} from './mock-events';
import {CalendarDataService} from './calendar-data.service';
import {CalendarService} from './calendar.service';

import { createDayGridEvent, createTimeGridEvent, createListWeekEvent } from './calendar-utils';

@Component({
  selector: 'main-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [MockEvents, CalendarDataService, CalendarService]
})
export class CalendarComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  
  myMorePopoverTitle = '';
  myMorePopoverEvents = [];
  myMorePopoverStyles = {};
  //calendarEvents = this.dataService.getEvents();

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dayMaxEvents: true,
    headerToolbar: {
      left: 'myPrev,myNext today',
      center: 'title',
      right: 'myMonthView,myWeekView,myDayView,myListView'
    },
    allDaySlot: true,
    allDayText: 'All Day',
    slotEventOverlap: false,
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      meridiem: false,
      hour12: false
    },
    slotLabelFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      omitZeroMinute: false,
      meridiem: false
    },
    displayEventEnd: true,
    themeSystem: 'bootstrap',
    events: [],
    dayMaxEventRows: 3,
    customButtons: {
      myPrev: {
        text: '<',
        click: () => {
          const api = this.calendarComponent.getApi();
          api.prev();
        },
        icon: false
      },
      myNext: {
        text: '>',
        click: (mouseEvent, htmlElement) => {
          const api = this.calendarComponent.getApi();
          api.next();
        },
        icon: false,
      },
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
    },
    dateClick: this.onDateClick.bind(this),
    viewDidMount: this.onViewSkeletonRender.bind(this),
    viewWillUnmount: this.onViewSkeletonDestroy.bind(this),
    datesSet: this.onDatesRender.bind(this),
    select: this.onSelect.bind(this),
    unselect: this.onUnselect.bind(this),
    eventContent: this.onEventRender.bind(this),
    eventDidMount: this.onEventPositioned.bind(this),
    eventWillUnmount: this.onEventDestroy.bind(this),
    eventDisplay: 'block',
    moreLinkClick: this.onMoreLinkClick.bind(this),
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
    this.loadEvents();
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

  onViewChange(newView) {
    if(this.calendarComponent) {
      this.dataService.currView = newView;
      const api = this.calendarComponent.getApi();
      //this.calendarEvents = this.dataService.getEvents();
      this.loadEvents();
      api.changeView(newView);
    }
  }

  loadEvents() {
    const events = this.dataService.getEvents();
    const api = this.calendarComponent.getApi();
    api.setOption('events', events);
  }

  onSelect(arg) { }

  onUnselect(arg) { }

  onEventRender(arg) {
    // this.service.logMsg('eventRender: ' + arg.event.title);
    let content;

    switch (arg.view.type) {
      case 'timeGridWeek':
      case 'timeGridDay': {
        content = createTimeGridEvent(arg);
        break;
      }
      case 'listWeek': {
        content = createListWeekEvent(arg);
        break;
      }
      case 'dayGridMonth':
      default: {
        content = createDayGridEvent(arg);
        break;
      }
    }
    
    return content;
    
  }

  onEventPositioned(arg) {
    // this.service.logMsg('eventPositioned: ' + arg.event.title);
  }

  onEventDestroy(arg) {
    // this.service.logMsg('eventDestroy: ' + arg.event.title);
  }

  onMoreLinkClick(args) {
    console.log('onMoreLinkClick', args);
    args.jsEvent.cancelBubble = true;
    //args.jsEvent.stopPropogation();
    args.jsEvent.preventDefault();
    console.log('onMoreLinkClick', args.allSegs);
    // arg = {date: Date, allSegs: EventSegments, hiddenSegs: EventSegments, jsEvent}
    this.setMyMorePopoverStyles(null, null);
    this.myMorePopoverTitle = formatDate(args.date, {month: 'long',  year: 'numeric', day: 'numeric'});
    const newEvents = [];
    args.allSegs.forEach(seg => {
      // isStart = T, isEnd = T
      // isStart = F, isEnd = F
      // isStart = T, isEnd = F
      // isStart = F, isEnd = T
      let title = seg.event.title;
      if (seg.event.allDay === true) {
        title = 'All day - ' + title;
      } else {
        title = formatDate(seg.start, {month: '2-digit', day: '2-digit', year: '2-digit', seperator: '/'}) + ' - ' + seg.end.toLocaleDateString() + ' ' + seg.event.title;
      }  
      newEvents.push(title);    
    });

    this.myMorePopoverEvents = newEvents;
    this.setMyMorePopoverStyles(args.jsEvent.pageY, args.jsEvent.pageX);
    return 'none';
  }

  setMyMorePopoverStyles(top, left) {
    this.myMorePopoverStyles = {
      //'top': top ? top + 'px' : 'unset',
      //'left': left ? left + 'px' : 'unset',
      'position': 'relative',
     // 'display': top && left ? 'block' : 'none'
    };
  }

}