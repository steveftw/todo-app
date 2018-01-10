import { Component, OnInit } from '@angular/core';
import { TodoDialog } from "./dialogs/todo-dialog";
import { MatDialog } from "@angular/material";
import { Todo } from "./model/todo";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoDialogRef: MatDialog, private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Todo[]>("/todos").subscribe(result => {
      this.todos = result['_embedded']['todos'];
    });
  }

  onNewTodoClick(): void {
    let dialogRef = this.todoDialogRef.open(TodoDialog, {
      data: {
        title: 'Create new Todo'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        if (result.title) {
          console.log("saving new todo");
          this.saveNewTodo(result);
        }
      }
    });
  }

  getUncompletedTodos(): Todo[] {
    return this.todos.filter(todo => !todo.completed);
  }

  getCompletedTodos(): Todo[] {
    return this.todos.filter(todo => todo.completed);
  }

  todoCompleted(index: number, isComplete: boolean): void {
    let todo = this.todos[index];
    todo.completed = isComplete;
    this.updateTodo(todo);
  }

  saveNewTodo(todo: Todo) {
    this.http.post<Todo>("/todos", todo).subscribe(response => {
      console.log(response);
      this.todos.push(response)
    });
  }

  updateTodo(todo: Todo): void {
    let uri = `/todos/${todo.id}`;
    this.http.put(uri, todo).subscribe(result => {
      console.log(result);
    });
  }

  deleteTodo(index: number): void {
    let todo = this.todos[index];
    let uri = `/todos/${todo.id}`;
    this.http.delete(uri).subscribe(result => {
      this.todos.splice(index, 1);
    });
  }

}
