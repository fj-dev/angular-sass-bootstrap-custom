import { Component } from '@angular/core';

@Component({
  selector: 'my-select-menus',
  templateUrl: './select-menu.component.html',
  styleUrls: ['./select-menu.component.scss']
})
export class SelectMenuComponent {
  optionItems = ["One", "Two", "Three", 4, 5, 6];
}