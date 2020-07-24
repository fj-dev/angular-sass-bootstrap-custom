import {Injectable} from '@angular/core';

import {CalendarDataService} from './calendar-data.service';

@Injectable()
export class CalendarService {
  
  calcHeight() {
    let h = document.body.clientHeight - document.getElementsByClassName('navbar')[0].clientHeight;
    h = h - (parseInt(getComputedStyle(document.getElementsByClassName('calendar-container')[0]).marginTop, 10) * 2);

    return h;
  }
  
  logMsg(msg, obj?) {
    if (!obj){
      console.log(msg);
    } else {
      console.log(msg, obj);
    }
  }
}