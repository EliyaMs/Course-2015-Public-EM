import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemsRoutingModule } from './items-routng.module';


@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ItemsRoutingModule
  ],
  exports: [
    ItemsComponent
  ]
})
export class ItemsModule { }
