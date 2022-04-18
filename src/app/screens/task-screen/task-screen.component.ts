import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { taskmodel } from 'src/app/models/task';
import { tasklistmodel } from 'src/app/models/taskListModel';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-screen',
  templateUrl: './task-screen.component.html',
  styleUrls: ['./task-screen.component.scss']
})
export class TaskScreenComponent implements OnInit {
  taskLists:tasklistmodel[]=[]
  task:taskmodel[]=[]
  tasklistid:string='';
  constructor(private taskService:TaskService, private route:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.taskService.getAllTaskList().subscribe(
      (tasklist:tasklistmodel[])=>{this.taskLists=tasklist
// this.route.navigate([`tasklists/${this.taskLists[0]._id}/tasks`])
      }
    )
    // http://localhost:3000/tasklists/625b92f1f8a64ac910d051cb/tasks
this.activeRoute.params.subscribe((param:any)=>
{
  this.tasklistid=param.tasklistId;
  if (this.tasklistid){
    this.taskService.gettasksfromaTasklistid(this.tasklistid).subscribe(
       (gettask:taskmodel[])=>this.task=gettask
    )
  }
})
  }
taskClicked(task:taskmodel){
 
  this.taskService.patchStatusOfTask(task._id,task._id,task).subscribe(
  (res)=>{
    task.complete=!task.complete;
}
  )
}
deleteataskinatasklist(itm:taskmodel){
  this.taskService.deleteataskfromatasklist(itm._tasklistid,itm._id).subscribe(
    (res)=>{
     this.task= this.task.filter(tl=>tl._id!=itm._id);
  }
    )
}
deleteatasklist(itm:tasklistmodel){
  this.taskService.deleteAtask(itm._id).subscribe(
    (res)=>{
     this.taskLists= this.taskLists.filter(tl=>tl._id!=itm._id);
  }
    )
}
navigatenewtasklist(){
  this.route.navigate(['new-tasks'],{relativeTo:this.activeRoute})
}
navigatenewtasklists(){
  this.route.navigate(['tasksList'],{relativeTo:this.activeRoute})
}
}
