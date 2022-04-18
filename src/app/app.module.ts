import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskScreenComponent } from './screens/task-screen/task-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { NewTaskListComponent } from './screens/new-task-list/new-task-list.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskScreenComponent,
    NewTaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
