import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericService } from 'src/app/services/generic.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-create-dossier',
  templateUrl: './create-dossier.component.html',
  styleUrls: ['./create-dossier.component.css']
})
export class CreateDossierComponent implements OnInit {
  dossierForm !: FormGroup
  constructor(private api : GenericService , private router :Router ,private fb : FormBuilder, private auth :UserStoreService){}

  
  
   ngOnInit(): void {
    this.dossierForm = this.fb.group({
      DossierNumber: ['', Validators.required],
      dupedName: ['', Validators.required],
      Assigned: [false],
      CreatedById :['']
    });
   }
   addDossier(){
    this.dossierForm.get('CreatedById')?.setValue(this.auth.getId());
    this.api.add("Dossier/Add",this.dossierForm.value).subscribe({
    next: (res) => {
      alert('Dossier added successfully')
      console.log(this.dossierForm.value);
      this.dossierForm.reset();  
    },
    error: (err) => {
    },
  });
}
}
