import { Component, OnInit,Input } from '@angular/core';

import {Task} from '../../models/Task'

import {TaskService} from '../../services/task.service'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task :Task
  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
  }
  /* show(t){
    console.log(t)
    const tFiltrado = this.taskService.tasks.filter(task =>task.title == t.title)
    .map(task =>task.hide = !task.hide)
    console.log(tFiltrado)
  } */
  deleteTask(task:Task){
    console.log("componente task:",task)
    this.taskService.deleteTask(task)
  }
}
