import { Component } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { TodoService } from '../../services/todo.service';
import { LoadingState, Todo } from '../../models/todo.model';

@Component({
  selector: 'app-add-new-todo',
  templateUrl: './add-new-todo.component.html',
  styleUrls: ['./add-new-todo.component.scss']
})
export class AddNewTodoComponent {
  inputValue = '';
  query: Todo[] = [];

  constructor(private todoService: TodoService) {
  }

  get loadingState() {
    return LoadingState;
  }

  addTodo(): void {
    this.inputValue = this.inputValue.trim();
    if (!this.inputValue) { return; }

    const item = {
      id: uuid(),
      title: this.inputValue,
      done: false,
      state: LoadingState.pending,
    };

    this.query.push(item);

    this.todoService.addTodo(item).subscribe(res => {
      item.state = res.success ? LoadingState.success : LoadingState.fail;

      setTimeout(() => {
        this.query = this.query.filter(todo => todo.id !== item.id);
      }, 5000);
    });

    this.inputValue = '';
  }
}
