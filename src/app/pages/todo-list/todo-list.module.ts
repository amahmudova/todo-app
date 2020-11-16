import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const routes = [
  {path: '', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatCheckboxModule, CommonModule, MatButtonModule, MatIconModule],
  declarations: [TodoListComponent],
})
export class TodoListModule {}
