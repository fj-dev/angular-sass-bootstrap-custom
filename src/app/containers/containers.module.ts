import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CardComponent } from './card/card.component';
import { CardHeaderComponent } from './card/card-header/card-header.component';
import { CardBodyComponent } from './card/card-body/card-body.component';
import { CardFooterComponent } from './card/card-footer/card-footer.component';
import { CardBodyContentComponent } from './card/card-body-content/card-body-content.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardBodyContentComponent
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardBodyContentComponent
  ]
})
export class MyContainersModule { }