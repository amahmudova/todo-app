import { Injectable } from '@angular/core';

import { concatMap, map, take, tap } from 'rxjs/operators';
import { Observable, of, Subject, timer } from 'rxjs';

import { Todo } from '../models/todo.model';


@Injectable({providedIn: 'root'})
export class TodoService {
  todos$: Subject<any> = new Subject<any>();
  loading$: Subject<any> = new Subject<any>();

  constructor() {
    this.todos$.pipe(
      concatMap(todo => {
      todo.success = Math.random() >= 0.2;

      return timer((Math.random() * 5 + 5) * 1000).pipe(
        take(1),
        tap(() => {
          if (todo.success) {
            this._todos.push(todo);
            localStorage.setItem('todos', JSON.stringify(this._todos));
          }
        }),
        map(() => todo)
      );
    })).subscribe((todo) => this.loading$.next(todo));
  }

  private _todos: Todo[] = [];

  setTodos(): void {
    this._todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  getTodoList(): Observable<any> {
    return of(this._todos);
  }

  addTodo(todo: Todo): void {
    this.todos$.next(todo);
  }

  toggleTodo(todo: Todo): Observable<any> {
    todo.done = !todo.done;
    localStorage.setItem('todos', JSON.stringify(this._todos));
    return of({success: true});
  }

  deleteTodo(todo: Todo): Observable<any> {
    this._todos = this._todos.filter(item => item.id !== todo.id);
    localStorage.setItem('todos', JSON.stringify(this._todos));
    return of({success: true});
  }
}
