import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskComponent } from './task.component';
import { TaskListComponent } from './task-list/task-list.component';
const routes: Routes = [{ path: 'add', component: TaskComponent },
{ path: '', component: TaskListComponent  },
{ path: 'edit/:id', component: TaskComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
