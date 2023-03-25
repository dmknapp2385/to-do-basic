import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  constructor(private taskService: TasksService) {}

  tasks: Task[] = [];

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe(task => this.tasks.push(task))
  }

  delete(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.taskService.deleteTask(id).subscribe();
  }
}
