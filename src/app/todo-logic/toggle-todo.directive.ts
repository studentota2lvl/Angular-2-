import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appToggleTodo]'
})
export class ToggleTodoDirective {

  @Output() toggleTask = new EventEmitter();
  @HostListener('click') onClick() {
    this.toggleFn();
  }

  constructor(private el: ElementRef) { };

  toggleFn() {
    this.toggleTask.emit(this.el.nativeElement.querySelector('.id').textContent);
  }
}
