import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditListComponent } from './edit-list/edit-list.component';
import { ListsComponent } from './lists/lists.component';
import { ShowListComponent } from './show-list/show-list.component';
import { NoListsGuard } from 'src/app/core/gards/no-lists.guard';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';
import { UnsavedChangesGuard } from 'src/app/core/gards/unsaved-changes-list.guard';
import { ListsResolver } from './services/lists.resolver';
import { ItemsResolver } from '../items/services/items.resolver';
import { UnsavedItemsGuard } from 'src/app/core/gards/unsaved-Items.guard';


const routes: Routes = [
    {
        path: '', pathMatch: 'full',
        component: ListsComponent,
        canActivate: [NoListsGuard],
        resolve: [ListsResolver, ItemsResolver]
    },
    {
        path: ':id', component: ShowListComponent,
        resolve: [ListsResolver, ItemsResolver],
        canDeactivate: [UnsavedItemsGuard],
    },
    {
        path: ':id/edit',
        component: EditListComponent,
        canDeactivate: [UnsavedChangesGuard],
        resolve: [ListsResolver]
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ListsRoutingModule { }