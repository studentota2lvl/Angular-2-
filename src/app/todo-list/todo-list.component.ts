import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../models/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todoTasks: Task[];
  @Output() deleteTaskClick = new EventEmitter();
  @Output() transferNewTodoStatus = new EventEmitter();

  constructor() { }

  onDelBtnClick(task) {
    this.deleteTaskClick.emit(task);
  }

  toggleTaskChangeStatusTransfer(id) {
    this.transferNewTodoStatus.emit(id);
  }

  ngOnInit() {
  }
}
