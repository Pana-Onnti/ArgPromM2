import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-task';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({

  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = TASKS[0]
  @Output() onDeleteTask: EventEmitter<Task>= new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task>= new EventEmitter()

  
  faTimes = faTimes ;
  constructor() { }

  onDelete(task:Task){
   this.onDeleteTask.emit(task);
  }

  ngOnInit(): void {
  }

  onToggle (task:Task){
    this.onToggleReminder.emit(task);
    
  }
}
