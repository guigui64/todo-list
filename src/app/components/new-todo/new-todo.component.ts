import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  newTodo: any;

  constructor() {}

  ngOnInit() {
    this.newTodo = {
      description: '',
      title: ''
    };
  }
}
