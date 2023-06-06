import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonFillMode } from '@progress/kendo-angular-buttons';
import { DialogAnimation } from '@progress/kendo-angular-dialog';
import { StepperComponent } from '@progress/kendo-angular-layout';
import { NotificationService } from '@progress/kendo-angular-notification';
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
  dossierForm!: FormGroup;
  involvedPartyForm!:FormGroup
  StatusForm!:FormGroup;
  dupedForm ! :FormGroup
  AssignForm!:FormGroup
  WOForm !:FormGroup
  opened = false;
  openedStatus = false
  activateDos =false
  data:any
  bts:any
  role:any
  id:any
  Clients:any
  Objects:any
  Products:any
  SubCauses:any
  usersList:any
  InvolvedParties:any
  MainCauses:any
  causes:any
  Materials :any
  Locations:any 
  Status:any
  damageTypes :any
  animation: boolean | DialogAnimation = {};
  dialogThemeColor:any= "primary";
  SelectedDossier : any
  icons = { trash:plusIcon };
  gridData!: any;
  fillMode: ButtonFillMode = "flat";
  
  constructor(private notificationService :NotificationService,
              private _snackBar: MatSnackBar ,
              private dossierService : DossierService,
              private api : GenericService ,
              private router :Router , 
              private route : ActivatedRoute , 
              private fb : FormBuilder, 
              private auth :UserStoreService){}                     
  ngOnInit(): void {
       this.role= this.auth.getRole();
       this.id = this.auth.getId();
       this.workingOrderForm()
       this.DossierForm()
       this.AssignmentForm()
       this.InvPartyForm()
       this.getDossiers();
       this.getDamageTypes();
       this.getLocations();
       this.getMaterials();
       this.getBuildingtypes()
       this.getObjects()
       this.getMainCauses()
       this.getClient()
       this.getUsers()
      }

    onButtonClick(id :any){
    this.router.navigate(["Details/",id],  {relativeTo: this.route});
   }
   //***********Stepper******* */
   public currentStep = 0;
   @ViewChild("stepper", { static: true })
   public stepper!: StepperComponent;
   private isStepValid = (index: number): boolean => {
     return this.getGroupAt(index).valid || this.currentGroup.untouched;
   };
   private shouldValidate = (index: number): boolean => {
     return this.getGroupAt(index).touched && this.currentStep >= index;
   };
   public steps = [
     {
       label: "General",
       isValid: this.isStepValid,
       validate: this.shouldValidate,
     },
      {
      label: "Information",
       isValid: this.isStepValid,
       validate: this.shouldValidate,
     },
     {
       label: "Damage",
       isValid: this.isStepValid,
       validate: this.shouldValidate,
     },

   ];
   public form = new FormGroup({
    accountDetails: new FormGroup({
      userName: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
      avatar: new FormControl(null),
    }),
    personalDetails: new FormGroup({
      fullName: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      about: new FormControl(""),
    }),
    paymentDetails: new FormGroup({
      paymentType: new FormControl(null, Validators.required),
      cardNumber: new FormControl("", Validators.required),
      cvc: new FormControl("", [
        Validators.required,
        Validators.maxLength(3),
        Validators.minLength(3),
      ]),
      expirationDate: new FormControl("", Validators.required),
      cardHolder: new FormControl("", Validators.required),
    }),
  });
  getGroupAt(index: number): FormGroup {
                const groups = Object.keys(this.form.controls).map((groupName) =>
                  this.form.get(groupName)
                ) as FormGroup[];
            
                return groups[index];
              }        
  public get currentGroup(): FormGroup {
        return this.getGroupAt(this.currentStep);
    }        
  next() {
    if (this.currentGroup.valid && this.currentStep !== this.steps.length) {
          this.currentStep += 1;
           return;
      }
    this.currentGroup.markAllAsTouched();
    this.stepper.validateSteps();
  }
  prev(): void {   this.currentStep -= 1;}
  submit() { 
    console.log("111111111111")
     console.log(this.AssignForm.value)
     console.log("22222222222")
     console.log(this.WOForm.value)
     console.log("33333333333")
     console.log(this.dossierForm.value)
     console.log("44444444444444")

  }  
  //************Dialogs**************/
  close(status: string): void {
      this.openedStatus= false; 
      this.opened = false;
      this.activateDos = false}
  open(Stat:any): void {
    if(Stat == "dossier"){this.opened =true}
    else{   
     this.SelectedDossier=Stat;
      this.openedStatus = true;
    }
  } 
  onSelectedclient(event:any){
    var clientId = event.selectedRows![0].dataItem.id;
    this.dossierForm.get('clientId')?.setValue(clientId);
    this.getProducts(clientId)
  }
  handleFilterChangeclient(event:any){
  }
  onselectMainCause(value:any){
   
    this.getCauses(value);
  }
  onSelectedUser(event:any){}
  //***********Dossier Actions ******/
  Activate()
  {
    this.dossierService.ActivateDos(this.SelectedDossier.id).subscribe({
      next: (res) => {
        this.getDossiers()
        this.activateDos=false
        this.notificationService.show({
          content: "Dossier Activated successfully",
          animation: { 
            type:"slide",
            duration:500,
          },
          type: { style: "success" },
        });    
      },
      error: (err) => {
        this.getDossiers()
        this.activateDos=false   },});
  }
  activateDossier(doss:any)
  { this.activateDos = true
    this.SelectedDossier = doss 
   }
  addDossier(){
    this.dossierForm.get('CreatedById')?.setValue(this.auth.getId());
    this.api.add("Dossier/Add",this.dossierForm.value).subscribe({
    next: (res) => {
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
  //***********Load Data******************* */ 
  getDossiers(){
    this.api.getList("Dossier/List").subscribe({
      next: (res) => {
        this.gridData =res;
      },
      error: (err) => {
        this._snackBar.open("Error while getting the dossiers",'',{ 
          duration: 3000 }) },  });
  }
  getProducts(id:any) {
    this.api.getById("Product",id).subscribe({
      next: (res) => {
        this.Products = res;
        console.log("Products : ")
        console.log(res)
      },
      error: (err) => {
      },
    });
  }
  getCauses(id:any) {
    this.api.getById("Cause",id).subscribe({
      next: (res) => {
        this.causes = res  
      },
      error: (err) => {   },
    });
  }
  getMainCauses()
  {
    this.api.getList("MainCause").subscribe({
      next: (res) => {
        this.MainCauses = res;
       
      },
      error: (err) => {   },
    });
  }
  getObjects() {
    this.api.getList("Object" ).subscribe({
      next: (res) => {
        this.Objects = res;
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
  getBuildingtypes() {
    this.api.getList("Building").subscribe({
      next: (res) => {
        this.bts = res;
       
      },
      error: (err) => {   },
    });
  }
  getClient() {
    this.api.getList("Client" ).subscribe({
      next: (res) => {
        this.Clients = res;
      },
      error: (err) => {
      },
    });
  }
  getUsers() {
    this.api.getById("User/List" , this.id).subscribe({
      next: (res) => {
        this.usersList=res
      },
      error: (err) => {
      },
    });
  }
  /*****************Forms************ */
  workingOrderForm(){
    this.WOForm = this.fb.group({
      locationId: ['', Validators.required],
      materialId: ['', Validators.required],
      damageTypeId: ['', Validators.required],
      objectId: ['', Validators.required],
    });
   }  
   AssignmentForm(){
    this.AssignForm = this.fb.group({
      product: ['', Validators.required],
      subCauseId: ['', Validators.required],
      buildingType: ['', Validators.required],
      productId: ['', Validators.required],
      dossierId: ['']
    });
   } 
   DossierForm(){
    this.dossierForm = this.fb.group({
      dossierNumber: ['', Validators.required],
      dateOfOccurance: ['', Validators.required],
      mainCauseId: ['', Validators.required],
      clientId: ['', Validators.required],
      isEmergency: [false, Validators.required],
      Assigned: [false],
      CreatedById :['']
    });
   } 
  InvPartyForm(){
    this.involvedPartyForm = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      FullName: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      Email: ['', Validators.required],
      PostalCode: [0, Validators.required],
      HouseNumber: [0, Validators.required],
      StreetName: ['', Validators.required],
      City: ['', Validators.required],
      CreatedById :['']
    });
   } 
}
