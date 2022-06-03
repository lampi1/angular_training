import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(this.apiUrl)
  }
  deleteTask(task: any) {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete(url)
  }
  addTask(task: any) {
    return this.http.post(this.apiUrl, task)
  }
}
