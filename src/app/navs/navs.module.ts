import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyTabsComponent} from './tabs/my-tabs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MyTabsComponent
  ],
  exports: [
    MyTabsComponent
  ]
})
export class MyNavsModule{}