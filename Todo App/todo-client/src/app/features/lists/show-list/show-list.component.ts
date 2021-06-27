import { wordsCountValidator } from 'src/app/core/validations/general-validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TodoItem } from 'src/app/core/models/todoItem.model';
import { TodoList } from 'src/app/core/models/todoList.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  id$!: Observable<number>;
  list$!: Observable<TodoList>;
  items$!: Observable<TodoItem[]>;

  captionControl!: FormControl;

  showAskDelete: boolean = false;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.id$ = this.route.params.pipe(
      map(prms => {
        let id = +prms['id']
        if (id <= 0 || isNaN(id))
          this.router.navigate(['404']);
        return id
      })
    )

    this.list$ = this.id$.pipe(
      map(id => this.data.getList(id).pipe(
        catchError((err, caught) => {
          if(err.status === 404) this.router.navigate(['404'])
          return EMPTY;
        }))
      ),
      switchMap(list => list)
    )

    this.items$ = this.id$.pipe(
      map(id => this.data.getItems(id)),
      switchMap(items => items)
    )

    this.captionControl = this.formBuilder.control("", [
      Validators.minLength(10), Validators.maxLength(25), wordsCountValidator(3)]);

  }

  newList() {
    this.router.navigate(['lists', -1, 'edit'])
  }

  editList(id: number) {
    this.router.navigate(['lists', id, 'edit'])
  }

  async delete(id: number) {
    this.showAskDelete = true;
  }
  async deleteList(id: number) {
    await this.data.deleteList(id)
    this.router.navigate(['home'])
  }

  cancel() {
    this.showAskDelete = false;
  }

  async addItem(id: number) {
    let item: TodoItem = {
      "id": 0,
      "caption": this.captionControl.value,
      "listId": id,
      "isCompleted": false
    }

    await this.data.addItem(item)

    this.items$ = this.id$.pipe(
      map(id => this.data.getItems(id)),
      switchMap(items => {
        return items
      })
    )
    this.captionControl.reset()
  }

  async itemComplete(item: TodoItem, eventItemCompleted: boolean) {
    item.isCompleted = eventItemCompleted;
    await this.data.UpdateItem(item)
  }

  async itemToEdit(item: TodoItem, eventCaption: string) {
    item.caption = eventCaption;
    await this.data.UpdateItem(item)
  }

  async itemToDelete(item: TodoItem) {
    await this.data.deleteItem(item.id)

  }

}
