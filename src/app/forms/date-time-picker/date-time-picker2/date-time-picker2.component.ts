import { Component, OnInit, Input, forwardRef, ViewChild } from "@angular/core";
import {
  NgbTimeStruct,
  NgbDateStruct,
  NgbPopoverConfig,
  NgbPopover,
  NgbDatepicker
} from "@ng-bootstrap/ng-bootstrap";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { DatePipe } from "@angular/common";

export interface ITime extends NgbTimeStruct {
  timeString: string;
}

const defaultHours = new Array(24).fill(0).map((x, i) => {
  return x + i;
});
const defaultMinutes = [0, 30];
const defaultTimes = new Array(48).fill({}).map((obj, idx) => {
  const h = idx % 2 === 0 ? defaultHours[idx / 2] : defaultHours[(idx - 1) / 2];
  const m = defaultMinutes[idx % 2];
  return { hour: h, minute: m, second: 0 };
});

@Component({
  selector: "date-time-picker2",
  templateUrl: "./date-time-picker2.component.html",
  styleUrls: ["./date-time-picker2.component.scss"],
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
  inputDatetimeFormat = "MM/dd/yyyy HH:mm";
  @Input()
  placeholder: string = "MM/dd/yyyy HH:mm";

  //private hourOptions = new Array(24).fill(0).map((x, i) => {return x+i;});
  //private minutesOptions = [0,30];
  private timeOptions = defaultTimes.map(x => {
    return {
      hour: x.hour,
      minute: x.minute,
      second: x.second,
      timeString:
        x.hour.toString().padStart(2, 0) +
        ":" +
        x.minute.toString().padStart(2, 0)
    };
  });

  @ViewChild(NgbDatepicker, { static: true })
  private dp: NgbDatepicker;

  @ViewChild(NgbPopover, { static: true })
  private popover: NgbPopover;

  private onTouched: any = () => {};
  private onChange: any = (_: any) => {};

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
    config.autoClose = "outside";
    config.placement = "auto";
  }

  ngOnInit(): void {}

  writeValue(newModel: string) {
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
        timeString:
          myDate
            .getHours()
            .toString()
            .padStart(2, 0) +
          ":" +
          myDate.getMinutes().toString.padStart(2, 0)
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
    this.setDateStringModel();
  }

  onTimeChange($event) {
    this.setDateStringModel();
  }

  addTagFn(timeValue) {
    const newTime = timeValue.split(":").map(x => parseInt(x, 10));
    if (newTime.length < 2) {
      return false;
    } else {
      return {
        hour: newTime[0],
        minute: newTime[1],
        second: 0,
        timeString: timeValue
      };
    }
  }

  setDateStringModel() {
    if (!this.timeStruct) {
      this.timeStruct = {
        hour: 0,
        minute: 0,
        second: 0,
        timeString: "00:00"
      };
    }

    if (this.dateStruct) {
      this.date = new Date(
        this.dateStruct.year,
        this.dateStruct.month - 1,
        this.dateStruct.day,
        this.timeStruct.hour,
        this.timeStruct.minute,
        this.timeStruct.second,
        0
      );
    } else {
      this.date = new Date();
      this.date.setHours(this.timeStruct.hour);
      this.date.setMinutes(this.timeStruct.minute);
      this.date.setSeconds(this.timeStruct.second);
      this.date.setMilliseconds(0);
    }
    this.dateTime = this.date;
  }

  inputBlur($event) {
    this.onTouched();
  }
}
