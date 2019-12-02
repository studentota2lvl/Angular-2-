import { Injectable } from '@angular/core';
import {Task} from '../models/task';

@Injectable()
export class TodoService {

  todoTasks: Map<any, Task> = new Map();
  currentTask: Task;
  taskStatus = ['todo', 'done'];

  constructor() { }

  addTask(task: Task) {
    this.todoTasks.set(task.id, task);
  }

  deleteTask(task) {
    this.todoTasks.delete(task.id);
  }

  updateTask(id: string) {
    this.changeTaskStatus(this.findTaskFromId(id));
  }

  findTaskFromId(id: string): Task {
    return this.todoTasks.get(Number(id));
  }

  eraseCurrentTask() {
    this.currentTask = undefined;
  }

  getList(): Task[] {
    return Array.from(this.todoTasks.values());
  }

  createNewTaskObj(taskVal): void {
    this.currentTask = new Task;
    this.currentTask.status = this.taskStatus[0];
    this.currentTask.data = taskVal;
    this.currentTask.id = Date.now();
    this.addTask(this.currentTask);
    this.eraseCurrentTask();
  }

  changeTaskStatus(task) {
    if (task.status === this.taskStatus[0]) {
      task.status = this.taskStatus[1];
    } else {task.status = this.taskStatus[0]}
    this.addTask(task);
  }

  // editTaskData(id: string, newTaskData: string) {
  //   this.changeTaskData(this.findTaskFromId(id), newTaskData);
  // }
  //
  // changeTaskData(task, newTaskData) {
  //   if (task.data === newTaskData) {
  //     return;
  //   } else {task.data = newTaskData}
  //   this.addTask(task);
  // }
}
