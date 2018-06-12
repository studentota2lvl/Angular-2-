import { Component, OnInit } from '@angular/core';
import {TodoService} from './todo.service';
import {Task} from '../models/task';


@Component({
  selector: 'app-todo-logic',
  templateUrl: './todo-logic.component.html',
  styleUrls: ['./todo-logic.component.css'],
  providers: [TodoService]
})
export class TodoLogicComponent implements OnInit {

  todoTasks: Task[];

  constructor(private todoService: TodoService) { }

  onTodoAdd(taskVal: string) {
    this.todoService.createNewTaskObj(taskVal);
    this.renderList();
  }

  deleteTaskClick(task) {
    this.todoService.deleteTask(task);
    this.renderList();
  }

  renderList() {
    this.todoTasks = this.todoService.getList();
  }

  todoNewStatusChange(id){
    this.todoService.updateTask(id);
    this.renderList();
  }

  ngOnInit() {
  }
}

