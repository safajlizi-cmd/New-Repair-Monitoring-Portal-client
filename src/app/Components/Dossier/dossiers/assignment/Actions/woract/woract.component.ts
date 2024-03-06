import { HttpResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonFillMode } from '@progress/kendo-angular-buttons';
import { TabAlignment } from '@progress/kendo-angular-layout';
import { saveAs } from '@progress/kendo-file-saver';
import { Observable } from 'rxjs';
import { DocumentService } from 'src/app/services/document.service';
import { GenericService } from 'src/app/services/generic.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { tabs } from '../../tabs';
import { clockIcon } from '@progress/kendo-svg-icons';
import { NotificationService } from '@progress/kendo-angular-notification';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-woract',
  templateUrl: './woract.component.html',
  styleUrls: ['./woract.component.css','./../../../../../../../assets/sharedCss/SharedStyle.scss']
})
export class WORActComponent {
   id :any;
  public selected = 0;
  openedDelete=false
  public items = tabs
  public alignment: TabAlignment = "start";
  selectedFiles?: File;
  currentFile?: File;
  progress = 0;
  deleteID :any
  message = '';
  notes:any;
  fileInfos?:any;
  myForm !:FormGroup
  public icons = { trash: clockIcon }
  public fillMode: ButtonFillMode = "flat";
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
                       this.uploadService.addDocument("Documents/upload",this.currentFile,'workingOrder',this.id,this.userStore.getDossierId()).subscribe({
                  next: (event: any) => {
                        this.getDocuments()
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
         this.uploadService.getByWorkingOrder( this.id).subscribe({
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
    getNotes() {
      this.api.getById("Note/WorkingOrder", this.id).subscribe({
        next: (res) => {
          this.notes = res },
        error: (err) => {
        },
      });
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
          },
     });
  }
  constructor(private route:ActivatedRoute,
              private uploadService:DocumentService,
              private userStore:UserStoreService ,
              private fb :FormBuilder,
              private notificationService :NotificationService,
              private api:GenericService){}
  close(){
    this.openedDelete=false
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['Id'];
    });   
    this.myForm = this.fb.group({
      files: [,Validators.required],
    });
    this.getDocuments();
    this.getNotes()
  }
}
