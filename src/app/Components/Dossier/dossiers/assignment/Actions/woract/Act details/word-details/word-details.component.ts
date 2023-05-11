import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-word-details',
  templateUrl: './word-details.component.html',
  styleUrls: ['./word-details.component.css']
})
export class WordDetailsComponent implements OnInit{
  id :any;
  workingOrder:any
  Materials: any
  Locations: any
  damageTypes: any
  opened =false

  WOForm!: FormGroup;
  constructor(private api :GenericService,private fb: FormBuilder,private route:ActivatedRoute,private _snackBar: MatSnackBar ){}
  getLocations() {
    this.api.getList("Location/List").subscribe({
      next: (res) => {
        this.Locations = res;
        console.log(res);
      },
      error: (err) => {
      },
    });
  }
  getMaterials() {
    this.api.getList("Material/List").subscribe({
      next: (res) => {
        this.Materials = res;
        console.log(res);
      },
      error: (err) => {
      },
    });
  }
  getDamageTypes() {
    this.api.getList("DamageType/List").subscribe({
      next: (res) => {
        this.damageTypes = res;
        console.log(res);
      },
      error: (err) => {
      },
    });
  } 
   getWORD(){
    this.api.getById("WorkingOrder/GetById",this.id).subscribe({
      next: (res) => {
       console.log(res)
        this.workingOrder =res.assignment;
        console.log(this.workingOrder)
        this._snackBar.open('Work order updated successfully','',{ 
          duration: 3000
      })

      },
      error: (err) => {
        this._snackBar.open('Error while updating Work order','',{ 
          duration: 3000
      })
      },
    });
  }

  ngOnInit() {
    this.WOForm = this.fb.group({
      woNumber: ['', Validators.required],
      locationId: ['', Validators.required],
      materialId: ['', Validators.required],
      damageTypeId: ['', Validators.required],
      id: ['']
    });
    this.route.params.subscribe(params => {
      this.id = params['Id'];
      this.getWORD() 
    }); 
    this.getDamageTypes();
    this.getLocations();
    this.getMaterials();
  }
  
 
  onEdit() {
    this.WOForm.controls['id'].setValue(this.workingOrder.id);
    this.WOForm.controls['locationId'].setValue(this.workingOrder.locationId);
    this.WOForm.controls['materialId'].setValue(this.workingOrder.materialId);
    this.WOForm.controls['damageTypeId'].setValue(this.workingOrder.damageTypeId);
    this.WOForm.controls['woNumber'].setValue(this.workingOrder.woNumber);

    this.opened = true;
  }
  public close(status: string): void {
    this.opened = false;}
  OnSubmit(){
    this.api.update("WORk/Update",this.WOForm.value).subscribe({
      next: (res) => {
        this.getWORD();
        this.WOForm.reset();  
        this.opened = false;
      },
      error: (err) => {
        alert("error")
      },
    });
  }  

}

