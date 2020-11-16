import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { TodoListComponent } from './todo-list.component';

const routes = [
  {path: '', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatCheckboxModule, CommonModule, MatButtonModule, MatIconModule],
  declarations: [TodoListComponent],
})
export class TodoListModule {}
