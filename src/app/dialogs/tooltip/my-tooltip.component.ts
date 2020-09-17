import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-tooltip',
  templateUrl: './my-tooltip.component.html',
  styleUrls: ['./my-tooltip.component.scss'],
})
export class MyTooltipComponent {
  private _placement = 'top';
  @Input() set tooltipPlacement(val) {
    this._placement = val;
  }
  get tooltipPlacement() {
    return this._placement;
  }

  private _theme = 'my-custom-tooltip';
  @Input() set theme(val) {
    this._theme = 'my-custom-tooltip-' + val;
  }
  get theme() {
    return this._theme;
  }
  
  private _buttonText = 'Tooltip on top';
  @Input() set buttonText(val) {
    this._buttonText = val;
  }
  get buttonText() {
    return this._buttonText;
  }

  private _tooltip = 'Tooltip default ';
  @Input() set tooltipContent(val) {
    this._tooltip = val;
  }
  get tooltipContent() {
    return this._tooltip;
  }

  constructor(){ }
}