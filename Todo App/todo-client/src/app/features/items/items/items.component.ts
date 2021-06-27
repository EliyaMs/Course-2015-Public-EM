import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';
import { TodoItem } from 'src/app/core/models/todoItem.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  searchChangedSubject = new BehaviorSubject<string>('');
  items$!: Observable<TodoItem[]>;

  isLoaded$!: Observable<boolean>;

  activeItemsServer$!: Observable<TodoItem[]>

  num: number = 1;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    
    this.isLoaded$ = this.data.isLoaded$

    this.num = Math.floor(Math.random() * 3) + 1
    this.activeItemsServer$ = this.data.getActiveItems();

    this.items$ = combineLatest([
      this.searchChangedSubject.pipe(debounceTime(500)),
      this.data.getActiveItems()
    ]).pipe(
      tap(a => this.num = this.num % 3 + 1),
      map(([searchWord, currentList]) =>
        currentList.filter(items => items.caption.includes(searchWord))
      ))
  }


  onSearchChanged(str: string) {
    this.searchChangedSubject.next(str);
  }

  async itemComplete(item: TodoItem, eventItemCompleted: any) {
    item.isCompleted = eventItemCompleted;
    await this.data.UpdateItem(item)
    // this.items$ = this.data.getActiveItems();
  }

  async itemToEdit(item: TodoItem, eventCaption: string) {
    item.caption = eventCaption;
    await this.data.UpdateItem(item)
  }

  async itemToDelete(item: TodoItem) {
    await this.data.deleteItem(item.id)

  }

}
