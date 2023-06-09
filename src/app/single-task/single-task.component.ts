import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css'],
})
export class SingleTaskComponent implements OnInit {
  constructor(
    private taskService: TasksService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  task?: Task;

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTask(id).subscribe((task) => (this.task = task));
  }

  save(task: string) {
    //update task here
    let updateTask = {
      id: this.task?.id,
      task: task,
      date: this.task!.date,
    };
    this.taskService
      .updateTask(updateTask as Task)
      .subscribe((_) => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
