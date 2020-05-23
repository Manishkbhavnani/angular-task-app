import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  title = 'app works!';
  taskListData : any = []

  //sorting
  key: string = 'task_name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;


  constructor( private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskList();
  }

  taskList(){
  this.taskService.taskList().subscribe(result => {
      this.taskListData = result['body']['data']['data']
  });
} 

public deleteTask(id) {
  this.taskService.taskDelete({'Task' : id }).subscribe((result) => {
    console.log(result['body']['data'])
    if(result['body']['data']['success'] === true ) {
        this.taskList();
    }

  });

  

}




}
