import {
  Component,
  OnInit,
  Input,
  forwardRef,
  ViewChild
} from '@angular/core';
import {
  NgbTimeStruct,
  NgbDateStruct,
  NgbPopoverConfig,
  NgbPopover,
  NgbDatepicker
} from '@ng-bootstrap/ng-bootstrap';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DatePipe } from '@angular/common';
//import { DateTimeModel } from '../date-time-picker/date-time.model';

export interface ITime extends NgbTimeStruct {
  timeString: string;
}

const defaultHours = new Array(24).fill(0).map((x, i) => {return x+i;});
const defaultMinutes = [0,30];
const defaultTimes = new Array(48).fill({}).map((obj, idx) => {
      const h = (idx % 2 === 0) ? defaultHours[idx / 2] : defaultHours[(idx - 1) / 2];
      return {hour: h, minute: defaultMinutes[idx % 2], second: 0};
    });

@Component({
    selector: 'date-time-picker2',
    templateUrl: './date-time-picker2.component.html',
    styleUrls: ['./date-time-picker2.component.scss'],
    providers: [
        DatePipe,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateTimePickerComponent2),
            multi: true
        }
    ]
})
export class DateTimePickerComponent2 implements ControlValueAccessor, OnInit {
    //@Input() dateString: string;
    @Input()
    inputDatetimeFormat = 'M/d/yyyy H:mm';
    @Input()
    placeholder: string = "MM/dd/yyyy HH:mm";
    
    //private hourOptions = new Array(24).fill(0).map((x, i) => {return x+i;});
    //private minutesOptions = [0,30];
    private timeOptions = defaultTimes.map(x => {
      const newStr = x.hour.toString().padStart(2,0) + ':' + x.minute.toString().padStart(2,0);
      
      return {label: newStr, value: x};
    });

    //private datetime: DateTimeModel = new DateTimeModel();
    //private firstTimeAssign = true;

    @ViewChild(NgbDatepicker, {static: true})
    private dp: NgbDatepicker;

    @ViewChild(NgbPopover, {static: true})
    private popover: NgbPopover;

    private onTouched: any = () => { };
    private onChange: any = (_: any) => { };

    dateStruct: NgbDateStruct;
    timeStruct: ITime;
    date: Date;

    set dateTime(val) {
      if (val !== undefined && this.date !== val) {
        this.date = val;
        this.onChange(val);
        this.onTouched(val);
      }
    }

    constructor(private config: NgbPopoverConfig) {
        config.autoClose = 'outside';
        config.placement = 'auto';
    }

    ngOnInit(): void {
    }

    writeValue(newModel: string) {
        /*if (newModel) {
            this.datetime = Object.assign(this.datetime, DateTimeModel.fromLocalString(newModel));
            this.dateString = newModel;
            this.setDateStringModel();
        } else {
            this.datetime = new DateTimeModel();
        }*/
      if (newModel) {
        const myDate = new Date(newModel);

        this.dateStruct = {
          year: myDate.getFullYear(),
          month: myDate.getMonth() + 1,
          day: myDate.getDate()
        };

        this.timeStruct = {
          hour: myDate.getHours(),
          minute: myDate.getMinutes(),
          second: 0,
          timeString: myDate.getHours().toString().padStart(2,0) + ':' + myDate.getMinutes().toString.padStart(2,0)
        };

        this.setDateStringModel();
      }
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    onInputChange($event: any) {
      /*  const value = $event.target.value;
        const dt = DateTimeModel.fromLocalString(value);

        if (dt) {
            this.datetime = dt;
            this.setDateStringModel();
        } else if (value.trim() === '') {
            this.datetime = new DateTimeModel();
            this.dateString = '';
            this.onChange(this.dateString);
        } else {
              this.onChange(value);
        }*/
    }

    onDateChange($event) {        
        /*if ($event.year){
          $event = `${$event.year}-${$event.month}-${$event.day}`
        }

        const date = DateTimeModel.fromLocalString($event);
   
        if (!date) {
            this.dateString = this.dateString;
            return;
        }

        if (!this.datetime) {
            this.datetime = date;
        }

        this.datetime.year = date.year;
        this.datetime.month = date.month;
        this.datetime.day = date.day;

        if (this.dp) {
          this.dp.navigateTo({ year: this.datetime.year, month: this.datetime.month });
          console.log('navigated');
        }
        console.log('test');
        this.setDateStringModel();*/
      this.setDateStringModel();
    }

    onTimeChange($event: string) {
      console.log('onTimeChange',$event);
        /*this.datetime.hour = event.hour;
        this.datetime.minute = event.minute;
        this.datetime.second = event.second;

        console.log('onTimeChange',event);

        this.setDateStringModel();*/
      /*const newTime = $event.split(':').map(x=>parseInt(x, 10));
      this.timeStruct = {
        hour: newTime[0],
        minute: newTime[1],
        second: 0,
        timeString: $event
      }*/
      this.setDateStringModel();
    }

    onTimeAdd(evt) {
      console.log('onTimeAdd', evt);
    }

  setDateStringModel() {
    if (!this.timeStruct) {
      const dateA = new Date();
      this.timeStruct = {
        hour: dateA.getHours(),
        minute: dateA.getMinutes(),
        second: 0,
        timeString: dateA.getHours().toString().padStart(2,0) + ':' + dateA.getMinutes().toString.padStart(2,0)
      };
    }

    if (this.dateStruct) {
      this.date = new Date(
        this.dateStruct.year,
        this.dateStruct.month - 1,
        this.dateStruct.day,
        this.timeStruct.hour,
        this.timeStruct.minute,
        this.timeStruct.second
      );

      //this.onChange(this.date);
      this.dateTime = this.date;
    }
  }

  inputBlur($event) {
    this.onTouched();
  }
}
