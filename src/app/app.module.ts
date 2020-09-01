import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faEllipsisV,
  faUser,
  faDragon,
  faEye as faSolidEye,
  faEyeSlash as faSolidEyeSlash,
  faMapMarker,
  faCalendar as faSolidCalendar,
  faCalendarAlt as faSolidCalendarAlt,
  faClock as faSolidClock,
  faStar,
  faMoon as faSolidMoon,
  faUserPlus, faUserMinus, faUserTimes,
  faPlus, faPlusSquare, faPlusCircle,
  faMinus, faMinusSquare, faMinusCircle,
  faTimes, faTimesCircle,
  faChevronRight, faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

import {
  faCalendar,
  faCalendarAlt,
  faClock,
  faEye,
  faEyeSlash,
  faMoon
} from '@fortawesome/free-regular-svg-icons';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyDialogsModule } from './dialogs/dialogs.module';
import { MyButtonsModule } from './buttons/buttons.module';
import { MyFormsModule } from './forms/forms.module';
import { MyNavsModule } from './navs/navs.module';
import { MyCalendarModule } from './calendar/calendar.module';

import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { CustomButtonsComponent } from './custom-buttons/custom-buttons.component';
import { MyThemeComponent } from './my-theme/my-theme.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyCalendarComponent } from './my-calendar/my-calendar.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MyLeftSidePanelComponent} from './my-sidepanel/my-left-side-panel.component';

FullCalendarModule.registerPlugins([
  bootstrapPlugin,
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
  listPlugin  
]);

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    NgbModule,
    FontAwesomeModule,
    FullCalendarModule,
    NgSelectModule,
    MyButtonsModule,
    MyDialogsModule,
    MyNavsModule,
    MyFormsModule,
    MyCalendarModule,
    AppRoutingModule
  ],
  exports: [
    NgbModule,
    FontAwesomeModule
  ],
  declarations:   [
    AppComponent,
    MyNavbarComponent,
    CustomButtonsComponent,
    MyThemeComponent,
    MyDashboardComponent,    
    MyCalendarComponent,
    MyFormComponent,
    MyLeftSidePanelComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faCalendar, faSolidCalendar,
      faCalendarAlt, faSolidCalendarAlt,
      faClock, faSolidClock,
      faEllipsisV,
      faEye, faSolidEye,
      faEyeSlash, faSolidEyeSlash,
      faUser,
      faDragon,
      faMoon, faSolidMoon,
      faMapMarker,
      faStar,
      faUserPlus, faUserMinus, faUserTimes,
      faPlus, faPlusSquare, faPlusCircle,
      faMinus, faMinusSquare, faMinusCircle,
      faTimes, faTimesCircle,
      faChevronRight, faChevronLeft
    );
  }
}
