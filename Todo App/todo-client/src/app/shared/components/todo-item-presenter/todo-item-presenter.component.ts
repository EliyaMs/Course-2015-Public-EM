import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { wordsCountValidator } from 'src/app/core/validations/general-validators';

@Component({
  selector: 'app-todo-item-presenter',
  templateUrl: './todo-item-presenter.component.html',
  styleUrls: ['./todo-item-presenter.component.css']
})
export class TodoItemPresenterComponent implements OnInit {

  @Input() caption: string = ''
  
  @Input() isCompleted: boolean = false
  
  @Input() currentItemId: number = -1;

  @Output() completed = new EventEmitter<boolean>()

  @Output() itemToEdit = new EventEmitter<string>()

  @Output() itemToDelete = new EventEmitter<void>()

  captionControl!: FormControl;
  isEditMode: boolean = false;
  

  constructor(private formBilder: FormBuilder) { }

  ngOnInit(): void {  
    this.captionControl = this.formBilder.control(this.caption, [
      Validators.required, Validators.maxLength(25), 
      Validators.minLength(10), wordsCountValidator(3)
    ]);
  }

  async itemComplete(e: any) {
    this.isCompleted = e.target.checked;
    this.completed.emit(this.isCompleted)
  }

  DeleteIteme() {
    this.itemToDelete.emit()
  }
  
  EditMode() {
    this.isEditMode = !this.isEditMode;
  }

  Cancel() {
    this.isEditMode = !this.isEditMode;
    this.captionControl.reset(this.caption)
  }

  Save() {
    if (this.captionControl.valid){
      this.itemToEdit.emit(this.captionControl.value)
      this.Cancel();
    }
  }

}
