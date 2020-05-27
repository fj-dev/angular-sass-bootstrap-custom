import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DateTimePickerComponent
  ],
  exports: [
   DateTimePickerComponent
  ]
})
export class MyFormsModule{}