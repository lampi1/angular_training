import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showFormAdd: boolean = false
  private subject = new Subject()
  constructor() { }
  toggleAddTask() {
    this.showFormAdd = !this.showFormAdd
    this.subject.next(this.showFormAdd)
  }
  onToggle() {
    return this.subject.asObservable()
  }
}
