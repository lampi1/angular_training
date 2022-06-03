import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../services/task.service'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:any = [];
  constructor(private taskService: TaskService) {

  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data
    })
  }
  deleteTask(task: any) {
    console.log(task)
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t:any) => t.id !== task.id)
    })
  }
  addTask(task: any) {
    this.taskService.addTask(task).subscribe((res) => { this.tasks.push(res) })
  }
}
