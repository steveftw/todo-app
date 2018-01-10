import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Todo } from "../model/todo";

@Component({
  selector: 'todo-dialog',
  templateUrl: 'todo-dialog.html',
  styleUrls: ['todo-dialog.css']
})
export class TodoDialog {

  todo: Todo = new Todo();

  constructor(public dialogRef: MatDialogRef<TodoDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  onSaveClick(): void {
    this.dialogRef.close(this.todo);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
