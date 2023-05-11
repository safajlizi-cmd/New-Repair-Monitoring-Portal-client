import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-assg-details',
  templateUrl: './assg-details.component.html',
  styleUrls: ['./assg-details.component.css']
})
export class AssgDetailsComponent implements OnInit {
id :any;
  assignment:any
  opened =false
  getAssignment(){
    this.api.getById("Assignment/GetById",this.id).subscribe({
      next: (res) => {
       console.log(res)
        this.assignment =res.assignment;
        console.log(this.assignment)
      },
      error: (err) => {
        alert("error")
      },
    });
  }
  AssignForm!: FormGroup;
  constructor(private api :GenericService,private fb: FormBuilder,private route:ActivatedRoute,private _snackBar: MatSnackBar){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['Id'];
      this.getAssignment() 
    }); 
    this.AssignForm = this.fb.group({
      assignmentNumber: ['', Validators.required],
      cause: ['', Validators.required],
      id: []
    });
  }
 
  onEdit() {
    this.AssignForm.controls['id'].setValue(this.assignment.id);
    this.AssignForm.controls['assignmentNumber'].setValue(this.assignment.assignmentNumber);
    this.AssignForm.controls['cause'].setValue(this.assignment.cause);
    this.opened = true;
  }
  public close(status: string): void {
    this.opened = false;}
  OnSubmit(){
    this.api.update("Assignment/Update",this.AssignForm.value).subscribe({
      next: (res) => {
        this.getAssignment();
        this.AssignForm.reset();  
        this.opened = false;
        this._snackBar.open('Assignment updated successfully','',{ 
          duration: 3000
      })

      },
      error: (err) => {
        this._snackBar.open('Error while updating Assignment','',{ 
          duration: 3000
      })
      },
    });
  }  

}
