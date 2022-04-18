import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiconfService } from './apiconf.service';
import { tasklistmodel } from './models/taskListModel';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private apicon:ApiconfService) { }
  getAllTaskList(){
        return this.apicon.get('tasklists');
  }
  gettasksfromaTasklistid(tasklistid:string){
    return this.apicon.get(`tasklists/${tasklistid}/tasks`)
  }
  patchStatusOfTask(tasklistid:string,taskid:string,data:object){
    // http://localhost:3000/tasklists/625b92f1f8a64ac910d051cb/tasks/625bac44dbcc5963312d3605
    return this.apicon.patch(`tasklists/${tasklistid}/tasks/${taskid}`, data)
  }
  deleteataskfromatasklist(tasklistid:string,taskid:string){
    return this.apicon.delete(`tasklists/${tasklistid}/tasks/${taskid}`)
  }
  deleteAtask(tasklistid:string){
    return this.apicon.delete(`tasklists/${tasklistid}`)
  }
  addnewtasklist(tasklistitem:any){
    return this.apicon.post(`tasklists/`, tasklistitem)
  }
  addNewTaskInATaskList(task:any){
    console.log(task)
    return this.apicon.post(`tasklists/${task._tasklistid}/tasks`, task)
  }
  // createTasklist(title:string){
  //   let data={'title':title}
  //   return this.apicon.post('tasklists',data)
  //     }

  //     getAllTasksForTaskListid(tasklistId:string){
  //       return this.apicon.get(`tasklists/${tasklistId}/tasks`)
  //     }
         
  //         createTaskinTaskListid(tasklistId:string,taskname:string){
  //           let data={
  //             "title": taskname
  //         }
  //           return this.apicon.post(`tasklists/${tasklistId}/tasks`,data)
  //         }
}
