import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomButtonsComponent } from './custom-buttons/custom-buttons.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyCalendarComponent } from './my-calendar/my-calendar.component';
import { MyFormComponent } from './my-form/my-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: MyDashboardComponent },
  { path: 'buttons', component: CustomButtonsComponent },
  { path: 'calendar', component: MyCalendarComponent },
  { path: 'form', component: MyFormComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ] 
})
export class AppRoutingModule {}