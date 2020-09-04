import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MyButtonComponent } from './button/my-button.component';
import { MyInputButtonsComponent } from './input-buttons/my-input-buttons.component';
import { MyDropdownComponent } from './dropdown/my-dropdown.component';
import { MySplitButtonComponent } from './split-button/my-split-button.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    MyButtonComponent,
    MyInputButtonsComponent,
    MyDropdownComponent,
    MySplitButtonComponent
  ],
  exports: [
    MyButtonComponent,
    MyInputButtonsComponent,
    MyDropdownComponent,
    MySplitButtonComponent,
  ]
})
export class MyButtonsModule{}