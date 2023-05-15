import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonFillMode } from '@progress/kendo-angular-buttons';
import { DialogAnimation } from '@progress/kendo-angular-dialog';
import { plusIcon } from '@progress/kendo-svg-icons';
import { DossierService } from 'src/app/services/dossier.service';
import { GenericService } from 'src/app/services/generic.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-dossier-list',
  templateUrl: './dossier-list.component.html',
  styleUrls: ['./dossier-list.component.css','./../../../../../assets/sharedCss/SharedStyle.scss']
})
export class DossierListComponent implements OnInit {
  public opened = false;
  public openedStatus = false
  public animation: boolean | DialogAnimation = {};
  public dialogThemeColor:any= "primary";
  dossierForm!: FormGroup;
  StatusForm!:FormGroup;
  Status:any
  SelectedDossier : any
  public icons = { trash:plusIcon };
  public gridData!: any;
  snackbarConfig: MatSnackBarConfig = {
    duration: 3000,
    panelClass: 'my-snackbar',
    };
    public fillMode: ButtonFillMode = "flat";

  constructor(private _snackBar: MatSnackBar ,private dossierService : DossierService, private api : GenericService , private router :Router , private route : ActivatedRoute , private fb : FormBuilder, private auth :UserStoreService){}
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message);
  }
  addDossier(){
    this.dossierForm.get('CreatedById')?.setValue(this.auth.getId());
    this.api.add("Dossier/Add",this.dossierForm.value).subscribe({
    next: (res) => {
      alert('Dossier added successfully')
      this._snackBar.open("Dossier added successfully",'',{ 
        duration: 3000
    })
      this.getDossiers();
      this.dossierForm.reset();  
      this.opened = false;
    },
    error: (err) => {
      this._snackBar.open("Error while adding dossier",'',{ 
        duration: 3000
    })

    },
  });
}
  getDossiers(){
    this.api.getList("Dossier/List").subscribe({
      next: (res) => {
        this.gridData =res;
        console.log(res);
      },
      error: (err) => {
        this._snackBar.open("Error while getting the dossiers",'',{ 
          duration: 3000
      })

      },
    });
  }
    getStatus(){
    this.api.getList("DossierStatus/List").subscribe({
      next: (res) => {
        this.Status =res;
      },
      error: (err) => {
      },
    });
  }
   ngOnInit(): void {
    this.dossierForm = this.fb.group({
      DossierNumber: ['', Validators.required],
      Assigned: [false],
      CreatedById :['']
    });
    this.StatusForm = this.fb.group({
      dossierStatus: ['', Validators.required],
    });
       this.getDossiers();
       this.getStatus();
   }
   onButtonClick(id :any){
    this.router.navigate(["Details/",id],  {relativeTo: this.route});
   }
   public close(status: string): void {
    this.getDossiers()
    this.openedStatus= false; 
     this.opened = false;

  }
  public open(Stat:any): void {
    if(Stat == "dossier"){this.opened =true}
    else{   
     this.SelectedDossier=Stat;

      this.openedStatus = true;
    }
  }
  updateStatus()
  {
    this.dossierService.UpdateStatus(this.SelectedDossier,this.StatusForm.get('dossierStatus')?.value).subscribe({
      next: (res) => {
        alert("dossier updated successfully")
        this.getDossiers()
        this.openedStatus=false
        this._snackBar.open("Dossier status updated successfully","",this.snackbarConfig)

      },
      error: (err) => {
        this.getDossiers()
        this.openedStatus=false 
        this._snackBar.open("Dossier status updated successfully","",this.snackbarConfig)

      },
    });
  }
}
