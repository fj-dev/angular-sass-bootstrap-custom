import {
  Component,
  OnInit,
  Input,
  forwardRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import {
  NgbTimeStruct,
  NgbDateStruct,
  NgbPopoverConfig,
  NgbPopover,
  NgbDatepicker
} from '@ng-bootstrap/ng-bootstrap';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor
} from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styles: ['./date-time-picker.component.scss'],
  providers: [
    DatePipe,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateTimePickerComponent),
      multi: true
    }
  ]
})
export class DateTimePickerComponent implements ControlValueAccessor, OnInit, AfterViewInit {
 
  @Input()
  inputDatetimeFormat = 'M/d/yyyy H:mm';
  @Input()
  placeholder: string = "MM/dd/yyyy HH:mm";
  @Input()
  disabled = false;

  @ViewChild(NgbDatepicker, null)
  private dp: NgbDatepicker;

  @ViewChild(NgbPopover, null)
  private popover: NgbPopover;

  private onTouched: any = () => { };
  private onChange: any = (_: any) => { };

  //public ngControl: NgControl;

  dateStruct: NgbDateStruct;
  timeStruct: NgbTimeStruct;
  date: Date;
  
  set dateTime(val) {
    if (val !== undefined && this.date !== val) {
      this.date = val;
      this.onChange(val)
      this.onTouched(val);
    }
  }
  
  constructor(private config: NgbPopoverConfig) {
    config.autoClose = 'outside';
    config.placement = 'auto';
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
  }

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
        second: myDate.getSeconds()
      };

      this.setDateStringModel();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInputChange($event: any) {}

  onDateChange(event: NgbDateStruct) {
    this.setDateStringModel();
  }

  onTimeChange(event: NgbTimeStruct) {
    this.setDateStringModel();
  }

  setDateStringModel() {
    if (!this.timeStruct) {
      const dateA = new Date();
      this.timeStruct = {
        hour: dateA.getHours(),
        minute: dateA.getMinutes(),
        second: dateA.getSeconds()
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

      this.dateTime = this.date;
    }
  }

  inputBlur($event) {
    this.onTouched();
  }

}