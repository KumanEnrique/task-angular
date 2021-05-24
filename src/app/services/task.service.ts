import { Injectable } from '@angular/core';
import {Task} from '../models/Task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks : Task[]
  constructor() {
    this.tasks = [
      // {hide: true,title:"escribir",description:"tengo que escribir"},
      // {hide: true,title:"leer",description:"tengo que leer"},
      // {hide: true,title:"correr",description:"tengo que correr"}
    ]
    console.log("en el constructor de taskservice",this.tasks)
  }
  getTasks(){
    if(localStorage.getItem("tasks") === null){
      return this.tasks
    }else{
      this.tasks = JSON.parse(localStorage.getItem("tasks"))
      return this.tasks
    }
  }
  addTask(task:Task){
    this.tasks.push(task)
    let tasks: Task[] = []
    if(localStorage.getItem("tasks") === null){
      tasks.push(task)
      localStorage.setItem("tasks",JSON.stringify(tasks))
      console.log(1)
    }else{
      tasks = JSON.parse(localStorage.getItem("tasks"))
      tasks.push(task)
      localStorage.setItem("tasks",JSON.stringify(tasks))
      console.log(2)
    }

  }
  deleteTask(task:Task){
    for(let i = 0;i < this.tasks.length;i++){
      if(task == this.tasks[i]){
        this.tasks.splice(i,1)
        localStorage.setItem("tasks",JSON.stringify(this.tasks))
      }
    }
    // console.log("taskservice",this.tasks)

    /* const deleted = this.tasks.filter(tarea => tarea.title !== task.title)
    console.log("taskservice",deleted)
    this.tasks = deleted
    console.log("taskservice",this.tasks) */
  }
}
