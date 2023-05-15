import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { SelectableMode, SelectableSettings, SelectionEvent } from '@progress/kendo-angular-grid';
import { GenericService } from 'src/app/services/generic.service';
import { TaskService } from 'src/app/services/task.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-unassigned-tasks',
  templateUrl: './unassigned-tasks.component.html',
  styleUrls: ['./unassigned-tasks.component.css','./../../../../assets/sharedCss/SharedStyle.scss']
})
export class UnassignedTasksComponent implements OnInit {
  // dialog space
  public opened = false
  data: any
  usersL: any
  id: any = ''
  AssigForm!: FormGroup;
  slectedUser: any
  public handleFilterChange(searchTerm: string): void {
    const normalizedQuery = searchTerm.toLowerCase();

    // search in all three fields diplayed in the popup table
    const filterExpression = (user: any) =>
      user.firstName.toLowerCase().includes(normalizedQuery) ||
      user.lastName.toLowerCase().includes(normalizedQuery) ||
      user.userName.toLowerCase().includes(normalizedQuery) ||
      user.email.toLowerCase().includes(normalizedQuery);
    ;

    this.data = this.usersL.filter(filterExpression);
  }
  getUsers() {
    this.api.getById("User/List" , this.id).subscribe({
      next: (res) => {
        this.usersL = res;
        this.data = res;
        console.log(res);
      },
      error: (err) => {
      },
    });
  }
  onSelectedUser(selectedUser: any) {
    this.slectedUser = selectedUser
    console.log(this.slectedUser)
  }
  public selectedTask: any;
  public onSelectionChange(event: SelectionEvent): void {
    this.selectedTask = event.selectedRows![0].dataItem;
  }
  public checkboxOnly = false
  public drag = false;
  public selectableSettings: SelectableSettings = {
    checkboxOnly: this.checkboxOnly,
    mode: "single",
    drag: this.drag,
  };;
  tasks: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
   snackbarConfig: MatSnackBarConfig = {
    duration: 3000,
    panelClass: 'my-snackbar',
    };
  constructor(private _snackBar: MatSnackBar,private api: GenericService, private fb: FormBuilder, private auth: UserStoreService, private task: TaskService) {
  }
  getTasks() {
    this.api.getList("Task/NotAssign").subscribe({
      next: (res) => {
        this.tasks = res;
        console.log(res);
      },
      error: (err) => {
      },
    });
  }
  public confirmSelection(): void {
    if (this.selectedTask != null) {
      this.opened = true
    }
  }
  onButtonClick() { }
  ngOnInit(): void {
    this.id = this.auth.getId()
    this.AssigForm = this.fb.group({
      id: [this.id],
      Assigned: [false],
    });
    this.getTasks()
    this.getUsers()

  }
  public close(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }
  addAssign() {
    var message= "to you";
    if (this.AssigForm.controls['Assigned'].value == false) { 
      this.AssigForm.controls['id'].setValue(this.slectedUser!.id);
      message = this.slectedUser!.userName;
     }
    else { this.AssigForm.controls['id'].setValue(this.id); }
    this.task.UpdateTaskAssign(this.selectedTask!.id, this.AssigForm.controls['id'].value).subscribe({
      next: (res) => {
        this.AssigForm.reset
        this.getTasks()
        this.opened = false
        this._snackBar.open("Task assigned to "+message + " successfully" ,'', this.snackbarConfig)
      },
      error: (err) => {
        this.AssigForm.reset
        this.getTasks()
        this.opened = false
        this._snackBar.open("Task assigned to "+message + " successfully",'', this.snackbarConfig)
      },
    });
  }
}