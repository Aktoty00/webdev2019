import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';
import { TaskList, Task } from '../models/models';

@Injectable({
  providedIn: 'root'
})

export class ProviderService extends MainService{

  constructor(http: HttpClient) {
    super(http);
 }
 getTaskLists(): Promise<TaskList[]>{

   return this.get('http://127.0.0.1:8000/api/task_lists/', {});
 }
 getTasks(id: number): Promise<Task[]>{
  return this.get(`http://127.0.0.1:8000/api/task_lists/${id}/tasks/`, {});
}
}
