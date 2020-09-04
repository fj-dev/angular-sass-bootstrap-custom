import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  private _cardContents = [];
  @Input() set cardContents(val) {
    this._cardContents = val;
  }
  get cardContents() {
    return this._cardContents;
  }
  constructor() { }
}