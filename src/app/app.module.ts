import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodoLogicComponent } from './todo-logic/todo-logic.component';
import {FormsModule} from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { InputTodoComponent } from './input-todo/input-todo.component';
import {ToggleTodoDirective} from './todo-logic/toggle-todo.directive';


@NgModule({
  declarations: [
    AppComponent,
    TodoLogicComponent,
    TodoListComponent,
    InputTodoComponent,
    ToggleTodoDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
