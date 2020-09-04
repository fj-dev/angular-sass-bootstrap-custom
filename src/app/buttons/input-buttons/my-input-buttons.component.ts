import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-input-buttons',
  templateUrl: './my-input-buttons.component.html',
  styleUrls: ['./my-input-buttons.component.scss']
})
export class MyInputButtonsComponent {
  private _buttonType: 'checkbox' | 'radio' = 'radio';
  @Input() set buttonType(val) {
    this._buttonType = val;    
  }
  get buttonType() {
    return this._buttonType;
  }

  private _size;
  @Input() set size(val) {
    this._size = val;
    this.setBtnClass();
  }
  get size() {
    return this._size;
  }

  private _theme = 'primary';
  @Input() set theme(val) {
    this._theme = val;
    this.setBtnClass();
  }
  get theme() {
    return this._theme;
  }

  private _outline: boolean = false;
  @Input() set outline(val){
    this._outline = val;
    this.setBtnClass();
  }
  get outline() {
    return this._outline;
  }

  private _disabled: boolean = false;
  @Input() set disabled(val) {
    this._disabled = val;
    this.setBtnClass();
  }
  get disabled() {
    return this._disabled;
  }

  btnClass: {};

  constructor(){
    this.setBtnClass();
  }
  
  radioValue = 1;

  checkboxValues = {
    left: true,
    middle: false,
    right: false
  };

  private setBtnClass() {
    this.btnClass = {
      'btn-sm': this.size && this.size === 'small',
      'btn-lg': this.size && this.size === 'large',
      'btn-primary': this.theme === 'primary' && this.outline === false,
      'btn-secondary': this.theme === 'secondary' && this.outline === false,
      'btn-dark': this.theme === 'dark' && this.outline === false,
      'btn-light': this.theme === 'light' && this.outline === false,
      'btn-success': this.theme === 'success' && this.outline === false,
      'btn-info': this.theme === 'info' && this.outline === false,
      'btn-warning': this.theme === 'warning' && this.outline === false,
      'btn-danger': this.theme === 'danger' && this.outline === false,
      'btn-link': this.theme === 'link' && this.outline === false,
      'btn-outline-primary': this.theme === 'primary' && this.outline === true,
      'btn-outline-secondary': this.theme === 'secondary' && this.outline === true,
      'btn-outline-dark': this.theme === 'dark' && this.outline === true,
      'btn-outline-light': this.theme === 'light' && this.outline === true,
      'btn-outline-success': this.theme === 'success' && this.outline === true,
      'btn-outline-info': this.theme === 'info' && this.outline === true,
      'btn-outline-warning': this.theme === 'warning' && this.outline === true,
      'btn-outline-danger': this.theme === 'danger' && this.outline === true,
      'disabled': this.disabled === true
    };
  }
}