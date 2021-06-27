import { GeneralInterceptor } from './core/services/general.interceptor.service';
import { ItemsModule } from './features/items/items.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ListsModule } from './features/lists/lists.module';
import { LengthComponent } from './components/length/length.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    NotFoundComponent,
    LengthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    SharedModule,
    ListsModule,
    ItemsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GeneralInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
