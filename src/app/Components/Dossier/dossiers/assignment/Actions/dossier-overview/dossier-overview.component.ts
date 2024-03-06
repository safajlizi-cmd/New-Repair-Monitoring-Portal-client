import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ButtonFillMode } from '@progress/kendo-angular-buttons';
import { SelectEvent, TabAlignment } from '@progress/kendo-angular-layout';
import { FileInfo, FileRestrictions } from '@progress/kendo-angular-upload';
import { saveAs } from '@progress/kendo-file-saver';
import { clockIcon } from '@progress/kendo-svg-icons';
import { Observable } from 'rxjs';
import { DocumentService } from 'src/app/services/document.service';
import { GenericService } from 'src/app/services/generic.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { tabs } from '../../tabs';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-dossier-overview',
  templateUrl: './dossier-overview.component.html',
  styleUrls: ['./dossier-overview.component.css','./../../../../../../../assets/sharedCss/SharedStyle.scss']
})
export class DossierOverviewComponent {
  id: any
  dossier: any;
  duped :any
  notes: any[] = []
  openedDelete=false
  public selected = 0;
  public icons = { trash: clockIcon }
  selectedFiles?: File;
  currentFile?: File;
  deleteID:any
  progress = 0;
  message = '';
  myForm!:FormGroup
  public fillMode: ButtonFillMode = "flat";
  fileInfos?: any;
  
  selectFile(event: any): void {
    this.selectedFiles = this.myForm.value.files[0];
  }
  openfile(item:any){
         var src = "data:application/" + item.documentType + ";base64," + item.fileContent;
         var blob = this.dataURLtoBlob(src);
         var imageUrl = URL.createObjectURL(blob);
         var newWindow = window.open();
         var newDocument = newWindow!.document;
          newDocument.write("<html><body><img src='" + imageUrl + "' /></body></html>");
         newDocument.title = item.fileName.split("/").pop();
   }

  dataURLtoBlob(dataURL:any) {
         var parts = dataURL.split(';base64,');
         var contentType = parts[0].split(':')[1];
         var byteString = atob(parts[1]);
         var arrayBuffer = new ArrayBuffer(byteString.length);
         var uint8Array = new Uint8Array(arrayBuffer);

          for (var i = 0; i < byteString.length; i++) {
                uint8Array[i] = byteString.charCodeAt(i);
            }
          return new Blob([arrayBuffer], { type: contentType });
  }
  saveByteArray(item:any) {
           var src= "data:application/"+item.documentType+";base64," +item.fileContent;
           saveAs(src, item.fileName.split("/").pop());
  }
  upload(): void {
          if (this.selectedFiles) {
                   const file: File | null = this.selectedFiles;
                  if (file) {
                       this.currentFile = file;
                       this.uploadService.addDocument("Documents/upload",this.currentFile,'dossier',this.id,this.id).subscribe({
                  next: (event: any) => {
                        this.getDocuments()
                        this.myForm.reset()
                        this.message = "documment added successfully"
                  },
                  error: (err: any) => {
                       if (err.error && err.error.message) {
                             this.message = err.error.message;
                       } else {
                              this.message = 'Could not upload the file!';
                        }
                  this.currentFile = undefined;
                  }
              });
             }
           this.selectedFiles = undefined;
         }
      }

  getDocuments() {
         this.uploadService.getByDossier( this.id).subscribe({
          next: (res) => {
                this.fileInfos = res;
           },
          error: (err) => {
           },
          });
     }
  delete(id:any){
            this.deleteID = id;
            this.openedDelete=true    
    } 
  deleteDocument() {
         this.uploadService.delete( this.deleteID).subscribe({
         next: (res) => {  
               this.getDocuments()
               this.openedDelete =false
               this.notificationService.show({
                content: "file deleted successfully",
                animation: {
                  type: "slide",
                  duration: 500,
                },
                type: { style: "success" },
              });
              },
          error: (err) => {
                this.notificationService.show({
                  content: "Error occurred while deleting document",
                  animation: {
                    type: "slide",
                    duration: 500,
                  },
                  type: { style: "error" },
                });
                
          },
     });
  }
  public items =[...tabs, {
    disabled: false,
    city: "Emails"
  },{
    disabled: false,
    city: "History"
  }]
  public alignment: TabAlignment = "start";
  documentForm!: FormGroup;
  constructor(private route: ActivatedRoute,
              private api: GenericService, 
              private userStore: UserStoreService,
              private notificationService :NotificationService,
              private fb: FormBuilder,
               private uploadService: DocumentService) {
  }
  close(){
    this.openedDelete=false
  }
  getNotes() {
    this.api.getById("Note/Dossier", this.id).subscribe({
      next: (res) => {
        this.notes = res },
      error: (err) => {
      },
    });
  }
  getDossier() {
    this.api.getById("Dossier/GetById", this.id).subscribe({
      next: (res) => {
        this.dossier = res.dossier;
        this.openedDelete=false
        this.duped = res.dossier.involvedPart
        console.log("duper")
        console.log(this.duped)
      },
      error: (err) => {
      },
    });
  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      files: [,Validators.required],
    });
    this.id = this.userStore.getDossierId()
    this.getDocuments()
    this.getDossier();
    this.getNotes();
  }
  onSubmit(): void { }
}
