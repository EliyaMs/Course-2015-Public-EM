import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { EditListComponent } from 'src/app/features/lists/edit-list/edit-list.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<EditListComponent> {

  // constructor(private router: Router) { }

  canDeactivate(
    component: EditListComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean 
    {
    if (!component.listForm) { //if server id down
      return true;
    }

    if (nextState?.url === '/404') {
      return true;
    }
    
    let currentListForm: string = JSON.stringify(component.listForm.value)
    
    if (!component.isSaveButtonPressed) {
      if (component.FirstListForm === currentListForm) {
        return true
      } else {
        var confirmationMessage =
        'It looks like you have been editing something.\n'
        + 'If you leave before saving, your changes will be lost.'
        if (window.confirm(confirmationMessage)) {
          return true
        }
        else {
          return false
        }
      }
    }
    
    return true;
  }

}
