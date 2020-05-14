import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyDialogsModule } from './dialogs/dialogs.module';
import { MyButtonComponent } from './my-button/my-button.component';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { MyTabComponent } from './my-tab/my-tab.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule],
  declarations: [ AppComponent, HelloComponent, MyButtonComponent, MyNavbarComponent, MyTabComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
