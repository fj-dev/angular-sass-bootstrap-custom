import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faEllipsisV,
  faUser,
  faDragon,
  faMapMarker,
  faStar,
  faMoon as faSolidMoon
} from '@fortawesome/free-solid-svg-icons';

import {
  faMoon
} from '@fortawesome/free-regular-svg-icons';

import { AppComponent } from './app.component';
import { MyDialogsModule } from './dialogs/dialogs.module';
import { MyButtonsModule } from './buttons/buttons.module';
import { MyNavsModule } from './navs/navs.module';

import { MyNavbarComponent } from './my-navbar/my-navbar.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    NgbModule,
    FontAwesomeModule,
    MyButtonsModule,
    MyDialogsModule,
    MyNavsModule
  ],
  declarations:   [
    AppComponent,
    MyNavbarComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faEllipsisV,
      faUser,
      faDragon,
      faMoon,
      faSolidMoon,
      faMapMarker,
      faStar
    );
  }
}
