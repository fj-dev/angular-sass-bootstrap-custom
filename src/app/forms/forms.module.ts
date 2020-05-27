import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  declarations: [
    DateTimePickerComponent
  ],
  exports: [
   DateTimePickerComponent
  ]
})
export class MyFormsModule{}