// Angular Imports
import { Component, OnInit, Renderer2, OnDestroy, Injector } from '@angular/core';
import { MatSpinner } from '@angular/material';
import { HttpResponse } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

// Own Imports
import { TaskService } from './task.service';
import { patternValidator } from '../_shared/pattern.validator';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  taskForm: FormGroup;
  isEdit: boolean = false;
  constructor(
    private fb: FormBuilder,
    private injector: Injector,
    private taskService: TaskService,
    private router: Router) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.compose([Validators.required])],
      from: ['', Validators.required],
      to: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (this.router) {

      let checkEdit = this.router.url.split('/')[1]

      if (checkEdit === 'edit') {
        this.isEdit = true;
        const params = {
          'task': this.router.url.split('/')[3]
        }
        this.taskService.taskList(params).subscribe(result => {
          let taskData = result['body']['data']['data'][0]
          this.taskForm.get("name").setValue(taskData.task_name);
          this.taskForm.get("description").setValue(taskData.task_description);
          this.taskForm.get("from").setValue(taskData.from);
          this.taskForm.get("to").setValue(taskData.to);
        });
      }
    }
  }

  saveProduct(values) {

    const params = {
      'task_name': values.name,
      'task_description': values.description,
      'from': values.from,
      'to': values.to
      
    }

    let checkEdit = this.router.url.split('/')[2]
    let servicepath = '';
    if (checkEdit === 'edit') {
      params['task'] = this.router.url.split('/')[3];
      this.taskService.taskEdit(params).subscribe(result => {
        if (result['body']['data']['status'] === 200) {
          const toaster = this.injector.get(ToastrService);
          toaster.success('Task  updated', 'Success', {
            timeOut: 3000
          });

          this.router.navigate(['task/list'])
        } else {
          const toaster = this.injector.get(ToastrService);
          toaster.error('Task not updated', 'Error', {
            timeOut: 3000
          });

        }
      }, (err) => {
        const toaster = this.injector.get(ToastrService);
        toaster.error('Task not updated', 'Error', {
          timeOut: 3000
        });
      });
    } else {
      this.taskService.taskAdd(params).subscribe(result => {
        if (result['body']['data']['status'] === 200) {
          const toaster = this.injector.get(ToastrService);
          toaster.success('Task Added', 'Success', {
            timeOut: 3000
          });


          this.router.navigate([''])
        } else {
          const toaster = this.injector.get(ToastrService);
          toaster.error('Task not updated', 'Error', {
            timeOut: 3000
          });
        }
      });
    }

  }




}



function makename(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

