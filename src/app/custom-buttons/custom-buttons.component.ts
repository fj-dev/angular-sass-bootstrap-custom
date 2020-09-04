import {Component} from '@angular/core';

class ButtonBase {
  constructor(
    private title: string,
    private theme: string,
    private size: string){}
}
@Component({
  selector: 'custom-buttons',
  templateUrl: './custom-buttons.html',
  styleUrls: ['./custom-buttons.scss']
})
export class CustomButtonsComponent {
  controls = [
    new ButtonBase("Primary", "primary", "default"),
    new ButtonBase('Secondary', 'secondary', 'default'),
    new ButtonBase('Success', 'success', 'default'),
    new ButtonBase('Info', 'info', 'default'),
    new ButtonBase('Warning', 'warning', 'default'),
    new ButtonBase('Danger', 'danger', 'default'),
    new ButtonBase('Dark', 'dark', 'default'),
    new ButtonBase('Light', 'light', 'default'),
    new ButtonBase('Link', 'link', 'default')
  ];
  constructor(){}
  
  //title, size, theme, outline
}