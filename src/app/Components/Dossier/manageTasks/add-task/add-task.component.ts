import { Component , Input, OnInit } from '@angular/core';
import { DialogService } from '@progress/kendo-angular-dialog';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent  {



  constructor(private dialogService: DialogService) {}

 
}