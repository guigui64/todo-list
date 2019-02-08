import {Component, Input} from '@angular/core';
import {Todo} from '../../models/todo.model';
import {TodoStateEnum} from '../../enum/todo-state.enum';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
  @Input() todo: Todo;

  constructor() {
  }

  /**
   * Get footer CSS class for footer
   */
  getTodoFooterClass(todo) {
    if (todo.state === TodoStateEnum.toDo) {
      return ['footer-0'];
    } else if (todo.state === TodoStateEnum.inProgress) {
      return ['footer-50'];
    } else if (todo.state === TodoStateEnum.done) {
      return ['footer-100'];
    } else {
      return [];
    }
  }

  /**
   * Check if Todo has state DONE
   */
  todoIsDone(todo) {
    return todo.state === TodoStateEnum.done;
  }
}
