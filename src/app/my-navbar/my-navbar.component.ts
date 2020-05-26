import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-navbar',
  templateUrl: './my-navbar.component.html',
  styleUrls: ['./my-navbar.component.scss']
})
export class MyNavbarComponent {
  @Output() toggleTheme = new EventEmitter<any>();

  private _theme = 'light';
  @Input() set theme(val) {
    this._theme = val;
    this.setNavbarClass();
  }
  get theme() {
    return this._theme;
  }

  private _bgColor = 'primary';
  @Input() set bgColor(val) {
    this._bgColor = val;
    this.setNavbarClass();
  }
  get bgColor() {
    return this._bgColor;
  }

  private _themeCollapsed = false;
  @Input() set themeCollapsed(val) {
    this._themeCollapsed = val;
  }
  get themeCollapsed() {
    return this._themeCollapsed;
  }

  collapsed = true;
  navbarClass: {};

  constructor() {
    this.setNavbarClass();
  }

  private setNavbarClass() {
    this.navbarClass = {
      'navbar': true,
      'navbar-expand-sm': true,
      'navbar-light': this.theme === 'light',
      'navbar-dark': this.theme !== 'light',
      'bg-primary': this.bgColor === 'primary',
      'bg-secondary': this.bgColor === 'secondary',
      'bg-dark': this.bgColor === 'dark',
      'bg-light': this.bgColor === 'light',
      'bg-success': this.bgColor === 'success',
      'bg-info': this.bgColor === 'info',
      'bg-warning': this.bgColor === 'warning',
      'bg-danger': this.bgColor === 'danger'
    };
  }

  onToggleTheme() {
    this.toggleTheme.emit(true);
  }
}