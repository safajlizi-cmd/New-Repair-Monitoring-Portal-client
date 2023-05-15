import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { DialogContentBase, DialogRef } from '@progress/kendo-angular-dialog';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-add-sub-task',
  templateUrl: './add-sub-task.component.html',
  styleUrls: ['./add-sub-task.component.css']
})
export class AddSubTaskComponent extends DialogContentBase  implements OnInit {
 @Input() task:any;
  assignments :any[]=[]
  word:any[]=[]
  taskForm!:FormGroup
  option:any
  snackbarConfig: MatSnackBarConfig = {
    duration: 3000,
    panelClass: 'my-snackbar',
  };
  constructor(
    private _snackBar: MatSnackBar, 
    private api: GenericService,
    private fb: FormBuilder, 
    private location: Location,
    public override dialog: DialogRef) {
      super(dialog);
    }

  getAssignments() {
    this.api.getList("Assignment/List/" + this.task.dossierId).subscribe({
      next: (res) => {
        this.assignments = res;
        this.assignments.forEach((assignment: any) => {
          this.word.push(...assignment.workingOrdersC);
        });
        console.log("this.word");
        console.log(this.word);
      },
      error: (err) => {
        this._snackBar.open("Error get Assignments", '', this.snackbarConfig)
      },
    });
  }
    
  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      statusId: [''],
      option: ['dossier'],
      optionId: [''],
      optionName: [''],
      taskId: [''],
      deadline: [''],
      emergency: [false]
    });
  }
  onSelected(selected: any) {
    this.option = selected;
  }
  onSubmit() {
    this.dialog.close(this.taskForm)
  }
  close(): void {
    this.dialog.close();
  }
}
