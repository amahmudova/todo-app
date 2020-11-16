import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { v4 as uuid } from 'uuid';

import { TodoService } from '../../services/todo.service';
import { LoadingState, Todo } from '../../models/todo.model';

@Component({
  selector: 'app-add-new-todo',
  templateUrl: './add-new-todo.component.html',
  styleUrls: ['./add-new-todo.component.scss']
})
export class AddNewTodoComponent implements OnDestroy {
  inputValue = '';
  query: Todo[] = [];
  subscription: Subscription;

  constructor(private todoService: TodoService) {
  }

  get loadingState() {
    return LoadingState;
  }

  async addTodo(): Promise<void> {
    this.inputValue = this.inputValue.trim();
    if (!this.inputValue) { return; }

    const item = {
      id: uuid(),
      title: this.inputValue,
      done: false,
      state: LoadingState.pending,
    };

    this.query.push(item);

    this.todoService.addTodo(item);

    this.subscription = this.todoService.loading$.subscribe(res => {
      if (item.id === res.id) {
        item.state = res.success ? LoadingState.success : LoadingState.fail;
      }
    });

    this.inputValue = '';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
