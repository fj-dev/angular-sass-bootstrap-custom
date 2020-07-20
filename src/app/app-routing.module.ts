import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomButtonsComponent } from './custom-buttons/custom-buttons.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: MyDashboardComponent },
  { path: 'buttons', component: CustomButtonsComponent },
  { path: 'calendar', component: CalendarComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ] 
})
export class AppRoutingModule {}