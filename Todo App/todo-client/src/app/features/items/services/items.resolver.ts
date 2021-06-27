import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { first } from 'rxjs/operators';
import { TodoItem } from 'src/app/core/models/todoItem.model';
import { DataService } from 'src/app/core/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsResolver implements Resolve<TodoItem[]> {

  firstTime: boolean = true;

  constructor(private data: DataService) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<TodoItem[]> {
    var items!: TodoItem[]

    // if (this.firstTime) {
    //   this.firstTime = false;
    //   return await this.data.loadItems() 
    // }

    items = await this.data.items$.pipe(first()).toPromise().then();

    if (items && items.length === 0) {
      // console.log('load items Resolver')
      return await this.data.loadItems();
    }
    if (!items) {
      return this.data.loadItems()
    }
    // console.log('loaded items Resolver')
    return items;
  }
}
