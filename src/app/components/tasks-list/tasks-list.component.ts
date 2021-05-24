import { Component, OnInit } from '@angular/core';

import {TaskService} from '../../services/task.service'
import {Task} from '../../models/Task'

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks : Task[]
  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks()
  }

}
