import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MyFormsComponent } from './forms.component';
import { DateTimePickersComponent } from './date-time-picker/date-time-pickers.component';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker/date-time-picker.component';
import { DateTimePickerComponent2 } from './date-time-picker/date-time-picker2/date-time-picker2.component';
import { DateTimePickerComponent3 } from './date-time-picker/date-time-picker3/date-time-picker3.component';
import { SelectMenuComponent } from './select-menu/select-menu.component';
import { PickListComponent } from './pick-list/pick-list.component';

import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    FontAwesomeModule
  ],
  declarations: [
    DateTimePickerComponent,
    DateTimePickerComponent2,
    DateTimePickerComponent3,
    DateTimePickersComponent,
    PickListComponent,
    SelectMenuComponent,
    MyFormsComponent
  ],
  exports: [
   DateTimePickerComponent,
   DateTimePickerComponent2,
   DateTimePickerComponent3,
   DateTimePickersComponent,
   PickListComponent,
   SelectMenuComponent,
   MyFormsComponent
  ]
})
export class MyFormsModule{}