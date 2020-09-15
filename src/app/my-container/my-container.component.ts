import { Component, OnInit } from '@angular/core';

import { ICardBase, CardBase, ICardContentBase, CardBodyContent } from './card-base';

@Component({
  selector: 'my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.scss']
})
export class MyContainerComponent implements OnInit {
  cardContents = [
    new CardBase({
      type: 'header', 
      bgColor: '', 
      borderColor: '', 
      textColor: ''
    }),
    new CardBase({
      type: 'body', 
      bgColor: '', 
      borderColor: '', 
      textColor: '', 
      contents: [
        new CardBodyContent({
          contentType: 'title',
          bgColor: '',
          borderColor: '',
          textColor: ''
        }),
        new CardBodyContent({
          contentType: 'subtitle',
          bgColor: '',
          borderColor: '',
          textColor: 'muted'
        }),
        new CardBodyContent({
          contentType: 'text',
          bgColor: '',
          borderColor: '',
          textColor: 'light'
        })
      ]
    }),
    new CardBase({
      type: 'body', 
      bgColor: '', 
      borderColor: '', 
      textColor: '', 
      contents: [
        new CardBodyContent({
          contentType: 'link',
          bgColor: '',
          borderColor: '',
          textColor: '',
          displayText: 'Card Link'
        }),
        new CardBodyContent({
          contentType: 'link',
          bgColor: '',
          borderColor: '',
          textColor: '',
          displayText: 'Another Link'
        }),
      ]
    }),
    new CardBase({
      type: 'footer', 
      bgColor: '', 
      borderColor: '', 
      textColor: 'muted'
    }),
  ];

  constructor() { }

  ngOnInit() {
  }

}