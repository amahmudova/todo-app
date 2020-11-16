import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'todo-list', loadChildren: () => import('./pages/todo-list/todo-list.module').then(m => m.TodoListModule)},
  {path: 'add-new', loadChildren: () => import('./pages/add-new-todo/add-new-todo.module').then(m => m.AddNewTodoModule)},

  {path: '**', pathMatch: 'full', redirectTo: 'todo-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
