import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';

import { AddNewTodoComponent } from './add-new-todo.component';

const routes = [
  {path: '', component: AddNewTodoComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule
  ],
  declarations: [AddNewTodoComponent],
})
export class AddNewTodoModule {}
