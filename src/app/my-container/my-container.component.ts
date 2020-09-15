import { Component, OnInit } from '@angular/core';

import { ICardBase, CardBase, ICardContentBase, CardBodyContent } from './card-base';

@Component({
  selector: 'my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.scss']
})
export class MyContainerComponent implements OnInit {
  kitchenSinkCardContents = [
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

  private primaryCard = this.getSimpleContent('primary');
  private secondaryCard = this.getSimpleContent('secondary');
  private successCard = this.getSimpleContent('success');
  private infoCard = this.getSimpleContent('info');
  private warningCard = this.getSimpleContent('warning');
  private dangerCard = this.getSimpleContent('danger');
  private darkCard = this.getSimpleContent('dark');
  private lightCard = this.getSimpleContent('light');
  
  constructor() { }

  ngOnInit() {
  }

  getSimpleContent(theme) {
    const simpleCardContents = [
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
            textColor: '',
            displayText: theme.charAt(0).toUpperCase() + theme.slice(1) + ' card title'
          }),
          new CardBodyContent({
            contentType: 'text',
            bgColor: '',
            borderColor: '',
            textColor: ''
          })
        ]
      })
    ];
    return simpleCardContents;
  }
}