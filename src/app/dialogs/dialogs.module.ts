import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MyModalComponent } from './modal/my-modal.component';
import { MyPopoverComponent} from './popover/my-popover.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
  MyModalComponent,
  MyPopoverComponent
  ],
  exports: [MyModalComponent]
})
export class MyDialogsModule{}