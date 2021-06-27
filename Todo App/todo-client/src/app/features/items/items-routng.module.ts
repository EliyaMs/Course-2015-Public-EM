import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemsComponent } from './items/items.component';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';
import { ItemsResolver } from './services/items.resolver';


const routes: Routes = [
    {
        path: '', pathMatch: 'full', component: ItemsComponent,
        resolve: [ItemsResolver]
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItemsRoutingModule { }