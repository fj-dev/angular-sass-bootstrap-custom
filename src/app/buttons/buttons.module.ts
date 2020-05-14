import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyButtonComponent } from './button/my-button.component';
import { MyRadioButtonsComponent } from './radio-buttons/my-radio-buttons.component';
import { MyDropdownComponent } from './dropdown/my-dropdown.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MyButtonComponent,
    MyRadioButtonsComponent,
    MyDropdownComponent
  ],
  exports: [
    MyButtonComponent,
    MyRadioButtonsComponent,
    MyDropdownComponent
  ]
})
export class MyButtonsModule{}