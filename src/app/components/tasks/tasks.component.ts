import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from '../../service/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  tasks: Task [] = [] ;

  constructor(
    private taskService: TaskService
  ) { }
  
  ngOnInit(): void {
   //like promise 
    this.taskService.getTask().subscribe((tasks)=>(
      this.tasks = tasks
    ) ) ;
   
  }
  
}