import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsPresenterComponent } from './components/errors-presenter/errors-presenter.component';
import { TodoItemPresenterComponent } from './components/todo-item-presenter/todo-item-presenter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WaitingServerComponent } from './components/waiting-server/waiting-server.component';


@NgModule({
  declarations: [
    ErrorsPresenterComponent,
    TodoItemPresenterComponent,
    WaitingServerComponent,
    WaitingServerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ErrorsPresenterComponent,
    TodoItemPresenterComponent,
    WaitingServerComponent,
  ]
})
export class SharedModule { }
