import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-todo',
  templateUrl: './input-todo.component.html',
  styleUrls: ['./input-todo.component.css']
})
export class InputTodoComponent implements OnInit {

  @Output() onTodoAdd = new EventEmitter();
  taskVal: string;

  constructor() { }

  onAddBtnClick() {
    this.onTodoAdd.emit(this.taskVal);
    this.taskVal = undefined;
  }

  ngOnInit() {
  }

}
