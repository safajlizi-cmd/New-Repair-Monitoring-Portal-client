import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogAnimation } from '@progress/kendo-angular-dialog';
import { plusIcon } from '@progress/kendo-svg-icons';
import { GenericService } from 'src/app/services/generic.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-dossier-list',
  templateUrl: './dossier-list.component.html',
  styleUrls: ['./dossier-list.component.css']
})
export class DossierListComponent implements OnInit {
  public opened = false;
  public animation: boolean | DialogAnimation = {};
  public dialogThemeColor:any= "primary";
  dossierForm!: FormGroup;
  public icons = { trash:plusIcon };
  public gridData!: any;
  constructor(private api : GenericService , private router :Router , private route : ActivatedRoute , private fb : FormBuilder, private auth :UserStoreService){}

  addDossier(){
    this.dossierForm.get('CreatedById')?.setValue(this.auth.getId());
    this.api.add("Dossier/Add",this.dossierForm.value).subscribe({
    next: (res) => {
      alert('Dossier added successfully')
      console.log(this.dossierForm.value);
      this.getDossiers();
      this.dossierForm.reset();  
      this.opened = false;
    },
    error: (err) => {
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
      },
    });
  }
   ngOnInit(): void {
    this.dossierForm = this.fb.group({
      DossierNumber: ['', Validators.required],
      Assigned: [false],
      CreatedById :['']
    });
       this.getDossiers();
   }
   onButtonClick(id :any){
    this.router.navigate(["Details/",id],  {relativeTo: this.route});
   }
   public close(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }
  public open(): void {
    this.opened = true;
  }
}
