import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SelectEvent, TabAlignment } from '@progress/kendo-angular-layout';
import { FileInfo, FileRestrictions } from '@progress/kendo-angular-upload';
import { clockIcon } from '@progress/kendo-svg-icons';
import { GenericService } from 'src/app/services/generic.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-dossier-overview',
  templateUrl: './dossier-overview.component.html',
  styleUrls: ['./dossier-overview.component.css','./../../../../../../../assets/sharedCss/SharedStyle.scss']
})
export class DossierOverviewComponent {
  id: any
  dossier: any;
  selectedFiles: any;

  notes: any[] = []
  public selected = 1;
  public icons = { trash: clockIcon }

  public uploadSaveUrl = "https:///localhost:7196/Documents/upload";

  public uploadRemoveUrl = 'removeUrl';
  valueChange: any;
  httpClient: any;
/*
  public onSelect(ev: any): void {

    const formData = new FormData();

    ev!.files!.forEach((file: FileInfo) => {

      if (file.rawFile) {

        formData.append('file', file.rawFile);

        const reader = new FileReader();

        reader.onloadend = () => {

          const img = new Image();

          img.src = <string>reader.result;

          img.onload = () => {

            this.valueChange.emit({

              src: img.src,

              height: img.height,

              width: img.width

            });

          };

          //when i wdo it cz of security doesnt appear

          /*img.onload = () => {
 
            const sanitizedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(img.src);
 
            this.valueChange.emit({
 
              src: sanitizedSrc.toString(),
 
              height: img.height,
 
              width: img.width
 
            });
 
          };

        };



        reader.readAsDataURL(file.rawFile);

      }

    });

    this.httpClient.post(this.uploadSaveUrl, formData).subscribe(

      (response:any) => {

        console.log(response);

      },

      (error:any) => {

        console.log(error);

      }

    );

  }*/



  public onRemove(): void {

    this.valueChange.emit();

  }
  myRestrictions: FileRestrictions = {
    maxFileSize: 4194304,
  };
  public items = [
    {
      disabled: false,
      city: "Informations",
      temp: 19,
      weather: "cloudy",
    },
    {
      disabled: false,
      city: "Documents",
      temp: 17,
      weather: "rainy",
    },
    {
      disabled: false,
      city: "Notes",
      temp: 29,
      weather: "sunny",
    },
    {
      disabled: false,
      city: "Email",
      temp: 23,
      weather: "cloudy",
    }
  ];
  uploadForm: FormGroup
  public alignment: TabAlignment = "start";
  documentForm!: FormGroup;
  constructor(private route: ActivatedRoute, private api: GenericService, private userStore: UserStoreService, private fb: FormBuilder) {
    this.uploadForm = this.fb.group({
      files: []
    });
  }
  getDossier() {
    this.api.getById("Dossier/GetById", this.id).subscribe({
      next: (res) => {
        this.dossier = res.dossier;
        this.notes = res.dossier.notes
        console.log("this.dossier");
      },
      error: (err) => {
        alert("errordetDossier")
      },
    });
  }
  ngOnInit(): void {
    this.id = this.userStore.getDossierId()
    this.getDossier();
    this.documentForm = this.fb.group({
      file: [null, Validators.required],
      fileName: ['', Validators.required]
    });
  }
  confirmUpload(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    alert(file)
  }
  select(event: any) {
    alert("selectedfile")
    console.log(event)
    this.selectedFiles = event.files;
  }
  onSubmit(): void { }
}
