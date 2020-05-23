import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { CommonsModule} from '../common/common.module';
import {TaskService} from './task.service';
import { TaskListComponent } from './task-list/task-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {  MatDatepickerModule, MatNativeDateModule } from '@angular/material';
@NgModule({
  declarations: [TaskComponent, TaskListComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    TaskRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers : [TaskService]
})
export class TaskModule { }
