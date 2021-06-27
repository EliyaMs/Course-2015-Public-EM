import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ItemsResolver } from './features/items/services/items.resolver';
import { ListsResolver } from './features/lists/services/lists.resolver';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    resolve: [ListsResolver, ItemsResolver]
  },
  {
    path: 'lists', loadChildren: () =>
      import('./features/lists/lists.module').then(i => i.ListsModule)
  },
  {
    path: 'items', loadChildren: () =>
      import('./features/items/items.module').then(l => l.ItemsModule)
  },
  {
    path: '404', component: NotFoundComponent,
    resolve: [ListsResolver, ItemsResolver]
  },
  {
    path: '**', redirectTo: '/404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
