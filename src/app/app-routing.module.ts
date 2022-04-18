import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTaskListComponent } from './screens/new-task-list/new-task-list.component';
import { TaskScreenComponent } from './screens/task-screen/task-screen.component';

const routes: Routes = [
  {path:'', component:TaskScreenComponent},
  {path:'tasklists/:tasklistId', component:TaskScreenComponent},
  // {path:'tasklists/:tasklistId/tasks', component:TaskScreenComponent},
  {path:'tasklists/:tasklistId/new-tasks', component:NewTaskListComponent},
  {path:'tasklists/:tasklistId/tasksList', component:NewTaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
