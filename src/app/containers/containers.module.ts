import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardHeaderComponent } from './card/card-header/card-header.component';
import { CardBodyComponent } from './card/card-body/card-body.component';
import { CardImageComponent } from './card/card-image/card-image.component';
import { CardFooterComponent } from './card/card-footer/card-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardComponent, CardHeaderComponent, CardBodyComponent, CardImageComponent, CardFooterComponent]
})
export class ContainersModule { }