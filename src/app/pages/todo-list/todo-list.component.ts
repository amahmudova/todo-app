import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Todo[];
  subscription: Subscription;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodoList();
  }

  private getTodoList(): void {
    this.subscription = this.todoService.getTodoList().subscribe(res => {
      this.todos = res.sort((a, b) => {
        if (a.title > b.title) { return -1; }
        if (b.title > a.title) { return 1; }
        return 0;
      });
    });
  }

  async toggleTodo(todo: Todo): Promise<void> {
   await this.todoService.toggleTodo(todo).toPromise();
  }

  async deleteTodo(todo: Todo): Promise<void> {
    await this.todoService.deleteTodo(todo).toPromise();
    this.todos = this.todos.filter(item => item.id !== todo.id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
