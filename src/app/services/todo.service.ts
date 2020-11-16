import { Injectable } from '@angular/core';

import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Todo } from '../models/todo.model';


@Injectable({providedIn: 'root'})
export class TodoService {
  constructor() {
  }

  private _todos: Todo[] = [];

  setTodos(): void {
    this._todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  getTodoList(): Observable<any> {
    return of(this._todos);
  }

  addTodo(todo: Todo): Observable<any> {
    const isSuccess = Math.random() >= 0.2;
    delete todo.state;
    if (isSuccess) {
      this._todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(this._todos));
    }
    return of({success: isSuccess}).pipe(delay((Math.random() * 5 + 5) * 1000));
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
