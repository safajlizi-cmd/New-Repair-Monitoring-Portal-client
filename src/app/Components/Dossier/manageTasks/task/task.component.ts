import { Component, OnInit } from '@angular/core';
import { TabAlignment } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public alignment: TabAlignment = "start";
 ngOnInit(){
  
 }
}
