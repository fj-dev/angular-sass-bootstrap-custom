import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-popover',
  templateUrl: './my-popover.component.html',
  styleUrls: ['./my-popover.component.scss']
})
export class MyPopoverComponent {
  private _placement = 'top';
  @Input() set popoverPlacement(val) {
    this._placement = val;
  }
  get popoverPlacement() {
    return this._placement;
  }

  private _theme = 'my-custom-popover';
  @Input() set theme(val) {
    this._theme = 'my-custom-popover-' + val;
  }
  get theme() {
    return this._theme;
  }

  private _buttonText = 'Popover';
  @Input() set buttonText(val) {
    this._buttonText = val;
  }
  get buttonText() {
    return this._buttonText;
  }

  private _title = 'Popover Title';
  @Input() set title(val) {
    this._title = val;
  }
  get title() {
    return this._title;
  }

  constructor(){}
}