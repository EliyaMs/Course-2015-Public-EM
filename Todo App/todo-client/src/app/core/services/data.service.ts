import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { TodoList } from 'src/app/core/models/todoList.model';
import { TodoItem } from 'src/app/core/models/todoItem.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // readonly baseUrl: string = 'http://localhost:3000';
  readonly baseUrl: string = environment.baseUrl;

  private listsSubject = new BehaviorSubject<TodoList[]>([]);
  private itemsSubject = new BehaviorSubject<TodoItem[]>([]);

  private isServerDown = new BehaviorSubject<boolean>(false);
  private isLoaded = new BehaviorSubject<boolean>(false);

  get isLoaded$(): Observable<boolean> {
    return this.isLoaded.asObservable()
  }
  get isServerDown$(): Observable<boolean> {
    return this.isServerDown.asObservable()
  }

  get lists$(): Observable<TodoList[]> {
    return this.listsSubject.asObservable()
  }

  get items$(): Observable<TodoItem[]> {
    return this.itemsSubject.asObservable()
  }

  constructor(private http: HttpClient) { }

  // -------------------------------- Lists --------------------------------

  async loadLists(): Promise<TodoList[]> {

    let lists = await this.http.get<TodoList[]>(`${this.baseUrl}/lists`)
      .pipe(
        tap(_ => {
          console.log('loadLists ')
          this.isServerDown.next(false)
          this.isLoaded.next(true)
        }),
        catchError((err, caught) => {
          // console.log('loadLists err ')
          this.isServerDown.next(true)
          this.isLoaded.next(false)
          return EMPTY;
        })
      )
      .toPromise()
    this.listsSubject.next(lists)
    return lists
  }

  getList(listId: number): Observable<TodoList> {
    const url = `${this.baseUrl}/lists/${listId}`
    return this.http.get<TodoList>(url)
  }

  async addList(list: TodoList): Promise<void> {
    const url = `${this.baseUrl}/lists`
    const body = JSON.stringify(list)

    await this.http.post<TodoList>(url, body).toPromise()
    await this.loadLists()
  }

  async UpdateList(list: TodoList): Promise<void> {
    const url = `${this.baseUrl}/lists/${list.id}`
    const body = JSON.stringify(list)

    await this.http.put<TodoList>(url, body).toPromise()
    await this.loadLists()
  }

  async deleteList(listId: number): Promise<void> {
    const itemsUrl = `${this.baseUrl}/items?listId=${listId}`
    const listsUrl = `${this.baseUrl}/lists/${listId}`

    if (this.baseUrl === 'http://localhost:3000') {
      await this.http.delete(itemsUrl)
    }
    await this.http.delete(listsUrl).toPromise()

    await this.loadLists()
    await this.loadItems()
  }

  // -------------------------------- Items --------------------------------

  async loadItems(): Promise<TodoItem[]> {
    let items = await this.http.get<TodoItem[]>(`${this.baseUrl}/items`)
      .pipe(
        tap(_ => {
          console.log('loadItems ')
          this.isServerDown.next(false)
          this.isLoaded.next(true)
        }),
        catchError((err, caught) => {
          // console.log('loadItems err ')
          this.isServerDown.next(true)
          this.isLoaded.next(false)
          return EMPTY;
        })
      )
      .toPromise()
    this.itemsSubject.next(items)
    return items
  }

  getItems(id: number): Observable<TodoItem[]> {
    return this.items$.pipe(
      map(items => items.filter(item => item.listId === id)))
  }

  getActiveItems(): Observable<TodoItem[]> {
    return this.items$.pipe(
      map(items => items.filter(item => !item.isCompleted)))
  }

  getActive(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(`${this.baseUrl}/items?isCompleted=false`)
  }

  async addItem(item: TodoItem): Promise<void> {
    const url = `${this.baseUrl}/items`
    const body = JSON.stringify(item)

    await this.http.post<TodoItem>(url, body).toPromise()
    this.loadItems()
  }

  async UpdateItem(item: TodoItem): Promise<void> {
    const url = `${this.baseUrl}/items/${item.id}`
    const body = JSON.stringify(item)

    await this.http.put<TodoItem>(url, body).toPromise()
    this.loadItems()
  }

  async deleteItem(itemId: number): Promise<void> {
    const itemsUrl = `${this.baseUrl}/items/${itemId}`
    await this.http.delete(itemsUrl).toPromise()
    await this.loadItems()
  }

  // private async deleteItems(listId: number): Promise<void> {
  //   const itemsUrl = `${this.baseUrl}/items?listId=${listId}`
  //   await this.http.delete(itemsUrl)
  //   await this.loadItems()
  // }

  // async getItemsLength(): Promise<number>{
  //   const url = `${this.baseUrl}/items`
  //   return this.http.get<TodoItem[]>(url)
  //   .pipe(map(items => items.length))
  //   .toPromise()                    
  // }

  // async getListsLength(): Promise<number>{
  //   const url = `${this.baseUrl}/lists`
  //   return this.http.get<TodoList[]>(url)
  //   .pipe(map(lists => lists.length))
  //   .toPromise()          
  // }

}
