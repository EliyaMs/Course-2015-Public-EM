import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class NoListsGuard implements CanActivate {

  constructor(
    private data: DataService,
    private router: Router,
  ) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<true | UrlTree> {

    let isListsNotEmpty: Boolean = false

    await this.data.loadLists().
      then(lists => isListsNotEmpty = !!lists.length)

    if (isListsNotEmpty) {
      return true;
    }
    else {
      return this.router.createUrlTree(['lists', -1, 'edit'])
    }
  }

}
