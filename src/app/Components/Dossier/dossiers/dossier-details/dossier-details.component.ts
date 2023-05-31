import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogAnimation } from '@progress/kendo-angular-dialog';
import { GenericService } from 'src/app/services/generic.service';
import { Location } from '@angular/common';
import { FilterExpandSettings } from '@progress/kendo-angular-treeview';
import { pencilIcon, plusIcon, trashIcon, clockIcon } from '@progress/kendo-svg-icons';
import { DrawerMode } from '@progress/kendo-angular-layout';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import { UserStoreService } from 'src/app/services/user-store.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-dossier-details',
  templateUrl: './dossier-details.component.html',
  styleUrls: ['./dossier-details.component.scss','./../../../../../assets/sharedCss/SharedStyle.scss']
})
export class DossierDetailsComponent implements OnInit {
  id: any
  assignId: any
  AssignForm!: FormGroup;
  WOForm!: FormGroup;
  opened = false
  openedassy = false
  selectedAct: any
  Assignments: any[] = [];
  Words: any[] = [];
  bts: any[] = [];
  causes: any[] = [];
  dossier !: any
  selectedItemId: any;
   Materials: any
   Locations: any
   damageTypes: any
  showAct: any
  public filterTerm = "";
  public icons = { plus: plusIcon, trash: clockIcon, delete: trashIcon, edite: pencilIcon };
  constructor(private notificationService :NotificationService,private _snackBar: MatSnackBar,private route : ActivatedRoute, private api: GenericService, private fb: FormBuilder, private router: Router , private userStore:UserStoreService) {
  }
  getDossier() {
    this.api.getById("Dossier/GetById", this.id).subscribe({
      next: (res) => {
        this.dossier = res.dossier;
      },
      error: (err) => {
      },
    });
  }
  getLocations() {
    this.api.getList("Location/List").subscribe({
      next: (res) => {
        this.Locations = res;
      },
      error: (err) => {
      },
    });
  }
  getMaterials() {
    this.api.getList("Material/List").subscribe({
      next: (res) => {
        this.Materials = res;
      },
      error: (err) => {
      },
    });
  }
  getDamageTypes() {
    this.api.getList("DamageType/List").subscribe({
      next: (res) => {
        this.damageTypes = res;
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
  getAssignments() {
    this.api.getList("Assignment/List/" + this.id).subscribe({
      next: (res) => {
        this.Assignments = res;
        this.Assignments.forEach((assignment: any) => {
          this.Words = assignment.workingOrdersC
          if (this.Words!.length == 0) {
            assignment.workingOrdersC = [{ woNumber: 'No working orders...' }];
          }
        });
      },
      error: (err) => {  },
    });
  }
  ngOnInit() {
    this.WOForm = this.fb.group({
      locationId: ['', Validators.required],
      materialId: ['', Validators.required],
      damageTypeId: ['', Validators.required],
      assignmentId: ['']
    });
    this.AssignForm = this.fb.group({
      product: ['', Validators.required],
      cause: ['', Validators.required],
      buildingType: ['', Validators.required],
      dossierId: ['']
    });
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.userStore.setDossierId(this.id)
    });
    this.getDossier();
    this.getAssignments();
    this.getDamageTypes();
    this.getLocations();
    this.getMaterials();
    this.getBuildingtypes();
    this.getCauses();
  }
  public nodeHasChildren(node: any): boolean {
    return node.children && node.children.length > 0;
  }
  public open(): void {
    this.openedassy = true;}
  public openWo(id:any): void {
    this.assignId = id
    this.opened = true;}
  onAssignmentClick(dataItem: any) {
    
    this.selectedAct = dataItem.id;
    this.getAssignments()
    if (dataItem.woNumber && dataItem.woNumber != 'No working orders...') {
      this.router.navigate(["Word/", dataItem.id], { relativeTo: this.route });
    }
    else {
      this.showAct = 'assyn'
      this.router.navigate(["Assignment/", dataItem.id], { relativeTo: this.route });
    }
  }

  onSubmit() {
    this.AssignForm.get('dossierId')?.setValue(this.id);
    this.api.add("Assignment/Add", this.AssignForm.value).subscribe({
      next: (res) => {
        this.AssignForm.reset(); // reset the task object after submitting the form
        this.getAssignments();  
        this.openedassy = false; 
    
      this.notificationService.show({
        content: "Assignment added successfully",
        animation: { 
          type:"slide",
          duration:500,
        },
        type: { style: "success" },
      });    
      },
      error: (err) => {
           
      },
    });
  }
  AddWorkingOrder() {
    this.WOForm.get('assignmentId')?.setValue(this.assignId);
    this.api.add("WorkingOrder/Add", this.WOForm.value).subscribe({
      next: (res) => {
        this.WOForm.reset(); 
        this.opened = false;  
        this.getAssignments()
    
      this.notificationService.show({
        content: 'Working Order added successfully',
        animation: { 
          type:"slide",
          duration:500,
        },
        type: { style: "success" },
      });    

      },
      error: (err) => {
         
      },
    });
  }
  public close(status: string): void {
    this.opened = false;
    this.openedassy=false
  }
}