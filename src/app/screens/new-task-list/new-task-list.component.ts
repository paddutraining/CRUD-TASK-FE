import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { tasklistmodel } from 'src/app/models/taskListModel';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.scss']
})
export class NewTaskListComponent implements OnInit {
  tasklistId!: any;
isthisTaskNavigation!:boolean;
  constructor(private taskService:TaskService,private router:Router,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param:Params)=>{
      console.log(param)
      this.tasklistId=param['tasklistId']
    })
      var rout:any=this.activeRoute.snapshot.routeConfig
    this.isthisTaskNavigation= rout.path.includes('tasksList')
  }
  addnewtasklist(tasklist:any){
   if (this.isthisTaskNavigation==true){
    let ob={"title":tasklist.value,"_tasklistid":this.tasklistId}
    this.taskService.addNewTaskInATaskList(ob).subscribe(
      (res:any)=>{
        console.log(res)
    this.router.navigate(['tasklists',res._tasklistid])
    }
      )
   }else{
    let ob={"title":tasklist.value}
    this.taskService.addnewtasklist(ob).subscribe(
      (res:any)=>{
   this.router.navigate(['tasklists',res._id])
    }
      )

   }
 
  }
}
