import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { ShowListComponent } from 'src/app/features/lists/show-list/show-list.component';

@Injectable({
    providedIn: 'root'
})
export class UnsavedItemsGuard implements CanDeactivate<ShowListComponent> {

    canDeactivate(
        component: ShowListComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): boolean {

        if (!component.isEditMode) { 
            return true;
        }

        var confirmationMessage =
            'It looks like you have been editing something.\n'
            + 'If you leave before saving, your changes will be lost.'

        if (window.confirm(confirmationMessage)) {
            return true
        }

        return false;
    }

}
