import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task';


// in memory web api database creation here


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks: Task[] = [
      { id: 1, task: 'Something', date: new Date('2023-01-16') },
      { id: 2, task: 'Walk Dog', date: new Date('2023-01-20') },
      { id: 3, task: 'Wash Car', date: new Date('2023-01-20') },
      { id: 4, task: 'Change Oil', date: new Date('2023-01-26') },
      { id: 5, task: 'Buy Shampoo', date: new Date('2023-01-27') },
      { id: 6, task: 'Laundry', date: new Date('2023-01-28') },
    ];

    return { tasks };
  }

  genId(tasks: Task[]): number {
    return tasks.length > 0
      ? Math.max(...tasks.map((task) => task.id)) + 1
      : 1;
  }
}
