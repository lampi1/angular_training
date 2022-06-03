import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service'
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask = new EventEmitter()
  description: string;
  day: string;
  showAddTask: boolean = false;
  subscription: Subscription;
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value: any) => (this.showAddTask = value))
  }

  ngOnInit(): void {}
  onSubmit() {
    const newTask = {
      description: this.description,
      day: this.day
    }
    this.onAddTask.emit(newTask)
  }
  toggleFormTask() {
    this.uiService.toggleAddTask()
  }

}
