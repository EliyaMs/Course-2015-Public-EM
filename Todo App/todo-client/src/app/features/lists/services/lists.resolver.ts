import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { first } from 'rxjs/operators';
import { TodoList } from 'src/app/core/models/todoList.model';
import { DataService } from 'src/app/core/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ListsResolver implements Resolve<TodoList[]> {

  constructor(private data: DataService) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<TodoList[]> {
    var lists!: TodoList[]

    lists = await this.data.lists$.pipe(first()).toPromise().then();
    
    if (lists && lists.length === 0) {
      // console.log('load lists Resolver')
      return await this.data.loadLists()
    }
    if (!lists) {
      return this.data.loadLists()
    }
    // console.log('loaded lists Resolver')
    return lists;
  }
}
