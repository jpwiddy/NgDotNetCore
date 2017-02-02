import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

import * as Moment from 'moment';

import { NgbDropdownConfig, NgbDropdown, NgbTimeStruct, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'date-time',
    templateUrl: './date-time.component.html',
    styleUrls: ['./date-time.component.scss']
})
export class DateTimeComponent implements OnInit {
    @ViewChild(NgbDropdown) datetimeDropdown: NgbDropdown;
    @Input() formModel: any;    // External model bound back to parent
    @Output() formModelChange = new EventEmitter();

    dateTime: any; // Used internally on internal input
    timeModel: NgbTimeStruct;
    dateModel: NgbDateStruct;

    showTime: boolean;

    constructor(private config: NgbDropdownConfig) {
        config.autoClose = false;
        this.showTime = false;
    }

    ngOnInit() {
        let start = this.formModel ? Moment(this.formModel) : Moment();
        this.setDefaultDate(start);
        this.setDefaultTime(start);

        if (this.formModel) {
            this.modelChanged(null);
        }
    }

    setDefaultDate(start: any) {
        this.dateModel = { year: start.year(), month: start.month() + 1, day: start.date() }
    }

    setDefaultTime(start: any) {
        let remainder = 5 - start.minute() % 5,
            final = Moment(start).add(remainder, 'minutes');

        // Seed time model with current, rounding up to nearest 5 minutes (does roll hour over if needed)
        this.timeModel = { hour: final.hour(), minute: final.minute(), second: 0 };
    }

    // 

    toggle(event) {
        this.showTime = false;
    }

    blurred(event) {
        this.modelChanged(event)
    }

    modelChanged(event) {
        let newDate: any;

        if (event) {
            newDate = Moment(new Date(this.dateTime));
        } else {
            newDate = new Date(this.dateModel.year, this.dateModel.month, this.dateModel.day,
                this.timeModel.hour, this.timeModel.minute, this.timeModel.second);
        }

        if (newDate && !isNaN(newDate)) {
            console.log('newDate');
            // Set component view value
            this.dateTime = Moment(newDate).format('MM/D/YYYY h:mm A');
            // Update form passed in view value
            this.formModelChange.emit(Moment(newDate));
        }
    }

    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: { month: number }) {
        return date.month !== current.month;
    }

}
