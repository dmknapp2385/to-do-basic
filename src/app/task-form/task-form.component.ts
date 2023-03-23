import { Component, Output, EventEmitter } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  isComplete = true;
  isCorrectDay = true;

  addInput(task: string, month: string, day: string) {
    let numberDay: number, numberMonth: number;
    numberDay = Number(day);
    numberMonth = Number(month);
    if (!task || !month || !day) {
      this.isComplete = false;
      return;

      // } else if (month.length < 2) {
      //   month = '0' + month;
      //   numberMonth = Number(month)
    } else if (numberDay < 1 || numberDay > 31) {
      console.log('in day');
      this.isCorrectDay = false;
      return;
    }
  }
}
