import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  globalTheme = 'dark';
  navbarColor = 'dark';
  isThemeCollapsed = true;
  isLeftSidePanelCollapsed = true;
}
