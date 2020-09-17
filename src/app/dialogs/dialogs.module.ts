import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MyModalComponent } from './modal/my-modal.component';
import { MyPopoverComponent } from './popover/my-popover.component';
import { MyTooltipComponent } from './tooltip/my-tooltip.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    MyModalComponent,
    MyPopoverComponent,
    MyTooltipComponent
  ],
  exports: [
    MyModalComponent,
    MyPopoverComponent,
    MyTooltipComponent
  ]
})
export class MyDialogsModule{}