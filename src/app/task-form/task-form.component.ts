import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  constructor() {}

  @Output() inputEvent = new EventEmitter<Task>();

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


  //for data entry validation variables
  isComplete = true;
  isCorrectDay = true;

  //send data to server
  addInput(task: string, month: string, day: string) {
    let numberDay = Number(day);
    let numberMonth = Number(month);
    const currentYear = new Date().getFullYear();

    if (!task || !month || !day) {
      this.isComplete = false;
      return;
    } else if (numberDay < 1 || numberDay > 31) {
      this.isComplete = true;
      this.isCorrectDay = false;
      return;
    } else {
      let newtask = {
        task: task,
        date: new Date(`${currentYear}-${numberMonth}-${numberDay}`),
      };
      this.isComplete = true;
      this.isCorrectDay = true;
      
      this.inputEvent.emit(newtask as Task);
    }
  }
}
