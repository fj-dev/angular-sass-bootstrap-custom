import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FullCalendarModule} from '@fullcalendar/angular';

import {CalendarComponent} from './calendar.component';

@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule
  ],
  declarations: [
    CalendarComponent
  ],
  exports: [
    CalendarComponent
  ]
})
export class MyCalendarModule{}