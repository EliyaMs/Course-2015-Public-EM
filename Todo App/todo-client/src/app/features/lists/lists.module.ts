import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditListComponent } from './edit-list/edit-list.component';
import { ShowListComponent } from './show-list/show-list.component';
import { ListsComponent } from './lists/lists.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListsRoutingModule } from './lists-routing.module';


@NgModule({
  declarations: [
    EditListComponent,
    ShowListComponent,
    ListsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ListsRoutingModule,
    
  ],
  exports: [
    EditListComponent,
    ShowListComponent,
    ListsComponent,
  ]
})
export class ListsModule { }
