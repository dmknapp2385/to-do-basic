import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  createDb() {
    const tasks = [
      { id: 1, task: 'Something', date: new Date('2023-01-16') },
      { id: 2, task: 'Walk Dog', date: new Date('2023-01-20') },
      { id: 3, task: 'Wash Car', date: new Date('2023-01-20') },
      { id: 4, task: 'Change Oil', date: new Date('2023-01-26') },
      { id: 5, task: 'Buy Shampoo', date: new Date('2023-01-27') },
      { id: 6, task: 'Laundry', date: new Date('2023-01-28') },
    ];

    return { tasks };
  }
}
