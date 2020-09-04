import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent {
  private _bgColor;
  @Input() set bgColor(val) {
    this._bgColor = val;
    this.setMyClasses();
  }
  get bgColor() {
    return this._bgColor;
  }

  private _borderColor;
  @Input() set borderColor(val){
    this._borderColor = val;
    this.setMyClasses();
  }
  get borderColor() {
    return this._borderColor;
  }

  private _textColor;
  @Input() set textColor(val) {
    this._textColor = val;
    this.setMyClasses();
  }
  get textColor() {
    return this._textColor;
  }

  private _contents;
  @Input() set contents(val) {
    this._contents = val;
  }
  get contents() {
    return this._contents;
  }

  myClasses: {};
  constructor() {
    this.setMyClasses();
  }

  private setMyClasses() {
    this.myClasses = {
      'card-header': true,
      'bg-primary': this.bgColor && this.bgColor === 'primary',
      'bg-secondary': this.bgColor && this.bgColor ===  'secondary',
      'bg-dark': this.bgColor && this.bgColor === 'dark',
      'bg-light': this.bgColor && this.bgColor === 'light',
      'bg-success': this.bgColor && this.bgColor === 'success',
      'bg-info': this.bgColor && this.bgColor === 'info',
      'bg-warning': this.bgColor && this.bgColor === 'warning',
      'bg-danger': this.bgColor && this.bgColor === 'danger',
      'bg-transparent': this.bgColor && this.bgColor === 'transparent',
      'bg-white': this.bgColor && this.bgColor === 'white',
      'border-primary': this.borderColor && this.borderColor === 'primary',
      'border-secondary': this.borderColor && this.borderColor ===  'secondary',
      'border-white': this.borderColor && this.borderColor === 'white',
      'border-dark': this.borderColor && this.borderColor === 'dark',
      'border-light': this.borderColor && this.borderColor === 'light',
      'border-success': this.borderColor && this.borderColor === 'success',
      'border-info': this.borderColor && this.borderColor === 'info',
      'border-warning': this.borderColor && this.borderColor === 'warning',
      'border-danger': this.borderColor && this.borderColor === 'danger',
      'text-primary': this.textColor && this.textColor === 'primary',
      'text-secondary': this.textColor && this.textColor ===  'secondary',
      'text-dark': this.textColor && this.textColor === 'dark',
      'text-light': this.textColor && this.textColor === 'light',
      'text-success': this.textColor && this.textColor === 'success',
      'text-info': this.textColor && this.textColor === 'info',
      'text-warning': this.textColor && this.textColor === 'warning',
      'text-danger': this.textColor && this.textColor === 'danger',
      'text-muted': this.textColor && this.textColor === 'muted',
      'text-white': this.textColor && this.textColor === 'white'
    };
  }
}