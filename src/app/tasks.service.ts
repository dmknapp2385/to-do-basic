import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  private taskUrl = 'api/tasks'; //api/ {name of db in memodry database goes here}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  //method to handle errors from http requests
  //param operation -name of operation that failed
  // param result - optional  value to return as the observable result
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); //would send this to remote logging infrastructure with true server
      return of(result as T); //returning an observable of type T
    };
  }

  // get tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl).pipe(
      tap((_) => console.log('tasks fetched')),
      catchError(this.handleError<Task[]>('getTasks', []))
    );
  }

  //get task by id
  getTask(id: number): Observable<Task> {
    const idUrl = `${this.taskUrl}/${id}`;
    return this.http.get<Task>(idUrl).pipe(
      tap((_) => console.log(`task id: ${id} fetched`)),
      catchError(this.handleError<Task>('get task by ID'))
    );
  }

  //add a task
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.taskUrl, task, this.httpOptions).pipe(
      tap((newTask: Task) => console.log(newTask)),
      catchError(this.handleError<Task>('addTask'))
    );
  }

  // delete a task
  deleteTask(id: number): Observable<Task> {
    const url = `${this.taskUrl}/${id}`;
    return this.http
      .delete<Task>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Task>('deletetask')));
  }

  //update task
  updateTask(task: Task): Observable<any> {
    return this.http.put(this.taskUrl, task, this.httpOptions).pipe(
      tap((_) => console.log(`updated task id=${task.id}`)),
      catchError(this.handleError<any>(`update task`))
    );
  }
}
