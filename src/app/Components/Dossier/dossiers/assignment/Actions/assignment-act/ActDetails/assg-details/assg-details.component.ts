import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '@progress/kendo-angular-notification';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-assg-details',
  templateUrl: './assg-details.component.html',
  styleUrls: ['./assg-details.component.css']
})
export class AssgDetailsComponent implements OnInit {
id :any;
  assignment:any
  causes :any
  bts:any
  opened =false
  getAssignment(){
    this.api.getById("Assignment/GetById",this.id).subscribe({
      next: (res) => {
        this.assignment =res.assignment;
      },
      error: (err) => {
      },
    });
  }
  getCauses() {
    this.api.getList("Cause").subscribe({
      next: (res) => {
        this.causes = res;
       
      },
      error: (err) => {   },
    });
  }
  getBuildingtypes() {
    this.api.getList("Building").subscribe({
      next: (res) => {
        this.bts = res;
       
      },
      error: (err) => {   },
    });
  }
  AssignForm!: FormGroup;
  constructor(private api :GenericService,private notificationService :NotificationService,private fb: FormBuilder,private route:ActivatedRoute,private _snackBar: MatSnackBar){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['Id'];
      this.getAssignment() 
      this.getBuildingtypes()
      this.getCauses()
    }); 
    this.AssignForm = this.fb.group({
  
      cause: ['', Validators.required],
      buildingType: ['', Validators.required],
      id: []
    });
  }
 
  onEdit() {
    this.AssignForm.controls['id'].setValue(this.assignment.id);
    this.AssignForm.controls['buildingType'].setValue(this.assignment.buildingType);
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
        this.notificationService.show({
          content: "Assignment updated successfully",
          animation: { 
            type:"slide",
            duration:500,
          },
          type: { style: "success" },
        });    
       

      },
      error: (err) => {
        this._snackBar.open('Error while updating Assignment','',{ 
          duration: 3000
      })
      },
    });
  }  

}
