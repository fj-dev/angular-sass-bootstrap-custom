import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyDialogsModule } from './dialogs/dialogs.module';
import { MyButtonsModule } from './buttons/buttons.module';
import { MyNavsModule } from './navs/navs.module';

import { MyNavbarComponent } from './my-navbar/my-navbar.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    NgbModule,
    MyButtonsModule,
    MyDialogsModule,
    MyNavsModule
  ],
  declarations:   [
    AppComponent,
    HelloComponent,
    MyNavbarComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
