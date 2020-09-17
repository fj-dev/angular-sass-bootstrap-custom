import { Component, OnInit } from '@angular/core';

import { ICardBase, CardBase, ICardContentBase, CardBodyContent } from './card-base';

@Component({
  selector: 'my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.scss']
})
export class MyContainerComponent implements OnInit {
  private kitchenSinkCardContents = [
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
  
  private primaryCardHeader = this.getThemedHeaderSimpleContent('primary');
  private secondaryCardHeader = this.getThemedHeaderSimpleContent('secondary');
  private successCardHeader = this.getThemedHeaderSimpleContent('success');
  private infoCardHeader = this.getThemedHeaderSimpleContent('info');
  private warningCardHeader = this.getThemedHeaderSimpleContent('warning');
  private dangerCardHeader = this.getThemedHeaderSimpleContent('danger');
  private darkCardHeader = this.getThemedHeaderSimpleContent('dark');
  private lightCardHeader = this.getThemedHeaderSimpleContent('light');
  
  constructor() { }

  ngOnInit() {
  }

  private getSimpleContent(theme) {
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

  private getThemedHeaderSimpleContent(theme) {
    const simpleCardContents = [
      new CardBase({
        type: 'header', 
        bgColor: theme, 
        borderColor: '', 
        textColor: theme === 'light' ? 'dark' : 'light'
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