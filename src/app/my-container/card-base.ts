export interface ICardBase {
  type: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  contents?: Array<CardBodyContent>;
}

export class CardBase {
  type = '';
  bgColor = '';
  borderColor = '';
  textColor = '';
  contents: Array<CardBodyContent>;
  
  constructor(input: ICardBase) {
    if (input) {
      this.type = input.type;
      this.bgColor = input.bgColor;
      this.borderColor = input.borderColor;
      this.textColor = input.textColor;
      if (input.contents) {
        this.contents = input.contents;
      }
    }
  }
}
export interface ICardContentBase {
  contentType: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  displayText?: string;
  
}
export class CardBodyContent {
  contentType = '';
  bgColor = '';
  borderColor = '';
  textColor = '';
  displayText;

  constructor(input: ICardContentBase) {
    if (input) {
      this.contentType = input.contentType;
      this.bgColor = input.bgColor;
      this.borderColor = input.borderColor;
      this.textColor = input.textColor;
      if (input.displayText) {
        this.displayText = input.displayText;
      }
    }
  }
}