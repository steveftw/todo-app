import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatInputModule
} from "@angular/material";
import { TodoDialog } from "./dialogs/todo-dialog";


@NgModule({
  declarations: [
    AppComponent,
    TodoDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule
  ],
  entryComponents: [
    AppComponent, TodoDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
