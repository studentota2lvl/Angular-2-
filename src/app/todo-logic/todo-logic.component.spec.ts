import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLogicComponent } from './todo-logic.component';

describe('TodoLogicComponent', () => {
  let component: TodoLogicComponent;
  let fixture: ComponentFixture<TodoLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
